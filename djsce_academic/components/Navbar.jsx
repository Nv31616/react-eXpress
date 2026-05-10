import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex group items-center justify-between gap-x-4 h-20 sticky top-0 z-50 bg-slate-900 px-4 text-omnitrix-white">
      <img
        src="../src/assets/PowerWatch.svg"
        className="h-16 w-auto group-hover:animate-spin"
      />
      <h2 className="text-5xl font-mono">DJSCE Academic</h2>
      <button
        onClick={() => navigate("/")}
        className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27] active:shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27]"
      >
        Library
      </button>
      <button
        onClick={() => navigate("/TermTest")}
        className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27] active:shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27]"
      >
        Term Test
      </button>
            <button
        onClick={() => navigate("/Syllabus")}
        className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27] active:shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27]"
      >
        Syllabus
      </button>
    </div>
  );
};

export default Navbar;
