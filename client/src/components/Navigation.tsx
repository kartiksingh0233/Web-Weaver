import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/RKB_Logo_1769961850657.png";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/why-choose-us", label: "Why Us" },
    { href: "/contact", label: "Contact" },
  ];

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => setLogoClicked(false), 2000);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity" onClick={handleLogoClick}>
            <motion.div
              animate={logoClicked ? { 
                rotateY: [0, 180, 360],
                rotateX: [0, 15, 0, -15, 0],
                scale: [1, 1.3, 1.1, 1.3, 1],
              } : {
                rotateY: [0, 10, -10, 0],
                scale: [1, 1.02, 1],
              }}
              transition={logoClicked ? { 
                duration: 1.5, 
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              } : {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.img 
                src={logoImage} 
                alt="RKB Digital Services" 
                className="h-14 w-14 object-contain drop-shadow-2xl relative z-10"
                whileHover={{ 
                  scale: 1.15, 
                  rotateZ: [0, -5, 5, 0],
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">RKB Digital Services</span>
              <span className="block text-xs text-muted-foreground">All India Digital Marketing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  location === link.href 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://wa.me/919369088265" target="_blank" rel="noopener noreferrer">
              <Button size="default" className="ml-4 font-semibold shadow-lg shadow-primary/25 gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/10"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t border-border animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-2 bg-background">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  location === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <a href="https://wa.me/919369088265" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center text-base py-6 shadow-md gap-2">
                  <Phone className="w-5 h-5" />
                  WhatsApp: +91 9369088265
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
