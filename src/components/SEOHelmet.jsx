import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHelmet = ({
  title = "Starnoh John - Software Developer & Problem Solver",
  description = "Expert software developer specializing in React, Node.js, and full-stack solutions. I build scalable applications that solve real business problems and help companies grow.",
  keywords = "software developer, react developer, nodejs developer, fullstack developer, web development, business solutions, scalable applications, freelance developer",
  author = "Starnoh John",
  url = "https://starnohdev.com",
  image = "/hero-banner.png",
  type = "website",
  twitterHandle = "@starnohdev",
  lang = "en",
  schema,
}) => {
  const siteTitle =
    title === "Starnoh John - Software Developer & Problem Solver"
      ? title
      : `${title} | Starnoh Dev`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Starnoh Dev" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      <meta property="twitter:creator" content={twitterHandle} />
      <meta property="twitter:site" content={twitterHandle} />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#14b8a6" />
      <meta name="msapplication-TileColor" content="#14b8a6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
    </Helmet>
  );
};

export default SEOHelmet;
