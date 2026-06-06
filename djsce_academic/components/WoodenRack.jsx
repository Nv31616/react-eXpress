// WoodenRack.jsx
import React, { forwardRef, useContext } from "react";
import LibraryContext from "../src/LibraryContext";

const WoodenRack = forwardRef((props, ref) => {
  const { number, side, id } = props;
  const { highlightedId, setBooks, setCurrentPage } = useContext(LibraryContext);
  const highlight = id === highlightedId;

  return (
    <div
      className={`${highlight ? "scale-105" : ""} hover:bg-none relative flex flex-1 cursor-pointer bg-[#FEA630] hover:scale-105 items-center border-2 border-amber-800 justify-center`}
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
    >
<<<<<<< HEAD
      <p className="text-[1.6vw] font-bold font-mono absolute z-10 left-1/2 -translate-x-1/2">
        {`${side} ${number}`}
      </p>
      <img
        ref={ref}
        src="../src/assets/wooden.png"
        className={`${highlight ? "opacity-0" : ""} hover:opacity-0 h-[1.48vh] w-full`}
=======
      <p className="font-bold font-mono absolute z-10 left-1/2 -translate-x-1/2">{`${side} ${number}`}</p>
      <img
        ref={ref}
        src="../src/assets/wooden.png"
        className={`${highlight ? "opacity-0" : ""} object-cover hover:opacity-0 h-8 w-full`}
>>>>>>> parent of a873ed6 (Made the Library map according to smartphone device)
      />
    </div>
  );
});

export default WoodenRack;
