import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, User } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

const teamMembers = [
  { name: "Mr. Rohit", role: "CEO", phone: "+91 8081874894" },
  { name: "Mr. Kaushlendra", role: "MD", phone: "+91 9369088265" },
  { name: "Mr. Brajendra", role: "Director", phone: "+91 9696824627" },
  { name: "Mr. Chandra Bhushan", role: "Chairperson", phone: "+91 6387122561" },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get in touch with us for a free consultation. We'd love to hear about your school.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Team Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-display text-center mb-8">Our Leadership Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teamMembers.map((member, i) => (
                <motion.a
                  key={i}
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <User className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold font-display mb-6 text-slate-900">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                      <a href="tel:+919369088265" className="text-primary hover:underline text-lg font-medium">+91 9369088265</a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9am - 7pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="text-muted-foreground">contact@rkbdigital.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-muted-foreground">Lalitpur, Uttar Pradesh, India</p>
                      <p className="text-sm text-muted-foreground mt-1">Service Area: All Private Schools in Lalitpur</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/919369088265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-white/80">Get instant response</p>
                </div>
              </a>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px]"></div>
                <h3 className="text-xl font-bold font-display mb-4 relative z-10">Service Area</h3>
                <p className="text-slate-300 relative z-10 mb-4">
                  We primarily serve private schools in:
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {["Lalitpur City", "Surrounding Towns", "All Private Schools"].map((area, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold font-display mb-2 text-slate-900">Send an Inquiry</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              <InquiryForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
