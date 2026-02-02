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

      {/* Contact MD Section */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <h3 className="text-center text-white font-display font-bold text-xl mb-6">Contact Our MD</h3>
            <motion.a
              href="tel:+919369088265"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="block bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border-2 border-primary/50 rounded-2xl p-6 text-center transition-all duration-500 shadow-lg shadow-primary/20"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <span className="text-3xl font-bold text-white">MK</span>
              </motion.div>
              <p className="font-bold text-white text-xl">Mr. Kaushlendra</p>
              <p className="text-primary font-semibold text-lg">Managing Director</p>
              <p className="text-slate-300 text-lg mt-3 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                +91 9369088265
              </p>
            </motion.a>
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
              <motion.img 
                src={logoImage} 
                alt="RKB Digital Services" 
                className="h-16 w-16 object-contain"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              />
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
