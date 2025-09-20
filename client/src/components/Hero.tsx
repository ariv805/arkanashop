import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="beranda" className="gradient-bg py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Panel & Jasa Bot <span className="text-primary">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solusi terlengkap untuk kebutuhan panel hosting, bot WhatsApp, dan jasa development terpercaya di Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('panel')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-lihat-produk"
            >
              Lihat Produk
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              data-testid="button-hubungi-kami"
            >
              Hubungi Kami
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
