import { Suspense, lazy } from "react";
import "@fontsource/urbanist"; // Defaults to weight 400
import "@fontsource/urbanist/400.css"; // Specify weight
import "@fontsource/urbanist/400-italic.css"; 
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

// Lazy-loaded components for route-based code splitting
const Home = lazy(() => import("./components/home/Home"));
const Form = lazy(() => import("./components/contact us/Form"));
const Login = lazy(() => import("./components/admin/login/Login"));
const Dashboard = lazy(() => import("./components/admin/dashboard/Dashboard"));
const Blogs = lazy(() => import("./components/admin/blogs/Blogs"));
const AddNew = lazy(() => import("./components/admin/blogs/AddNew"));
const AboutMain = lazy(() => import("./components/about us/AboutMain"));
const Contact = lazy(() => import("./components/contact us/Contact"));
const ServicesMain = lazy(() => import("./components/services/ServicesMain"));
const WhyusMain = lazy(() => import("./components/Whyus/WhyusMain"));
const TestimonialsMain = lazy(() => import("./components/testimonials/TestimonialsMain"));
const Blog = lazy(() => import("./components/blog/Blog"));
const BlogDetail = lazy(() => import("./components/blog/BlogDetail"));
const PersonalLoan = lazy(() => import("./components/services/personalloan/PersonalLoan"));
const CreditLoan = lazy(() => import("./components/services/creditcardloan/CreditLoan"));
const BusinessLoan = lazy(() => import("./components/services/businessloan/BusinessLoan"));
const CarLoan = lazy(() => import("./components/services/carloan/CarLoan"));
const Antiharassement = lazy(() => import("./components/services/antiharassement/Antiharassement"));
const CreditScore = lazy(() => import("./components/services/creditscore/CreditScore"));
const PrivacyPolicy = lazy(() => import("./components/privacyPolicy/PrivacyPolicy"));
const TermsCondition = lazy(() => import("./components/termscondition/TermsCondition"));
const Thanks = lazy(() => import("./components/thanks/Thanks"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Wrap routes with Suspense to display a fallback UI while loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/blogs" element={<Blogs />} />
            <Route path="/admin/addnew" element={<AddNew />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesMain />} />
            <Route path="/faq" element={<WhyusMain />} />
            <Route path="/testimonials" element={<TestimonialsMain />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/services/personalloan" element={<PersonalLoan />} />
            <Route path="/services/creditloan" element={<CreditLoan />} />
            <Route path="/services/businessloan" element={<BusinessLoan />} />
            <Route path="/services/carloan" element={<CarLoan />} />
            <Route path="/services/antiharassement" element={<Antiharassement />} />
            <Route path="/services/creditscore" element={<CreditScore />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termscondition" element={<TermsCondition />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
