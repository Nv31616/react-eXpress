import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Library from "../components/Library.jsx";
import TermTest from "../components/TermTest.jsx";
import Syllabus from "../components/Syllabus.jsx";
import Subjects from "../components/Subjects.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/TermTest" element={<TermTest />} />
        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/subjects" element={<Subjects/>} />
      </Routes>
    </div>
  );
}

export default App;
