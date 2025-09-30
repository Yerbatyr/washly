import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const SEO = ({ 
  title, 
  description, 
  type = "website", 
  image = "/og-image.jpg",
  url = "https://washly.app",
  keywords = "автомойка, безлимитная мойка, мойка автомобиля, Казахстан, Алматы, подписка на мойку"
}: SEOProps) => {
  const fullTitle = `${title} | Washly - Безлимитная мойка авто`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Washly" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />
      <meta name="author" content="Washly" />
    </Helmet>
  );
};

export default SEO;
