import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const panelProducts = [
  {
    id: "pterodactyl",
    icon: "🖥️",
    name: "Pterodactyl Panel",
    description: "Panel hosting game server yang powerful dengan interface yang user-friendly. Kelola server Minecraft, Discord bot, dan aplikasi lainnya dengan mudah.",
    features: ["Dashboard Modern", "Multi Server Support", "24/7 Monitoring"],
    price: "Rp 150.000",
    whatsappMessage: "Halo, saya tertarik dengan Pterodactyl Panel"
  },
  {
    id: "whatsapp-bot",
    icon: "💬",
    name: "Bot WhatsApp",
    description: "Bot WhatsApp multifungsi dengan fitur lengkap. Auto reply, sticker maker, downloader, dan masih banyak lagi fitur menarik.",
    features: ["Auto Reply", "Downloader Media", "Sticker Maker"],
    price: "Rp 75.000",
    whatsappMessage: "Halo, saya tertarik dengan Bot WhatsApp"
  },
  {
    id: "nokos-indonesia",
    icon: "🇮🇩",
    name: "Nokos Indonesia",
    description: "Provider nomor virtual Indonesia untuk verifikasi berbagai platform. Dapatkan nomor lokal dengan harga terjangkau.",
    features: ["Nomor Lokal ID", "Instant Delivery", "Multi Platform"],
    price: "Rp 25.000",
    whatsappMessage: "Halo, saya tertarik dengan Nokos Indonesia"
  },
  {
    id: "jadi-bot",
    icon: "🤖",
    name: "Jadi Bot",
    description: "Platform untuk mengubah nomor WhatsApp biasa menjadi bot otomatis dengan fitur-fitur canggih dan mudah digunakan.",
    features: ["Easy Setup", "Custom Commands", "Auto Responses"],
    price: "Rp 100.000",
    whatsappMessage: "Halo, saya tertarik dengan Jadi Bot"
  },
  {
    id: "admin-panel",
    icon: "👨‍💼",
    name: "Admin Panel",
    description: "Panel administrasi lengkap untuk mengelola website, user, dan konten dengan interface yang intuitif dan aman.",
    features: ["User Management", "Content Control", "Analytics"],
    price: "Rp 200.000",
    whatsappMessage: "Halo, saya tertarik dengan Admin Panel"
  },
  {
    id: "reseller-panel",
    icon: "🤝",
    name: "Reseller Panel",
    description: "Panel khusus reseller dengan sistem komisi otomatis, tracking penjualan, dan manajemen produk yang mudah digunakan.",
    features: ["Auto Commission", "Sales Tracking", "Product Management"],
    price: "Rp 300.000",
    whatsappMessage: "Halo, saya tertarik dengan Reseller Panel"
  },
  {
    id: "pt-panel",
    icon: "🏢",
    name: "PT Panel",
    description: "Panel enterprise untuk perusahaan dengan fitur advanced seperti multi-user, role management, dan reporting lengkap.",
    features: ["Multi-User Access", "Role Management", "Advanced Reports"],
    price: "Rp 500.000",
    whatsappMessage: "Halo, saya tertarik dengan PT Panel"
  },
  {
    id: "owner-panel",
    icon: "👑",
    name: "Owner Panel",
    description: "Panel ultimate dengan akses penuh ke semua fitur, unlimited resources, dan kontrol penuh atas sistem.",
    features: ["Full Access", "Unlimited Resources", "Priority Support"],
    price: "Rp 750.000",
    whatsappMessage: "Halo, saya tertarik dengan Owner Panel"
  }
];

