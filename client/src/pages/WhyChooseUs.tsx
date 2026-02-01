import { motion } from "framer-motion";
import { Check, ShieldCheck, Banknote, Target, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: "Local Targeting Experts",
      description: "We know how to reach parents in your specific catchment area, ensuring every rupee spent targets a potential admission."
    },
    {
      icon: Banknote,
      title: "Fixed, Transparent Pricing",
      description: "No hidden fees or surprise charges. Our packages are designed to be affordable for schools of all sizes."
    },
    {
      icon: ShieldCheck,
      title: "Data Privacy & Security",
      description: "We handle your school's data with the utmost care and comply with all privacy regulations."
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Our strategies are data-driven and optimized to give you the highest return on investment in the form of admissions."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We value your time. All reports, posts, and updates are delivered promptly according to schedule."
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Choose Us?</h1>
          <p className="text-xl text-muted-foreground">
            Partner with a team that understands the education sector inside out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-24"
          >
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-display font-bold mb-6 relative z-10">The RKB Guarantee</h3>
              <p className="text-slate-300 mb-8 relative z-10">
                We are so confident in our services that we offer dedicated support to ensure your campaigns are running effectively. Your success is our success.
              </p>
              
              <div className="space-y-4 mb-8 relative z-10">
                {["Dedicated Account Manager", "Monthly Strategy Calls", "24/7 Priority Support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="relative z-10 w-full block">
                <Button className="w-full h-12 bg-white text-slate-900 hover:bg-slate-100 font-bold">
                  Start Your Partnership
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
