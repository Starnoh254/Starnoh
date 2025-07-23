// Utility to generate dynamic sitemap including blog posts
import { siteConfig } from './seoConfig.js';

export const generateSitemap = (blogPosts = []) => {
    const baseUrls = [
        {
            url: siteConfig.siteUrl,
            changefreq: 'weekly',
            priority: '1.0'
        },
        {
            url: `${siteConfig.siteUrl}/projects`,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: `${siteConfig.siteUrl}/contact`,
            changefreq: 'monthly',
            priority: '0.7'
        },
        {
            url: `${siteConfig.siteUrl}/blog`,
            changefreq: 'weekly',
            priority: '0.8'
        },
        {
            url: `${siteConfig.siteUrl}/pricing`,
            changefreq: 'monthly',
            priority: '0.7'
        }
    ];

    const blogUrls = blogPosts.map(post => ({
        url: `${siteConfig.siteUrl}/blog/${post.slug}`,
        changefreq: 'yearly',
        priority: '0.6',
        lastmod: post.date || new Date().toISOString().split('T')[0]
    }));

    const allUrls = [...baseUrls, ...blogUrls];
    const currentDate = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, changefreq, priority, lastmod }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod || currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return sitemap;
};

// Function to generate structured data for breadcrumbs
export const generateBreadcrumbSchema = (breadcrumbs) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    };
};

// Function to get page-specific meta tags
export const getPageMetaTags = (page, data = {}) => {
    const pages = {
        home: {
            title: "Starnoh John - Software Developer & Problem Solver",
            description: "Expert software developer specializing in React, Node.js, and full-stack solutions. I build scalable applications that solve real business problems and help companies grow.",
            keywords: "software developer, react developer, nodejs developer, fullstack developer, web development, business solutions, scalable applications, freelance developer, portfolio"
        },
        projects: {
            title: "Projects - Portfolio | Starnoh John",
            description: "Explore my portfolio of software development projects including JengaAI e-learning platform, Linkarp networking tool, and other innovative full-stack applications.",
            keywords: "software development portfolio, react projects, nodejs projects, fullstack applications, JengaAI, Linkarp, web development projects"
        },
        contact: {
            title: "Contact - Starnoh John | Software Developer",
            description: "Get in touch with Starnoh John for software development projects, collaborations, and business opportunities. Let's build something amazing together!",
            keywords: "contact software developer, hire react developer, freelance developer contact, starnoh john contact"
        },
        blog: {
            title: "Blog - Technical Insights | Starnoh John",
            description: "Read technical articles and insights about software development, React, Node.js, and full-stack development best practices from Starnoh John.",
            keywords: "software development blog, react tutorials, nodejs articles, fullstack development insights, programming tips, web development blog"
        },
        pricing: {
            title: "Pricing - Software Development Services | Starnoh John",
            description: "Affordable and competitive pricing for professional software development services. Get quotes for React, Node.js, and full-stack development projects.",
            keywords: "software development pricing, react developer rates, nodejs developer cost, fullstack development price, freelance developer pricing"
        }
    };

    return { ...pages[page], ...data };
};
