import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  MonitorSmartphone, 
  Smartphone, 
  Megaphone, 
  PenTool, 
  Video, 
  Bot 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Web & App Development",
      description: "Custom, responsive websites optimized for schools. Easy-to-manage content management systems."
    },
    {
      icon: Smartphone,
      title: "Mobile & Software Solutions",
      description: "School management apps, parent communication portals, and custom software solutions."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "SEO, Social Media Marketing, Google Ads, and targeted local campaigns to drive admissions."
    },
    {
      icon: PenTool,
      title: "Design & Branding",
      description: "Logo design, brochures, prospectus, and complete visual identity for your institution."
    },
    {
      icon: Video,
      title: "Video & Media Production",
      description: "School tour videos, student testimonials, and event coverage to showcase your campus."
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Chatbots for instant inquiry handling and automated follow-up systems for admissions."
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital solutions tailored specifically for the education sector. From visibility to enrollment, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
