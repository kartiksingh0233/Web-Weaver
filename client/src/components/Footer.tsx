import { Link } from "wouter";
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logoImage from "@assets/RKB_Logo_1769961850657.png";

const teamMembers = [
  { name: "Mr. Rohit", role: "CEO", phone: "+91 8081874894" },
  { name: "Mr. Kaushlendra", role: "MD", phone: "+91 9369088265" },
  { name: "Mr. Brajendra", role: "Director", phone: "+91 9696824627" },
  { name: "Mr. Chandra Bhushan", role: "Chairperson", phone: "+91 6387122561" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">
      {/* Team Contact Banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-center text-white font-display font-bold text-xl mb-6">Our Leadership Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.map((member, i) => (
              <a
                key={i}
                href={`tel:${member.phone.replace(/\s/g, '')}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                <p className="font-semibold text-white text-sm md:text-base">{member.name}</p>
                <p className="text-primary text-xs md:text-sm font-medium">{member.role}</p>
                <p className="text-slate-300 text-xs md:text-sm mt-2 flex items-center justify-center gap-1">
                  <Phone className="w-3 h-3" />
                  {member.phone}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="RKB Digital Services" className="h-16 w-16 object-contain" />
              <div>
                <span className="font-display text-xl font-bold text-white block">RKB Digital</span>
                <span className="text-xs text-primary">School Admission Experts</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering schools in Lalitpur with cutting-edge digital marketing solutions. Grow your admissions and build your brand with us.
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
              Services
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
                <span>contact@rkbdigital.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-white font-medium block">Lalitpur, Uttar Pradesh</span>
                  <span className="text-slate-500 text-xs">All Private Schools</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>&copy; {new Date().getFullYear()} RKB Digital Services. All rights reserved.</span>
          <span className="text-primary font-medium">School Admission & Digital Promotion Experts</span>
        </div>
      </div>
    </footer>
  );
}
