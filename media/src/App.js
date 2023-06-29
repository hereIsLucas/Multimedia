import React from "react";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
