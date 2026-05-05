import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "../components/Navbar.jsx";
import Navbar from "../components/Navbar.jsx";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home/> //Component
		},
		{
			path:"/login",
			element: <Login/> //Component
		},
	])
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
