interface ContactCardProps {
  platform: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  buttonColor: string;
  description: string;
  contact: string;
  link: string;
}

export default function ContactCard({ platform, icon, bgColor, iconColor, buttonColor, description, contact, link }: ContactCardProps) {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center" data-testid={`contact-card-${platform.toLowerCase()}`}>
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <span className={`${iconColor} text-2xl`}>{icon}</span>
      </div>
      <h4 className="text-xl font-semibold text-card-foreground mb-2">{platform}</h4>
      <p className="text-muted-foreground mb-4">{description}</p>
      <button 
        onClick={handleClick}
        className={`inline-flex items-center ${buttonColor} text-white px-4 py-2 rounded-lg font-semibold transition-colors`}
        data-testid={`contact-button-${platform.toLowerCase()}`}
      >
        <span className="mr-2">{icon}</span>
        {contact}
      </button>
    </div>
  );
}
