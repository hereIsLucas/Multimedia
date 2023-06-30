import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Blog" element={< Blog />} />
          <Route path="/AboutMe" element={< AboutMe />} />
          <Route path="/ContactMe" element={< ContactMe />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
