import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import OpenAI from "openai";
import { db } from "./db";
import { conversations, messages } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // AI Chat endpoints
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationId, language } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Get or create conversation
      let convId = conversationId;
      if (!convId) {
        const [conv] = await db.insert(conversations).values({ title: message.slice(0, 50) }).returning();
        convId = conv.id;
      }

      // Save user message
      await db.insert(messages).values({ conversationId: convId, role: "user", content: message });

      // Get conversation history
      const history = await db.select().from(messages).where(eq(messages.conversationId, convId)).orderBy(messages.createdAt);
      
      const chatMessages = history.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

      // System prompt for multilingual RKB Digital Services chatbot
      const systemPrompt = `You are a helpful AI assistant for RKB Digital Services, an All India digital marketing agency.

IMPORTANT: Always respond in the SAME LANGUAGE that the user writes in. If they write in Hindi, respond in Hindi. If they write in English, respond in English. If they write in any other language, respond in that language.

About RKB Digital Services:
- We provide digital marketing services across All India
- We serve: Schools, Colleges, Hospitals, Clinics, Companies, Startups, Corporates, Societies
- Our services: Social Media Marketing (Facebook, Instagram, WhatsApp), Website Development, SEO, Video Reels, Graphics Design
- Location: Based in Lalitpur, Uttar Pradesh, serving All India
- Contact: Mr. Kaushlendra (MD) - +91 9369088265
- Email: rkbdigitalservices@gmail.com

Happy Client: Royal Academy School, Lalitpur - We helped them achieve excellent results with increased admissions and high-quality class content development.

Pricing packages start from Rs. 3,000/month for Basic, Rs. 5,000/month for Standard, and Rs. 10,000/month for Premium.

Be helpful, professional, and encourage users to contact us for a free consultation. If they have specific queries that need human attention, collect their name, phone number, and query to pass to our team.`;

      // Set up SSE
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = await openai.chat.completions.create({
        model: "gpt-5-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...chatMessages,
        ],
        stream: true,
        max_completion_tokens: 1024,
      });

      let fullResponse = "";

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          fullResponse += content;
          res.write(`data: ${JSON.stringify({ content, conversationId: convId })}\n\n`);
        }
      }

      // Save assistant message
      await db.insert(messages).values({ conversationId: convId, role: "assistant", content: fullResponse });

      res.write(`data: ${JSON.stringify({ done: true, conversationId: convId })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Chat error:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Failed to process message" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process message" });
      }
    }
  });

  return httpServer;
}
