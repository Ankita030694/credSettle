import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComingSoon from './components/ComingSoon'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

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
