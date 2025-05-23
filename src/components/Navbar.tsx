import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Activities', href: '#activities' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(link => document.querySelector(link.href));
      const viewportHeight = window.innerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 3) {
          setActiveSection(NAV_LINKS[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sehr Abrar's Portfolio
          </a>

          {!isMobile && (
            <div className="flex items-center space-x-1 bg-white/30 backdrop-blur-sm p-1 rounded-full shadow-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "nav-link text-sm px-3 py-1 transition-colors duration-300",
                    activeSection === link.href
                      ? "text-blue-700 font-semibold"
                      : "text-gray-700 hover:text-blue-700"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar & Overlay placed outside the .container */}
      {isMobile && (
        <>
          {/* Overlay */}
          <div
            className={cn(
              "fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity",
              mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={cn(
              "fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-6 flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleLinkClick(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
