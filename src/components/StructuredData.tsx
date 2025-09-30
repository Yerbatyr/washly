import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  type: "organization" | "product" | "service";
}

const StructuredData = ({ type }: OrganizationSchemaProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Washly",
    "description": "Безлимитная автомойка по подписке в Казахстане",
    "url": "https://washly.app",
    "logo": "https://washly.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-700-123-45-67",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "Kazakh"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Алматы",
      "addressCountry": "KZ"
    },
    "sameAs": [
      "https://instagram.com/washly",
      "https://facebook.com/washly"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Автомойка",
    "provider": {
      "@type": "Organization",
      "name": "Washly"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kazakhstan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Тарифы автомойки",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Безлимитная мойка"
          },
          "price": "15000",
          "priceCurrency": "KZT"
        }
      ]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Washly Безлимитная подписка",
    "description": "Безлимитная автомойка за фиксированную цену 15,000₸ в месяц",
    "brand": {
      "@type": "Brand",
      "name": "Washly"
    },
    "offers": {
      "@type": "Offer",
      "price": "15000",
      "priceCurrency": "KZT",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000"
    }
  };

  const getSchema = () => {
    switch (type) {
      case "organization":
        return organizationSchema;
      case "service":
        return serviceSchema;
      case "product":
        return productSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
    </Helmet>
  );
};

export default StructuredData;
