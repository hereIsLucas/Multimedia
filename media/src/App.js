import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Blog" element={< Blog />} />
          <Route path="/AboutUs" element={< AboutUs />} />
          <Route path="/Contact" element={< Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