const services = [
  {
    id: "unban-whatsapp",
    icon: "🔓",
    name: "Jasa Unban WhatsApp",
    description: "Layanan untuk mengembalikan akun WhatsApp yang terkena banned dengan tingkat keberhasilan tinggi dan garansi.",
    features: ["Success Rate 95%", "Garansi 7 Hari", "24/7 Support"],
    price: "Rp 50.000",
    whatsappMessage: "Halo, saya butuh jasa unban WhatsApp"
  },
  {
    id: "bot-repair",
    icon: "🔧",
    name: "Benerin Bot",
    description: "Perbaikan bot yang error, tidak berfungsi, atau butuh update dengan teknisi berpengalaman.",
    features: ["Quick Fix", "Expert Technician", "Free Consultation"],
    price: "Rp 25.000",
    whatsappMessage: "Halo, bot saya error dan butuh diperbaiki"
  },
  {
    id: "script-rename",
    icon: "✏️",
    name: "Rename Script Bot",
    description: "Layanan customize nama bot, command, dan branding sesuai keinginan Anda dengan profesional.",
    features: ["Custom Branding", "Command Rename", "Full Customization"],
    price: "Rp 35.000",
    whatsappMessage: "Halo, saya ingin rename script bot"
  },
  {
    id: "website-development",
    icon: "🌐",
    name: "Pembuatan Website",
    description: "Jasa pembuatan website professional untuk bisnis, toko online, atau personal dengan desain modern dan responsif.",
    features: ["Responsive Design", "SEO Optimized", "Free Hosting 1 Tahun"],
    price: "Rp 500.000",
    whatsappMessage: "Halo, saya ingin membuat website"
  }
];

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Online Shop Owner",
    rating: 5,
    comment: "Pelayanan sangat memuaskan! Bot WhatsApp yang saya beli berfungsi dengan sempurna dan support nya responsif banget.",
    avatar: "A"
  },
  {
    name: "Budi Santoso",
    role: "Gamer & Server Owner",
    rating: 5,
    comment: "Pterodactyl Panel nya mantap jiwa! Server Minecraft saya jadi lebih stabil dan mudah di manage. Recommend!",
    avatar: "B"
  },
  {
    name: "Citra Dewi",
    role: "Business Owner",
    rating: 5,
    comment: "Website yang dibuatkan bagus banget dan sesuai request. Proses pengerjaan cepat dan hasilnya memuaskan.",
    avatar: "C"
  }
];

const contacts = [
  {
    platform: "WhatsApp",
    icon: "💬",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
    description: "Chat langsung untuk konsultasi dan pemesanan",
    contact: "+62 812 3456 7890",
    link: "https://wa.me/6281234567890"
  },
  {
    platform: "Email",
    icon: "📧",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    description: "Untuk inquiry bisnis dan kerjasama",
    contact: "info@techstore-indonesia.com",
    link: "mailto:info@techstore-indonesia.com"
  },
  {
    platform: "Instagram",
    icon: "📷",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
    description: "Follow untuk update produk terbaru",
    contact: "@techstore_indonesia",
    link: "https://instagram.com/techstore_indonesia"
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "TechStore Indonesia - Panel & Jasa Bot Premium";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Solusi terlengkap untuk kebutuhan panel hosting, bot WhatsApp, dan jasa development terpercaya di Indonesia. Panel Pterodactyl, Bot WhatsApp, Admin Panel, dan layanan profesional lainnya.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Solusi terlengkap untuk kebutuhan panel hosting, bot WhatsApp, dan jasa development terpercaya di Indonesia. Panel Pterodactyl, Bot WhatsApp, Admin Panel, dan layanan profesional lainnya.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-background text-foreground">
      <Header />
      
      <Hero />

      {/* Panel Products Section */}
      <section id="panel" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Panel Premium</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Koleksi panel terbaik untuk mengelola server dan bot dengan mudah dan efisien
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {panelProducts.map((product, index) => (
              <AnimatedSection key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="jasa" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Jasa Professional</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Layanan profesional untuk kebutuhan digital Anda dengan kualitas terjamin dan harga terjangkau
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Testimoni Pelanggan</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hubungi Kami</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Siap melayani Anda 24/7. Hubungi kami melalui platform favorit Anda
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contacts.map((contact, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ContactCard {...contact} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
