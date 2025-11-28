import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description:
      "Perfect for small businesses getting started with WhatsApp automation.",
    features: [
      "1,000 messages/month",
      "1 WhatsApp number",
      "Basic chatbot builder",
      "Email support",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description:
      "For growing teams that need advanced automation and analytics.",
    features: [
      "10,000 messages/month",
      "3 WhatsApp numbers",
      "Advanced AI chatbots",
      "Workflow automation",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "Enterprise-grade features for large organizations.",
    features: [
      "Unlimited messages",
      "10 WhatsApp numbers",
      "Custom AI training",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary text-2xl font-semibold mb-4">Pricing</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-105"
                  : "hover:border-primary/30"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold text-center">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center PB-8 PT-8">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className="w-full py-6 font-semibold cursor-pointer"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
