import { useState } from 'react'
import './App.css'
import ComingSoon from './components/comingsoon/ComingSoon'
import Navbar from './components/layout/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';

function App() {

  return (
    <>
     <Router>
                <Routes>
                    <Route path="/" element={<ComingSoon />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            
        </Router>
    </>
  )
}

export default App
