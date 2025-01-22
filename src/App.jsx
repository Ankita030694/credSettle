import { useState } from "react";
import "@fontsource/urbanist"; // Defaults to weight 400
import "@fontsource/urbanist/400.css"; // Specify weight
import "@fontsource/urbanist/400-italic.css"; 
import "./App.css";
import ComingSoon from "./components/comingsoon/ComingSoon";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<ComingSoon />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
