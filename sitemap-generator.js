import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./src/firebase.js"; // Import Firebase config

const db = getFirestore(app);

// Get directory name in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://www.credsettle.com";

// Define Static Routes
const staticRoutes = [
    "/",
    "/form",
    "/login",
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

// Function to Convert Title to Slug
const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
};

// Fetch Blog Titles from Firestore
const fetchBlogSlugs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    return querySnapshot.docs.map(doc => `/blogs/${generateSlug(doc.data().title)}`);
};

// Generate and Write Sitemap
const generateSitemap = async () => {
    const blogRoutes = await fetchBlogSlugs();
    const allRoutes = [...staticRoutes, ...blogRoutes];

    const urls = allRoutes
        .map(route => `<url><loc>${BASE_URL}${route}</loc></url>`)
        .join("\n");

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    </urlset>`;

    fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemapContent);
    console.log("✅ Sitemap generated successfully!");
};

generateSitemap().catch(console.error);
