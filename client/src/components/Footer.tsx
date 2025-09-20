import { Store, MessageCircle, Mail, Instagram, Video } from "lucide-react";

export default function Footer() {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4" data-testid="footer-logo">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Store className="text-primary-foreground text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold">TechStore Indonesia</h1>
              </div>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Penyedia panel dan jasa bot terpercaya di Indonesia. Dengan pengalaman bertahun-tahun, kami berkomitmen memberikan layanan terbaik untuk kebutuhan digital Anda.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('https://wa.me/6281234567890')}
                className="text-background/80 hover:text-accent transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('mailto:info@techstore-indonesia.com')}
                className="text-background/80 hover:text-accent transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('https://instagram.com/techstore_indonesia')}
                className="text-background/80 hover:text-accent transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('https://tiktok.com/@techstore_indonesia')}
                className="text-background/80 hover:text-accent transition-colors"
                data-testid="footer-tiktok"
              >
                <Video className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h5 className="font-semibold mb-4">Produk Panel</h5>
            <ul className="space-y-2 text-background/80">
              <li>
                <button 
                  onClick={() => scrollToSection('panel')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-pterodactyl"
                >
                  Pterodactyl Panel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('panel')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-bot-whatsapp"
                >
                  Bot WhatsApp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('panel')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-admin-panel"
                >
                  Admin Panel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('panel')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-reseller-panel"
                >
                  Reseller Panel
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold mb-4">Layanan Jasa</h5>
            <ul className="space-y-2 text-background/80">
              <li>
                <button 
                  onClick={() => scrollToSection('jasa')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-unban-whatsapp"
                >
                  Unban WhatsApp
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('jasa')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-perbaikan-bot"
                >
                  Perbaikan Bot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('jasa')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-rename-script"
                >
                  Rename Script
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('jasa')} 
                  className="hover:text-accent transition-colors text-left"
                  data-testid="footer-pembuatan-website"
                >
                  Pembuatan Website
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 TechStore Indonesia. All rights reserved. | Melayani dengan sepenuh hati untuk kebutuhan digital Anda</p>
        </div>
      </div>
    </footer>
  );
}
