import { useState } from 'react'
import './App.css'
import ComingSoon from './components/ComingSoon'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ComingSoon />} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
