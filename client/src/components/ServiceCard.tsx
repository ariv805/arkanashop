import { Check, MessageCircle } from "lucide-react";

interface ServiceCardProps {
  id: string;
  icon: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  whatsappMessage: string;
}

export default function ServiceCard({ icon, name, description, features, price, whatsappMessage }: ServiceCardProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6281234567890";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-lg" data-testid={`service-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
        <span className="text-accent text-xl">{icon}</span>
      </div>
      <h4 className="text-xl font-semibold text-card-foreground mb-2">{name}</h4>
      <p className="text-muted-foreground mb-4 text-sm">
        {description}
      </p>
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-muted-foreground">
            <Check className="text-accent w-4 h-4" />
            <span className="ml-2">{feature}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-accent mb-2" data-testid={`price-${name.toLowerCase().replace(/\s+/g, '-')}`}>{price}</p>
        <button 
          onClick={handleWhatsAppClick}
          className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          data-testid={`order-button-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <MessageCircle className="mr-2 w-4 h-4" />
          Order via WA
        </button>
      </div>
    </div>
  );
}
