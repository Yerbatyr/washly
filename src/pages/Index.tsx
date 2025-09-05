import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin, QrCode, Zap, Users, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";
import Header from "@/components/Header";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FeatureSection from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Launching in Almaty
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient-hero">ShineGo</span>
                <br />
                Unlimited Car Washes
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Subscribe once, wash anywhere. Access premium car wash stations across Kazakhstan with our revolutionary QR-based system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="flex-1 sm:flex-none">
                  <QrCode className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Stations
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>50+ Partner Stations</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl transform rotate-6" />
              <img
                src={heroImage}
                alt="Modern car wash station"
                className="relative w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Car Owners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who've made car washing effortless
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Active Subscribers" },
              { value: "50+", label: "Partner Stations" },
              { value: "100K+", label: "Washes Completed" },
              { value: "4.9★", label: "App Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Car Washing Experience?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join the future of car care with ShineGo's subscription service
            </p>
            <Button variant="glass" size="xl">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Subscription
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient-primary mb-4">ShineGo</div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                The future of car washing is here. Convenient, affordable, and always available.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">QR System</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-400">
            <p>&copy; 2024 ShineGo. Made with ❤️ in Kazakhstan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;