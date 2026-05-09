import { useState } from "react";
import HoverCard from "./HoverCard";

const SteelBlock = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const type = "wdn";
  const number = props.number;
  const side = props.side;
  const alignment = "left-0";
  return (
    <div
      className="relative hover:scale-105 cursor-pointer flex flex-col w-1/2 font-mono items-center justify-center border-2 bg-linear-to-r from-slate-400 via-slate-300  to-slate-400 font-bold"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {`${side}`}
      <br/>
      {`${number}`}
      {/* {isHovered && <HoverCard alignment={alignment} />} */}
    </div>
  );
};

export default SteelBlock;