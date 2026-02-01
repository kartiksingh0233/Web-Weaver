import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";

export default function Contact() {
  return (
    <div className="min-h-screen pt-12 pb-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us for a free consultation. We'd love to hear about your school.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold font-display mb-6 text-slate-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-muted-foreground">contact@rkbdigital.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="text-muted-foreground">Greater Noida, Uttar Pradesh</p>
                    <p className="text-sm text-muted-foreground mt-1">Serving Delhi NCR & Beyond</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-[50px]"></div>
              <h3 className="text-xl font-bold font-display mb-4 relative z-10">Service Areas</h3>
              <p className="text-slate-300 relative z-10 mb-4">
                We primarily serve schools in:
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Delhi", "Noida", "Greater Noida", "Gurgaon", "Ghaziabad", "Faridabad"].map((area, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
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
  );
}
