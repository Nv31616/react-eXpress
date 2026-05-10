import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "../components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "../components/Library.jsx";
import TermTest from "../components/TermTest.jsx";
import Syllabus from "../components/Syllabus.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Library />, //Component
    },
    {
      path: "/TermTest",
      element: <TermTest />, //Component
    },
    {
      path: "/Syllabus",
      element: <Syllabus />, //Component
    },
  ]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
