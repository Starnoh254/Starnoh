// SEO configuration and structured data schemas
export const siteConfig = {
    siteName: "Starnoh Dev",
    siteUrl: "https://starnohdev.com", // Replace with your actual domain
    author: "Starnoh John",
    description: "Expert software developer specializing in React, Node.js, and full-stack solutions. I build scalable applications that solve real business problems and help companies grow.",
    keywords: "software developer, react developer, nodejs developer, fullstack developer, web development, business solutions, scalable applications, freelance developer, portfolio",
    twitterHandle: "@starnohdev", // Replace with your actual Twitter handle
    email: "contact@starnohdev.com", // Replace with your actual email
    phone: "+254-714-296-170", // Replace with your actual phone number
    location: "Nairobi, Kenya", // Replace with your actual location
    image: "/hero-banner.png",
    favicon: "/vite.svg"
};

// Person Schema for homepage
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Starnoh John",
    "url": siteConfig.siteUrl,
    "email": siteConfig.email,
    "telephone": siteConfig.phone,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.location
    },
    "jobTitle": "Software Developer",
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
    },
    "knowsAbout": [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Full Stack Development",
        "Web Development",
        "Software Architecture"
    ],
    "alumniOf": "Your University", // Replace with your actual education
    "sameAs": [
        "https://github.com/starnoh254", // Replace with your actual GitHub
        "https://linkedin.com/in/starnoh", // Replace with your actual LinkedIn
        "https://twitter.com/starnohdev" // Replace with your actual Twitter
    ],
    "image": `${siteConfig.siteUrl}${siteConfig.image}`,
    "description": siteConfig.description
};

// Professional Service Schema
export const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Starnoh Dev - Software Development Services",
    "description": "Professional software development services specializing in React, Node.js, and full-stack solutions",
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.location
    },
    "serviceType": "Software Development",
    "provider": {
        "@type": "Person",
        "name": "Starnoh John"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Full Stack Web Development",
                    "description": "Complete web application development using React, Node.js, and modern technologies"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "React Development",
                    "description": "Frontend development using React and modern JavaScript frameworks"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "API Development",
                    "description": "Backend API development using Node.js, Express, and database integration"
                }
            }
        ]
    }
};

// Website Schema
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "description": siteConfig.description,
    "author": {
        "@type": "Person",
        "name": siteConfig.author
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteConfig.siteUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
    }
};

// Blog article schema generator
export const createBlogPostSchema = (post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.description,
    "image": post.image ? `${siteConfig.siteUrl}${post.image}` : `${siteConfig.siteUrl}${siteConfig.image}`,
    "author": {
        "@type": "Person",
        "name": siteConfig.author,
        "url": siteConfig.siteUrl
    },
    "publisher": {
        "@type": "Organization",
        "name": siteConfig.siteName,
        "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.siteUrl}${siteConfig.favicon}`
        }
    },
    "datePublished": post.date,
    "dateModified": post.modifiedDate || post.date,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/blog/${post.slug}`
    }
});

// Portfolio project schema generator
export const createProjectSchema = (project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": project.url || `${siteConfig.siteUrl}/projects`,
    "creator": {
        "@type": "Person",
        "name": siteConfig.author
    },
    "keywords": project.tech ? project.tech.join(", ") : "",
    "genre": "Software Development Project"
});
