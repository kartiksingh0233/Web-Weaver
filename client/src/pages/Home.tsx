import { Link } from "wouter";
import { ArrowRight, CheckCircle2, PhoneCall, Rocket, Target, Users, Star, Sparkles, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Target,
    title: "Local Parent Targeting",
    description: "Reach parents in Lalitpur actively looking for quality schools for their children."
  },
  {
    icon: Rocket,
    title: "Digital Growth",
    description: "Professional website, social media presence, and brand building that creates trust."
  },
  {
    icon: Users,
    title: "Admission Focused",
    description: "Every campaign is designed to drive inquiries and boost enrollments."
  }
];

const benefits = [
  "Facebook & Instagram Marketing",
  "WhatsApp Promotion",
  "Professional Creatives",
  "Video Reels & Shorts",
  "SEO Optimization",
  "100% Transparent Pricing"
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-40 blur-[120px]"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm font-medium text-primary shadow-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              School Admission & Digital Promotion Experts
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Grow Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">School Admissions</span> with Smart Digital Marketing
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              We help private schools in <strong className="text-foreground">Lalitpur</strong> increase visibility, enquiries and admissions through <strong className="text-foreground">Facebook, Instagram and WhatsApp marketing</strong>.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 gap-2">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="https://wa.me/919369088265" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-2 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 gap-2">
                  <PhoneCall className="h-5 w-5" />
                  Call / WhatsApp Now
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {benefits.slice(0, 4).map((benefit, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-white/80 px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {benefit}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-8 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Schools Partnered", value: "50+", icon: Award },
                { label: "Admissions Generated", value: "2500+", icon: TrendingUp },
                { label: "Campaign ROI", value: "300%", icon: Star },
                { label: "Years Experience", value: "5+", icon: Sparkles },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 font-display">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-display mb-4"
            >
              Why Schools Trust RKB Digital
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg"
            >
              We understand the unique challenges of educational marketing and provide tailored solutions for schools in Lalitpur.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Complete Digital Solutions for Schools</h2>
              <p className="text-muted-foreground text-lg mb-8">
                From social media management to website development, we offer everything your school needs to succeed in the digital age.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full gap-2">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-2">Most Popular</span>
                  <h3 className="text-2xl font-bold">Standard Plan</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">&#8377;5,000</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "16-20 Social Media Posts",
                    "4 Short Reels per Month",
                    "Admission Open Posters",
                    "Festival & Event Creatives",
                    "Facebook & Instagram Handling",
                    "WhatsApp Promotion Posters"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/packages">
                  <Button className="w-full rounded-full" size="lg">
                    View All Packages
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="container relative mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Boost Your Admissions?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Join the leading schools in Lalitpur that are transforming their digital presence with our expert strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                  Start Your Journey Today
                </Button>
              </Link>
              <a href="tel:+919369088265">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-white/30 text-white hover:bg-white/10 gap-2">
                  <PhoneCall className="w-5 h-5" />
                  +91 9369088265
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
