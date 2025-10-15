import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <SEO
        title="Безлимитная мойка авто за 15,000₸"
        description="Мойте машину безлимитно на 50+ станциях по всему Казахстану за фиксированную цену. Экономьте до 60,000₸ каждый месяц с Washly."
        keywords="автомойка алматы, безлимитная мойка, подписка на мойку, мойка автомобиля казахстан, дешевая мойка"
      />
      <StructuredData type="product" />

      <div className="min-h-screen bg-background w-full overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
        >
          Перейти к основному содержанию
        </a>

        <Header />

        <main id="main-content">
          <HeroSection />
          <TestimonialsSection />
          <SubscriptionPlans />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
