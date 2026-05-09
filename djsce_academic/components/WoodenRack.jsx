import React, { useState } from "react";
import HoverCard from "./HoverCard";

const WoodenRack = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const type = "wdn";
  const number = props.number;
  const side = props.side;
  const alignment = "left-0"
  return (
    <div className="relative flex flex-1 cursor-pointer bg-[#FEA630] hover:scale-105 items-center border-2 border-amber-800 justify-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p className="font-bold font-mono absolute z-10 left-1/2 -translate-x-1/2">{`${side} ${number}`}</p>
      <img
        src="../src/assets/wooden.png"
        className={`object-cover hover:opacity-0 h-8 w-full`}
      />
      {/* {isHovered && <HoverCard alignment={alignment} />} */}
    </div>
  );
};

export default WoodenRack;