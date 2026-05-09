import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-x-4 h-20 sticky top-0 z-50 bg-black px-4 text-omnitrix-white">
      <img src="../src/assets/omnitrix.jpg" className="h-16 w-auto"/>
      <h2 className="text-5xl">DJSCE Academic</h2>
      <button className="bg-omnitrix-green rounded-3xl w-30 h-10 text-black">Library</button>
      <button className="bg-omnitrix-green rounded-3xl w-30 h-10 text-black" >Term Test</button>
      <button className="bg-omnitrix-green rounded-3xl w-30 h-10 text-black" >Syllabus</button>
    </div>
  );
};

export default Navbar;
