import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Library from "../components/Library.jsx";
import TermTest from "../components/TermTest.jsx";
import Syllabus from "../components/Syllabus.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/TermTest" element={<TermTest />} />
        <Route path="/Syllabus" element={<Syllabus />} />
      </Routes>
    </div>
  );
}

export default App;
