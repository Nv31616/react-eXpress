import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 items-center justify-between h-16 sticky top-0 z-50 bg-slate-900 px-2 text-white">
      {/* <img
        src="../src/assets/PowerWatch.svg"
        className="h-16 w-auto group-hover:animate-spin"
      /> */}
      <p className="font-bold">DJ Acad</p>
      <button
        onClick={() => navigate("/")}
        className="hover:scale-105 cursor-pointer p-2 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono  text-[9px] hover:bg-white hover:text-[#B83D1E] rounded-full   text-white"
      >
        Library
      </button>
      <button
        onClick={() => navigate("/TermTest")}
        className="hover:scale-105 cursor-pointer p-2 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono text-[9px] hover:bg-white hover:text-[#B83D1E] rounded-full  text-white"
      >
        Term Test
      </button>
            <button
        onClick={() => navigate("/Syllabus")}
        className="hover:scale-105 cursor-pointer p-2 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono text-[9px] hover:bg-white hover:text-[#B83D1E] rounded-full  text-white"
      >
        Syllabus
      </button>
    </div>
  );
};

export default Navbar;
