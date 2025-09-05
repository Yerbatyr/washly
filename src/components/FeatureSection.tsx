import { Card, CardContent } from "@/components/ui/card";
import { QrCode, MapPin, Smartphone, Shield, Zap, Users } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Code Access",
      description: "Dynamic QR codes that refresh every 60 seconds for maximum security. Simply scan and wash!",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "50+ Locations",
      description: "Find nearby stations with real-time availability, directions, and estimated wait times.",
      gradient: "from-secondary to-green-400"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Seamless experience across iOS and Android with offline capabilities and push notifications.",
      gradient: "from-accent to-yellow-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Kaspi Pay integration with backup Stripe support. Your payment data is always protected.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Average wash time under 15 minutes with express lanes for subscribers.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Referral Rewards",
      description: "Earn free months by referring friends. Share the love and save money!",
      gradient: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">ShineGo</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've reimagined car washing with cutting-edge technology, transparent pricing, 
            and unmatched convenience across Kazakhstan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-neutral-50 hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-20 bg-gradient-to-r from-neutral-50 to-background rounded-3xl p-8 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              How It Works
            </h3>
            <p className="text-muted-foreground">
              Get started in minutes, wash in seconds
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Download App", desc: "Get ShineGo from App Store or Google Play" },
              { step: "2", title: "Choose Plan", desc: "Select monthly unlimited or pay-per-wash" },
              { step: "3", title: "Find Station", desc: "Use map to locate nearby partner stations" },
              { step: "4", title: "Scan & Wash", desc: "Show QR code, confirm, and enjoy your wash" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-primary">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-8" />
                  )}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;