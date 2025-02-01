import { useEffect, useLayoutEffect, useState } from "react";
import "@fontsource/urbanist"; // Defaults to weight 400
import "@fontsource/urbanist/400.css"; // Specify weight
import "@fontsource/urbanist/400-italic.css"; 
import "./App.css";
import ComingSoon from "./components/comingsoon/ComingSoon";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/footer/Footer";
import Calculator from "./components/calculator/Calculator";
import Graph from "./components/barChart/Graph";
import Form from "./components/contact us/Form";
import Login from "./components/admin/login/Login";
import Dashboard from "./components/admin/dashboard/Dashboard";
import AboutMain from "./components/about us/AboutMain";
import ServicesMain from "./components/services/ServicesMain";
import WhyusMain from "./components/Whyus/WhyusMain";
import TestimonialsMain from "./components/testimonials/TestimonialsMain";
import Blog from "./components/blog/Blog";
import PersonalLoan from "./components/services/personalloan/PersonalLoan";
import CreditLoan from "./components/services/creditcardloan/CreditLoan";
import BusinessLoan from "./components/services/businessloan/BusinessLoan";
import CarLoan from "./components/services/carloan/CarLoan";
import Antiharassement from "./components/services/antiharassement/Antiharassement";
import CreditScore from "./components/services/creditscore/CreditScore";
import ScrollToTop from "./ScrollToTop";
import Blogs from "./components/admin/blogs/Blogs";
import AddNew from "./components/admin/blogs/AddNew";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ComingSoon />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/blogs" element={<Blogs />} />
          <Route path="/admin/addnew" element={<AddNew />} />
          <Route path="/about" element={<AboutMain/>} />
          <Route path="/services" element={<ServicesMain/>} />
          <Route path="/faq" element={<WhyusMain/>} />
          <Route path="/testimonials" element={<TestimonialsMain/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/services/personalloan" element={<PersonalLoan/>} />
          <Route path="/services/creditloan" element={<CreditLoan/>} />
          <Route path="/services/businessloan" element={<BusinessLoan/>} />
          <Route path="/services/carloan" element={<CarLoan/>} />
          <Route path="/services/antiharassement" element={<Antiharassement/>} />
          <Route path="/services/creditscore" element={<CreditScore/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
  );
}

export default App;
