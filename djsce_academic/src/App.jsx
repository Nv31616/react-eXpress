import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Library from "../components/Library.jsx";
import PYPs from "../components/PYPs.jsx";
import Syllabus from "../components/Syllabus.jsx";
import ExamSubjects from "../components/ExamSubjects.jsx";
import SyllabusSubjects from "../components/SyllabusSubjects.jsx";
import MarkMap from "../components/MarkMap.jsx";
import UploadSection from "../components/UploadSection.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/PYPs" element={<PYPs />} />
        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/subjects" element={<ExamSubjects/>} />
        <Route path="/Syllabus/subjects" element={<SyllabusSubjects/>}/>
        <Route path="/markmap" element={<MarkMap/>}/>
        <Route path="/UploadSection" element={<UploadSection/>}/>
      </Routes>
    </div>
  );
}

export default App;
