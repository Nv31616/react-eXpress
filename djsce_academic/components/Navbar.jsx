import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex group items-center justify-between gap-x-4 h-20 sticky top-0 z-50 bg-slate-900 px-4 text-omnitrix-white">
      <img src="../src/assets/PowerWatch.svg" className="h-16 w-auto group-hover:animate-spin"/>
      <h2 className="text-5xl font-mono">DJSCE Academic</h2>
      <Button text="Library"/>
      <Button text="Term Test"/>
      <Button text="Syllabus"/>
    </div>
  );
};

export default Navbar;
