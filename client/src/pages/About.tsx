import { motion } from "framer-motion";
import { Target, Users, Shield, Award, Heart, Lightbulb, Phone, Building2, GraduationCap, Hospital, Briefcase, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/RKB_Logo_1769961850657.png";

const values = [
  {
    icon: Target,
    title: "All India Services",
    description: "We serve businesses across all of India - schools, hospitals, companies, and corporates."
  },
  {
    icon: Users,
    title: "Result-Driven",
    description: "Every campaign is designed with one goal: driving real business growth and results."
  },
  {
    icon: Shield,
    title: "100% Transparency",
    description: "Fixed monthly pricing with no hidden costs. You always know exactly what you're paying for."
  },
  {
    icon: Award,
    title: "Professional Creatives",
    description: "High-quality posters, reels, and content designed to make your business stand out."
  },
  {
    icon: Heart,
    title: "Dedicated Support",
    description: "Quick response times and personal attention to each client we partner with."
  },
  {
    icon: Lightbulb,
    title: "Smart Strategies",
    description: "Modern digital marketing strategies tailored to your specific industry and goals."
  }
];

const services = [
  { icon: GraduationCap, label: "Schools & Colleges", desc: "Admission marketing & brand building" },
  { icon: Hospital, label: "Hospitals & Clinics", desc: "Patient acquisition & reputation" },
  { icon: Building2, label: "Companies & Startups", desc: "Lead generation & brand awareness" },
  { icon: Briefcase, label: "Corporates & Societies", desc: "Digital presence & engagement" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your trusted All India digital marketing partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                  <motion.div className="relative mx-auto w-48 h-48 mb-6">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.img 
                      src={logoImage} 
                      alt="RKB Digital Services" 
                      className="w-48 h-48 object-contain relative z-10"
                      animate={{
                        rotateY: [0, 15, -15, 0],
                        scale: [1, 1.03, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ 
                        rotateY: 360, 
                        scale: 1.15,
                        filter: "drop-shadow(0 0 25px rgba(59, 130, 246, 0.5))"
                      }}
                    />
                  </motion.div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RKB Digital Services</h2>
                    <p className="text-muted-foreground font-medium">All India Digital Marketing Experts</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Dedicated to Growing Your Business</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">RKB Digital Services</strong> is a leading digital marketing agency based in <strong className="text-foreground">Lalitpur, Uttar Pradesh</strong>. We serve businesses across <strong className="text-foreground">All India</strong> including schools, hospitals, companies, corporates, and more.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team creates targeted campaigns on Facebook, Instagram, and WhatsApp that reach the right audience at the right time, driving inquiries and growth for your business.
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Our experienced leadership team is dedicated to your business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Mr. Chandra Bhushan", role: "Chairperson", initials: "CB", color: "from-amber-500 to-orange-500" },
              { name: "Mr. Rohit", role: "CEO", initials: "RO", color: "from-blue-500 to-cyan-500" },
              { name: "Mr. Kaushlendra", role: "MD", initials: "MK", phone: "+91 9369088265", color: "from-primary to-accent" },
              { name: "Mr. Brajendra", role: "Director", initials: "BR", color: "from-purple-500 to-pink-500" },
            ].map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => leader.phone && window.open(`tel:${leader.phone.replace(/\s/g, '')}`)}
                className={`bg-white rounded-2xl p-6 border-2 ${leader.phone ? 'border-primary/40 shadow-xl shadow-primary/10 cursor-pointer' : 'border-slate-100 shadow-lg'} text-center relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.phone ? 'from-primary/5 to-accent/5' : 'from-slate-50 to-white'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <motion.div
                  animate={leader.phone ? { 
                    boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 15px rgba(59, 130, 246, 0.15)", "0 0 0 0 rgba(59, 130, 246, 0)"],
                    scale: [1, 1.05, 1]
                  } : {}}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className={`relative w-24 h-24 bg-gradient-to-br ${leader.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <span className="text-3xl font-bold text-white">{leader.initials}</span>
                </motion.div>
                
                <h3 className="font-bold text-lg text-slate-900 relative z-10">{leader.name}</h3>
                <p className={`font-semibold text-sm mt-1 relative z-10 ${leader.phone ? 'text-primary' : 'text-slate-500'}`}>{leader.role}</p>
                
                {leader.phone && (
                  <motion.div 
                    className="mt-4 flex items-center justify-center gap-2 text-slate-700 relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold">{leader.phone}</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">All India Services</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              We provide digital marketing services to businesses across all of India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{service.label}</h3>
                <p className="text-sm text-muted-foreground mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Client */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Happy Client</span>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Success Story</h2>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                "RKB Digital Services completely transformed our school's digital presence. The team's dedication resulted in a significant increase in admissions and our brand is now well-recognized across Lalitpur."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  RA
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Royal Academy School</h4>
                  <p className="text-primary text-sm font-medium">Lalitpur, Uttar Pradesh</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground text-lg">
              We're committed to delivering exceptional results for every client we work with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to Partner with Us?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business grow through effective digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:+919369088265">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white/30 text-white hover:bg-white/10 gap-2">
                  <Phone className="w-5 h-5" />
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
