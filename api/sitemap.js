import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase.js"; // Import Firebase config

const db = getFirestore(app);

// Function to Convert Title to Slug
const generateSlug = (title) => {
    return title
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-$/, "");
};

// Define Static Routes with priorities
const staticRoutes = [
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

export default async function handler(req, res) {
    try {
        // Fetch blog titles from Firestore
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogRoutes = querySnapshot.docs
            .map(doc => ({
                loc: `/blogs/${generateSlug(doc.data().title)}`,
                priority: "0.7"
            }))
            .filter(route => route.loc !== "/blogs/"); // Filter out invalid routes

        // Generate XML format
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // Add static routes
        staticRoutes.forEach(route => {
            sitemap += `  <url>\n    <loc>https://www.credsettle.com${route.loc}</loc>\n    <priority>${route.priority}</priority>\n  </url>\n`;
        });

        // Add blog routes
        blogRoutes.forEach(route => {
            sitemap += `  <url>\n    <loc>https://www.credsettle.com${route.loc}</loc>\n    <priority>${route.priority}</priority>\n  </url>\n`;
        });

        sitemap += `</urlset>`;

        // Set response headers
        res.setHeader("Content-Type", "application/xml");
        res.status(200).send(sitemap);
    } catch (error) {
        console.error("Error generating sitemap:", error);
        res.status(500).send("Error generating sitemap");
    }
}
