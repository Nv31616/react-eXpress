import { useState } from "react";

const SteelBlock = (props) => {
  const type = "wdn";
  const number = props.number;
  const side = props.side;
  const alignment = "left-0";
  return (
    <div
      className="relative hover:bg-none hover: bg-slate-500 hover:text-sky-200 border-slate-800 hover:scale-105 cursor-pointer flex flex-col w-1/2 font-mono items-center justify-center border-2 bg-linear-to-r from-slate-400 via-slate-300  to-slate-400 font-bold"
    >
      {`${side}`}
      <br/>
      {`${number}`}
      {/* {isHovered && <HoverCard alignment={alignment} />} */}
    </div>
  );
};

export default SteelBlock;