import { useState } from "react";
import { Store } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-testid="logo">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Store className="text-primary-foreground text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TechStore</h1>
              <p className="text-xs text-muted-foreground">Indonesia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beranda')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-beranda"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('panel')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-panel"
            >
              Panel
            </button>
            <button 
              onClick={() => scrollToSection('jasa')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-jasa"
            >
              Jasa
            </button>
            <button 
              onClick={() => scrollToSection('kontak')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-kontak"
            >
              Kontak
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden p-2 text-foreground"
            data-testid="mobile-menu-button"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-menu md:hidden bg-card border-t border-border mt-4 ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('beranda')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
              data-testid="mobile-nav-beranda"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('panel')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
              data-testid="mobile-nav-panel"
            >
              Panel
            </button>
            <button 
              onClick={() => scrollToSection('jasa')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
              data-testid="mobile-nav-jasa"
            >
              Jasa
            </button>
            <button 
              onClick={() => scrollToSection('kontak')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
              data-testid="mobile-nav-kontak"
            >
              Kontak
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
