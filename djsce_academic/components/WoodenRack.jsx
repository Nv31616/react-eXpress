import React, { forwardRef, useState } from "react";
import { useContext } from "react";
import LibraryContext from "../src/LibraryContext";
import { supabase } from "../src/supabase";

const WoodenRack = forwardRef((props, ref) => {
  const number = props.number;
  const side = props.side;
  const id = props.id;
  const { highlightedId, setBooks, setCurrentPage } =
    useContext(LibraryContext);
  const highlight = id === highlightedId;

  return (
    <div
      className={`${highlight ? "scale-105" : ""} hover:bg-none relative flex cursor-pointer bg-[#FEA630] hover:scale-105 items-center border-2 border-amber-800 justify-center`}
      onClick={async () => {
        try {
          // 👈 Replace the local endpoint fetch with direct database query
          const { data, error } = await supabase
            .from("books")
            .select("title, type, number, side, location_id")
            .eq("location_id", id);

          if (error) throw error;

          setBooks(data || []);
          setCurrentPage(1);
        } catch (error) {
          console.error("Search failed:", error);
        }
      }}
    >
      <p className="text-[10px] font-bold font-mono absolute z-10 left-1/2 -translate-x-1/2">{`${side} ${number}`}</p>
      <img
        ref={ref}
        src="../src/assets/wooden.png"
        className={`${highlight ? "opacity-0" : ""} hover:opacity-0 h-3.5 w-full`}
      />
    </div>
  );
});

export default WoodenRack;