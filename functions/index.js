const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const SITE_URL = "https://www.credsettle.com";

// Function to generate slug from title
const generateSlug = (title) => {
    return title
        .trim() // Remove leading/trailing spaces
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-$/, ""); // Remove trailing hyphen if present
};

exports.sitemap = functions.https.onRequest(async (req, res) => {
    try {
        // Fetch blog data from Firestore
        const blogsSnapshot = await admin.firestore().collection('blogs').get();
        
        // Generate slug from title
        const blogSlugs = blogsSnapshot.docs
            .map(doc => {
                const data = doc.data();
                return data.title ? generateSlug(data.title) : null;
            })
            .filter(slug => slug); // Remove empty or null slugs

        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // Static pages
        const staticPages = [
            { loc: "/", priority: "1.0" },
            { loc: "/form", priority: "0.8" },
            { loc: "/about", priority: "0.8" },
            { loc: "/services", priority: "0.8" },
            { loc: "/faq", priority: "0.6" },
            { loc: "/blogs", priority: "0.7" },
            { loc: "/services/personalloan", priority: "0.8" },
            { loc: "/services/creditloan", priority: "0.8" },
            { loc: "/services/businessloan", priority: "0.8" },
            { loc: "/services/carloan", priority: "0.8" },
            { loc: "/services/antiharassement", priority: "0.8" },
            { loc: "/services/creditscore", priority: "0.8" },
            { loc: "/privacypolicy", priority: "0.5" },
            { loc: "/termscondition", priority: "0.5" }
        ];

        // Add static pages
        staticPages.forEach(page => {
            sitemap += `  <url>\n    <loc>${SITE_URL}${page.loc}</loc>\n    <priority>${page.priority}</priority>\n  </url>\n`;
        });

        // Add blog pages dynamically using the generated slug
        blogSlugs.forEach(slug => {
            sitemap += `  <url>\n    <loc>${SITE_URL}/blogs/${slug}</loc>\n    <priority>0.7</priority>\n  </url>\n`;
        });

        sitemap += `</urlset>`;

        res.set('Content-Type', 'application/xml');
        res.status(200).send(sitemap);
    } catch (error) {
        console.error("Error generating sitemap:", error);
        res.status(500).send("Error generating sitemap");
    }
});
