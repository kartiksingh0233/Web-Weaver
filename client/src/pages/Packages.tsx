import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Basic",
    price: "₹3,000",
    description: "Essential digital presence for small schools.",
    features: [
      "Basic Social Media Management",
      "2 Posts per Week",
      "Monthly Performance Report",
      "Basic SEO Setup"
    ],
    highlight: false
  },
  {
    name: "Standard",
    price: "₹5,000",
    description: "Perfect for growing schools looking for admissions.",
    features: [
      "Social Media Management (FB/Insta)",
      "4 Posts per Week",
      "Google Business Profile Optimization",
      "Lead Generation Campaigns",
      "Bi-weekly Reports"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "₹10,000",
    description: "Complete digital dominance for established institutions.",
    features: [
      "All Social Platforms Management",
      "Daily Posts & Stories",
      "Advanced SEO & Content Marketing",
      "Video Content Creation",
      "Priority Support",
      "Website Maintenance"
    ],
    highlight: false
  }
];

export default function Packages() {
  return (
    <div className="min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">School Marketing Packages</h1>
          <p className="text-xl text-muted-foreground">
            Transparent pricing with no hidden costs. Choose the plan that fits your growth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative rounded-2xl p-8 bg-white border flex flex-col transition-all duration-300",
                pkg.highlight 
                  ? "border-primary shadow-2xl scale-105 z-10" 
                  : "border-border shadow-sm hover:shadow-xl"
              )}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" /> Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-display text-slate-900">{pkg.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{pkg.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="w-full">
                <Button 
                  variant={pkg.highlight ? "default" : "outline"}
                  className={cn("w-full h-12 font-semibold", pkg.highlight && "shadow-lg shadow-primary/25")}
                >
                  Choose {pkg.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-muted-foreground text-sm">
          * Custom packages available for large groups and universities. Contact us for a quote.
        </div>
      </div>
    </div>
  );
}
