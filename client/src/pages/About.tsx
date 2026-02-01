import { motion } from "framer-motion";
import { Target, Users, Shield, Award, Heart, Lightbulb, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoImage from "@assets/RKB_Logo_1769961850657.png";

const values = [
  {
    icon: Target,
    title: "School-Focused Marketing",
    description: "We specialize exclusively in educational marketing, understanding the unique needs of schools and parents."
  },
  {
    icon: Users,
    title: "Local Parent Targeting",
    description: "We target parents in Lalitpur who are actively searching for quality education for their children."
  },
  {
    icon: Shield,
    title: "100% Transparency",
    description: "Fixed monthly pricing with no hidden costs. You always know exactly what you're paying for."
  },
  {
    icon: Award,
    title: "Professional Creatives",
    description: "High-quality posters, reels, and captions designed to make your school stand out."
  },
  {
    icon: Heart,
    title: "Personal Support",
    description: "Quick response times and dedicated attention to each school we partner with."
  },
  {
    icon: Lightbulb,
    title: "Result-Driven",
    description: "Every campaign is designed with one goal: increasing your school's admissions."
  }
];

const teamMembers = [
  { name: "Mr. Rohit", role: "CEO", phone: "+91 8081874894" },
  { name: "Mr. Kaushlendra", role: "MD", phone: "+91 9369088265" },
  { name: "Mr. Brajendra", role: "Director", phone: "+91 9696824627" },
  { name: "Mr. Chandra Bhushan", role: "Chairperson", phone: "+91 6387122561" },
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
              Your trusted partner for school digital marketing in Lalitpur
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
                  <img src={logoImage} alt="RKB Digital Services" className="w-48 h-48 mx-auto object-contain mb-6" />
                  <div className="text-center">
                    <h2 className="text-2xl font-bold font-display text-primary">RKB Digital Services</h2>
                    <p className="text-muted-foreground font-medium">School Admission & Digital Promotion Experts</p>
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
              <h2 className="text-3xl md:text-4xl font-bold font-display">Dedicated to Growing School Admissions</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                RKB Digital Services is a specialized digital marketing agency based in <strong className="text-foreground">Lalitpur, Uttar Pradesh</strong>. We focus exclusively on helping private schools increase their visibility and admissions through modern digital marketing strategies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team understands the local market and parents' mindset. We create targeted campaigns on Facebook, Instagram, and WhatsApp that reach the right audience at the right time, driving inquiries and enrollments for your school.
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

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">Meet Our Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.a
                key={i}
                href={`tel:${member.phone.replace(/\s/g, '')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{member.phone}</span>
                </div>
              </motion.a>
            ))}
          </div>
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
              We're committed to delivering exceptional results for every school we work with.
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
              Let's discuss how we can help your school grow its admissions through effective digital marketing.
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
