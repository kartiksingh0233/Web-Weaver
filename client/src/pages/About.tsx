import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About RKB Digital</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a dedicated team of digital marketing experts passionate about education. We help schools connect with parents and students in the digital age.
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Unsplash School Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            {/* education classroom students learning */}
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" 
              alt="Students learning in a classroom" 
              className="relative rounded-3xl shadow-xl w-full object-cover aspect-video"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-slate-900">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To empower educational institutions with the tools and strategies they need to thrive in a competitive landscape. We believe every great school deserves to be found by the right students.
            </p>
            
            <ul className="space-y-4">
              {[
                "School-Focused Digital Marketing",
                "Hyper-Local Targeting Strategies",
                "Transparent Reporting & Analytics",
                "Affordable Solutions for Schools of All Sizes"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that drive our work every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-muted-foreground">We focus on metrics that matter - admissions, inquiries, and brand growth.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership</h3>
              <p className="text-muted-foreground">We don't just work for you; we work with you as an extension of your team.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">We are committed to delivering the highest quality in design, code, and strategy.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-20 text-center">
        <Link href="/contact">
          <Button size="lg" className="rounded-full px-8 h-12">Get in Touch With Us</Button>
        </Link>
      </div>
    </div>
  );
}
