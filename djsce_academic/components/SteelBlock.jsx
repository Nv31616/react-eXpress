import { forwardRef, useState } from "react";
import LibraryContext from "../src/LibraryContext";
import { useContext } from "react";

const SteelBlock = forwardRef((props, ref) => {
  const type = "steel";
  const number = props.number;
  const side = props.side;
  const id = props.id;
  const { highlightedId, setBooks, setCurrentPage } = useContext(LibraryContext);
  const highlight = id === highlightedId;

  return (
    <div
      className={`relative ${highlight ? "scale-105 bg-none bg-slate-500 text-sky-200" : ""} hover:bg-none hover: bg-slate-500 hover:text-sky-200 border-slate-800 hover:scale-105 cursor-pointer flex flex-col w-1/2 font-mono items-center justify-center border-2 bg-linear-to-r from-slate-400 via-slate-300  to-slate-400 font-bold`}
      onClick={async () => {
        try {
          const response = await fetch(`/api/search/?location_id=${id}`);
          const data = await response.json();
          setBooks(data.books);
          setCurrentPage(1);
        } catch (error) {
          console.error("Search failed:", error);
        }
      }}
      ref={ref}
    >
      {`${side}`}
      <br />
      {`${number}`}
    </div>
  );
});

export default SteelBlock;
