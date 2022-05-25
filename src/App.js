import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
// import About from "./components/pages/About";
import Cards from "./components/Cards";
import SIGNUP from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Cards />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SIGNUP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
