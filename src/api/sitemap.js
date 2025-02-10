import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase.js"; // Import Firebase config

const db = getFirestore(app);

// Function to Convert Title to Slug
const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
};

// Define Static Routes
const staticRoutes = [
    "/",
    "/form",
    "/about",
    "/services",
    "/faq",
    "/testimonials",
    "/blogs",
    "/services/personalloan",
    "/services/creditloan",
    "/services/businessloan",
    "/services/carloan",
    "/services/antiharassement",
    "/services/creditscore",
    "/privacypolicy",
    "/termscondition",
    "/thanks"
];

export default async function handler(req, res) {
    try {
        // Fetch blog titles from Firestore
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogRoutes = querySnapshot.docs.map(doc => `/blogs/${generateSlug(doc.data().title)}`);

        // Combine all routes
        const allRoutes = [...staticRoutes, ...blogRoutes];

        // Generate XML format
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allRoutes.map(route => `<url><loc>https://www.credsettle.com${route}</loc></url>`).join("\n")}
        </urlset>`;

        // Set response headers
        res.setHeader("Content-Type", "application/xml");
        res.status(200).send(sitemap);
    } catch (error) {
        console.error("Error generating sitemap:", error);
        res.status(500).send("Error generating sitemap");
    }
}
