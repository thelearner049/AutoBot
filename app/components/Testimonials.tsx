import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    avatar: "/men-1.webp",
    content:
      "ChatFlow AI has transformed how we handle customer support. Response times dropped by 80% and our customers love the instant replies. The AI understands context remarkably well.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "E-commerce Manager",
    company: "ShopVibe",
    avatar: "/men-2.jpg",
    content:
      "The bulk broadcast feature is a game-changer for our promotions. We've seen a 3x increase in engagement compared to traditional email campaigns. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success Lead",
    company: "GrowthHub",
    avatar: "/women.jpg",
    content:
      "Setting up automated workflows was incredibly easy. Within hours, we had a complete customer journey automated. The analytics continously helps us in optimazation.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary text-2xl font-semibold mb-4">
            Testimonials
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience with
            ChatFlow AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="pt-6">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="w-15 h-16">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
