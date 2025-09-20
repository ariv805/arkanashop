import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, rating, comment, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center mb-4">
        <div className="flex text-accent">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground mb-4" data-testid={`comment-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        "{comment}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
          {avatar}
        </div>
        <div>
          <h5 className="font-semibold text-card-foreground" data-testid={`name-${name.toLowerCase().replace(/\s+/g, '-')}`}>{name}</h5>
          <p className="text-sm text-muted-foreground" data-testid={`role-${name.toLowerCase().replace(/\s+/g, '-')}`}>{role}</p>
        </div>
      </div>
    </div>
  );
}
