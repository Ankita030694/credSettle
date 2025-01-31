import { useState } from "react";
import "@fontsource/urbanist"; // Defaults to weight 400
import "@fontsource/urbanist/400.css"; // Specify weight
import "@fontsource/urbanist/400-italic.css"; 
import "./App.css";
import ComingSoon from "./components/comingsoon/ComingSoon";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
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

function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ComingSoon />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutMain/>} />
          <Route path="/services" element={<ServicesMain/>} />
          <Route path="/faq" element={<WhyusMain/>} />
          <Route path="/testimonials" element={<TestimonialsMain/>} />

          {/* <Route path="/footer" element={<Footer />} /> */}
          {/* <Route path="/calc" element={<Calculator />} /> */}
          {/* <Route path="/graph" element={<Graph />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
