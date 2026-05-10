import React, { forwardRef, useState } from "react";
import { useContext } from "react";
import LibraryContext from "../src/LibraryContext";

const WoodenRack = forwardRef((props,ref) => {
  const type = "wdn";
  const number = props.number;
  const side = props.side;
  const id = props.id;
  const { highlightedId } = useContext(LibraryContext);
  const highlight = id === highlightedId;

  return (
    <div
      className={`${highlight ? "scale-105" : ""} relative flex flex-1 cursor-pointer bg-[#FEA630] hover:scale-105 items-center border-2 border-amber-800 justify-center`}
    >
      <p className="font-bold font-mono absolute z-10 left-1/2 -translate-x-1/2">{`${side} ${number}`}</p>
      <img
        ref={ref}
        src="../src/assets/wooden.png"
        className={`${highlight ? "opacity-0" : ""} object-cover hover:opacity-0 h-8 w-full`}
      />
    </div>
  );
});

export default WoodenRack;