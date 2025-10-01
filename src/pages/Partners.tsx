import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import PartnerHero from "@/components/partners/PartnerHero";
import PartnerBenefits from "@/components/partners/PartnerBenefits";
import PartnerTestimonials from "@/components/partners/PartnerTestimonials";
import BusinessModel from "@/components/partners/BusinessModel";
import PartnerRequirements from "@/components/partners/PartnerRequirements";
import PartnerCTA from "@/components/partners/PartnerCTA";

const Partners = () => {
  return (
    <>
      <SEO 
        title="Партнерам - Зарабатывайте 1,500,000₸+ в месяц"
        description="Подключите вашу автомойку к сети Washly и увеличьте выручку на 300%+. 10,000+ готовых клиентов без рекламных затрат. Подключение за 24 часа."
        keywords="партнерство автомойка, франшиза автомойка казахстан, бизнес автомойка, заработок на автомойке"
      />
      <StructuredData type="service" />
      
      <div className="min-h-screen bg-background">
        <Header />
        <PartnerHero />
        <PartnerBenefits />
        <PartnerTestimonials />
        <BusinessModel />
        <PartnerRequirements />
        <PartnerCTA />
        <Footer />
      </div>
    </>
  );
};

export default Partners;
