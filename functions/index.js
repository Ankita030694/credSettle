const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

const SITE_URL = "https://www.credsettle.com";

exports.sitemap = functions.https.onRequest(async (req, res) => {
  try {
    const blogsSnapshot = await admin.firestore().collection('blogs').get();
    const blogSlugs = blogsSnapshot.docs.map(doc => doc.id);

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

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
      { loc: "/termscondition", priority: "0.5" },
    ];

    staticPages.forEach(page => {
      sitemap += `  <url>\n    <loc>${SITE_URL}${page.loc}</loc>\n    <priority>${page.priority}</priority>\n  </url>\n`;
    });

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
