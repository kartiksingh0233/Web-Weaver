import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/RKB_Logo_1769961850657.png";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/why-choose-us", label: "Why Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src={logoImage} alt="RKB Digital Services" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-primary leading-none">RKB Digital</span>
              <span className="block text-xs text-muted-foreground">School Admission Experts</span>
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
