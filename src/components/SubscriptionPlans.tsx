import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Single Wash",
      price: "2,500₸",
      period: "per wash",
      description: "Perfect for occasional cleaning",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Basic exterior wash",
        "Soap & rinse",
        "Air dry",
        "Valid for 30 days"
      ],
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Premium Monthly",
      price: "15,000₸",
      period: "per month",
      description: "Unlimited washes for regular users",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited exterior washes",
        "Premium soap & wax",
        "Interior vacuum",
        "Priority service",
        "Mobile app access",
        "QR code convenience"
      ],
      popular: true,
      buttonVariant: "hero" as const
    },
    {
      name: "Family Plan",
      price: "25,000₸",
      period: "per month",
      description: "Perfect for multiple vehicles",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "Up to 3 vehicles",
        "Unlimited premium washes",
        "Interior & exterior detailing",
        "Premium wax protection",
        "24/7 support",
        "Family dashboard",
        "Referral rewards"
      ],
      popular: false,
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Flexible Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From single washes to unlimited monthly subscriptions, find the plan that fits your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? "border-primary shadow-primary ring-2 ring-primary/20 scale-105" 
                  : "hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <Badge 
                  variant="default" 
                  className="absolute top-4 right-4 bg-gradient-primary shadow-glow"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-xl ${
                    plan.popular 
                      ? "bg-gradient-primary text-white" 
                      : "bg-neutral-100 text-neutral-600"
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-gradient-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.popular ? "Start Free Trial" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include access to our network of 50+ partner stations
          </p>
          <div className="flex justify-center items-center space-x-6 text-xs text-muted-foreground">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;