import { Link } from "wouter";
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle, Building2, GraduationCap, Briefcase, Hospital } from "lucide-react";
import logoImage from "@assets/RKB_Logo_1769961850657.png";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">
      {/* All India Services Banner */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-b border-primary/20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-white font-display font-bold text-xl mb-4">We Serve All India</h3>
            <p className="text-slate-300 text-sm mb-6">Digital Marketing Services for Schools, Hospitals, Companies, Corporates & More</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: GraduationCap, label: "Schools & Colleges" },
                { icon: Hospital, label: "Hospitals & Clinics" },
                { icon: Building2, label: "Companies & Startups" },
                { icon: Briefcase, label: "Corporates & Societies" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-white font-display font-bold text-2xl mb-8">Our Leadership Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Mr. Chandra Bhushan", role: "Chairperson", initials: "CB", color: "from-amber-500 to-orange-500" },
                { name: "Mr. Rohit", role: "CEO", initials: "RO", color: "from-blue-500 to-cyan-500" },
                { name: "Mr. Kaushlendra", role: "MD", initials: "MK", phone: "+91 9369088265", color: "from-primary to-accent" },
                { name: "Mr. Brajendra", role: "Director", initials: "BR", color: "from-purple-500 to-pink-500" },
              ].map((leader, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${leader.phone ? 'from-primary/20 to-accent/20 border-primary/50' : 'from-white/5 to-white/10 border-white/20'} border rounded-2xl p-4 text-center cursor-pointer transition-all duration-300`}
                  onClick={() => leader.phone && window.open(`tel:${leader.phone.replace(/\s/g, '')}`)}
                >
                  <motion.div
                    animate={leader.phone ? { 
                      scale: [1, 1.05, 1],
                      boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 20px 5px rgba(59, 130, 246, 0.3)", "0 0 0 0 rgba(59, 130, 246, 0)"]
                    } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`w-16 h-16 bg-gradient-to-br ${leader.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
                  >
                    <span className="text-xl font-bold text-white">{leader.initials}</span>
                  </motion.div>
                  <p className="font-bold text-white text-sm">{leader.name}</p>
                  <p className={`text-xs font-semibold ${leader.phone ? 'text-primary' : 'text-slate-400'}`}>{leader.role}</p>
                  {leader.phone && (
                    <p className="text-xs text-green-400 mt-2 flex items-center justify-center gap-1">
                      <Phone className="w-3 h-3" />
                      {leader.phone}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.img 
                  src={logoImage} 
                  alt="RKB Digital Services" 
                  className="h-16 w-16 object-contain relative z-10"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  whileHover={{ 
                    scale: 1.2,
                    filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))"
                  }}
                />
              </motion.div>
              <div>
                <span className="font-display text-xl font-bold text-white block">RKB Digital Services</span>
                <span className="text-xs text-primary">All India Digital Marketing</span>
              </div>
            </motion.div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering businesses across India with cutting-edge digital marketing solutions. We serve schools, hospitals, companies, corporates, and more.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919369088265" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-green-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-primary hover:pl-2 transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary hover:pl-2 transition-all">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:pl-2 transition-all">Services</Link></li>
              <li><Link href="/packages" className="hover:text-primary hover:pl-2 transition-all">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary hover:pl-2 transition-all">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-primary hover:pl-2 transition-all">School Admission Marketing</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:pl-2 transition-all">Social Media Management</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:pl-2 transition-all">Website Development</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:pl-2 transition-all">Video & Reels Creation</Link></li>
              <li><Link href="/services" className="hover:text-primary hover:pl-2 transition-all">SEO & Branding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-medium block">+91 9369088265</span>
                  <span className="text-slate-500 text-xs">WhatsApp Available</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:rkbdigitalservices@gmail.com" className="hover:text-primary transition-colors">
                  rkbdigitalservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-medium block">Lalitpur, Uttar Pradesh</span>
                  <span className="text-slate-500 text-xs">Serving All India</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>&copy; {new Date().getFullYear()} RKB Digital Services. All rights reserved.</span>
          <span className="text-primary font-medium">All India Digital Marketing Experts</span>
        </div>
      </div>
    </footer>
  );
}
