import React from "react";
import SteelBlock from "./SteelBlock";
import Computers from "./Computers";
import WoodenRack from "./WoodenRack";
import BooksPane from "./BooksPane";
import { useState } from "react";
import { createContext } from "react";
import LibraryContext from "../src/LibraryContext";
import { useRef } from "react";
import { useEffect } from "react";

const Library = () => {
  const totalTiles = 20 * 30; //Number of background floor tiles
  const tiles = Array.from({ length: totalTiles }); //Background floor tiles
  const [highlightedId, setHighlightedId] = useState("");
  const [books, setBooks] = useState([]);
  const rackRefs = useRef({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (highlightedId && rackRefs.current[highlightedId]) {
      rackRefs.current[highlightedId].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [highlightedId]);

  return (
    <LibraryContext.Provider
      value={{
        highlightedId,
        setHighlightedId,
        books,
        setBooks,
        currentPage,
        setCurrentPage,
      }}
    >
      <div className="flex flex-col m-3 md:flex-row justify-center items-center">
        <BooksPane />
        <div className="relative m-3 w-[296px] h-[472px] scale-[1.19] origin-top ">
          <div
            className="absolute inset-0  z-0 grid"
            style={{
              gridTemplateColumns: "repeat(20, 1fr)",
              gridTemplateRows: "repeat(30, 1fr)",
            }}
          >
            {tiles.map((_, i) => (
              <div
                key={i}
                className="border-[0.5px] border-slate-300/50 bg-[#c2b8ac]" //Repeating  floor tiles
              />
            ))}
          </div>
          {/* Aspect ratio for proper viewing 895x1249 */}
          <div //Parent grid of library Wooden Racks, Steel Blocks & Computers
            className="relative mx-auto z-10 grid grid-cols-13 px-5 py-4 border-2 border-amber-800"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(13, 20px)",
              gridTemplateRows: "64px 64px 64px 64px 40px 40px 40px 30px 30px",
            }}
          >
            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                side="LH"
                number="13"
                id="wdn-lh-13"
                alignment="top-full left-0 mt-2"
                ref={(el) => (rackRefs.current["wdn-lh-13"] = el)}
              />
              <WoodenRack
                side="LH"
                number="12"
                id="wdn-lh-12"
                alignment="top-full left-0 mt-2"
                ref={(el) => (rackRefs.current["wdn-lh-12"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-b-12"
                side="B"
                number="12"
                ref={(el) => (rackRefs.current["stl-b-12"] = el)}
              />
              <SteelBlock
                id="stl-f-12"
                side="F"
                number="12"
                ref={(el) => (rackRefs.current["stl-f-12"] = el)}
              />
            </div>

            <div className="col-span-3" />
            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-11"
                side="F"
                number="11"
                ref={(el) => (rackRefs.current["stl-f-11"] = el)}
              />
              <SteelBlock
                id="stl-b-11"
                side="B"
                number="11"
                ref={(el) => (rackRefs.current["stl-b-11"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-rh-13"
                side="RH"
                number="13"
                ref={(el) => (rackRefs.current["wdn-rh-13"] = el)}
              />
              <WoodenRack
                id="wdn-rh-12"
                side="RH"
                number="12"
                ref={(el) => (rackRefs.current["wdn-rh-12"] = el)}
              />
            </div>

            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-lh-11"
                side="LH"
                number="11"
                ref={(el) => (rackRefs.current["wdn-lh-11"] = el)}
              />
              <WoodenRack
                id="wdn-lh-10"
                side="LH"
                number="10"
                ref={(el) => (rackRefs.current["wdn-lh-10"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-b-10"
                side="B"
                number="10"
                ref={(el) => (rackRefs.current["stl-b-10"] = el)}
              />
              <SteelBlock
                id="stl-f-10"
                side="F"
                number="10"
                ref={(el) => (rackRefs.current["stl-f-10"] = el)}
              />
            </div>

            <div className="col-span-3" />

            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-9"
                side="F"
                number="9"
                ref={(el) => (rackRefs.current["stl-f-9"] = el)}
              />
              <SteelBlock
                id="stl-b-9"
                side="B"
                number="9"
                ref={(el) => (rackRefs.current["stl-b-9"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-rh-11"
                side="RH"
                number="11"
                ref={(el) => (rackRefs.current["wdn-rh-11"] = el)}
              />
              <WoodenRack
                id="wdn-rh-10"
                side="RH"
                number="10"
                ref={(el) => (rackRefs.current["wdn-rh-10"] = el)}
              />
            </div>

            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-lh-9"
                side="LH"
                number="9"
                ref={(el) => (rackRefs.current["wdn-lh-9"] = el)}
              />
              <WoodenRack
                id="wdn-lh-8"
                side="LH"
                number="8"
                ref={(el) => (rackRefs.current["wdn-lh-8"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-b-8"
                side="B"
                number="8"
                ref={(el) => (rackRefs.current["stl-b-8"] = el)}
              />
              <SteelBlock
                id="stl-f-8"
                side="F"
                number="8"
                ref={(el) => (rackRefs.current["stl-f-8"] = el)}
              />
            </div>

            <div className="col-span-3" />

            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-7"
                side="F"
                number="7"
                ref={(el) => (rackRefs.current["stl-f-7"] = el)}
              />
              <SteelBlock
                id="stl-b-7"
                side="B"
                number="7"
                ref={(el) => (rackRefs.current["stl-b-7"] = el)}
              />
            </div>

            <div className="col-span-1" />
            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-rh-9"
                side="RH"
                number="9"
                ref={(el) => (rackRefs.current["wdn-rh-9"] = el)}
              />
              <WoodenRack
                id="wdn-rh-8"
                side="RH"
                number="8"
                ref={(el) => (rackRefs.current["wdn-rh-8"] = el)}
              />
            </div>
            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-lh-7"
                side="LH"
                number="7"
                ref={(el) => (rackRefs.current["wdn-lh-7"] = el)}
              />
              <WoodenRack
                id="wdn-lh-6"
                side="LH"
                number="6"
                ref={(el) => (rackRefs.current["wdn-lh-6"] = el)}
              />
            </div>
            <div className="col-span-1" />
            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-b-6"
                side="B"
                number="6"
                ref={(el) => (rackRefs.current["stl-b-6"] = el)}
              />
              <SteelBlock
                id="stl-f-6"
                side="F"
                number="6"
                ref={(el) => (rackRefs.current["stl-f-6"] = el)}
              />
            </div>

            <div className="col-span-3" />
            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-5"
                side="F"
                number="5"
                ref={(el) => (rackRefs.current["stl-f-5"] = el)}
              />
              <SteelBlock
                id="stl-b-6"
                side="B"
                number="5"
                ref={(el) => (rackRefs.current["stl-b-5"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-rh-7"
                side="RH"
                number="7"
                ref={(el) => (rackRefs.current["wdn-rh-7"] = el)}
              />
              <WoodenRack
                id="wdn-rh-6"
                side="RH"
                number="6"
                ref={(el) => (rackRefs.current["wdn-rh-6"] = el)}
              />
            </div>

            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-lh-5"
                side="LH"
                number="5"
                ref={(el) => (rackRefs.current["wdn-lh-5"] = el)}
              />
              <WoodenRack
                id="wdn-lh-4"
                side="LH"
                number="4"
                ref={(el) => (rackRefs.current["wdn-lh-4"] = el)}
              />
            </div>

            <div className="col-span-1" />
            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-4"
                side="B"
                number="4"
                ref={(el) => (rackRefs.current["stl-b-4"] = el)}
              />
              <SteelBlock
                id="stl-b-4"
                side="F"
                number="4"
                ref={(el) => (rackRefs.current["stl-f-4"] = el)}
              />
            </div>

            <div className="col-span-3" />
            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-3"
                side="F"
                number="3"
                ref={(el) => (rackRefs.current["stl-f-3"] = el)}
              />
              <SteelBlock
                id="stl-b-3"
                side="B"
                number="3"
                ref={(el) => (rackRefs.current["stl-b-3"] = el)}
              />
            </div>

            <div className="col-span-1" />
            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-rh-5"
                side="RH"
                number="5"
                ref={(el) => (rackRefs.current["wdn-rh-5"] = el)}
              />
              <WoodenRack
                id="wdn-rh-4"
                side="RH"
                number="4"
                ref={(el) => (rackRefs.current["wdn-rh-4"] = el)}
              />
            </div>
            <div className="col-span-10"></div>
            <div className="col-span-3 flex justify-center">
              <Computers />
            </div>
            <div className="col-span-3 flex h-2.5 flex-col">
              <WoodenRack
                id="wdn-lh-3"
                side="LH"
                number="3"
                ref={(el) => (rackRefs.current["wdn-lh-3"] = el)}
              />
              <WoodenRack
                id="wdn-lh-2"
                side="LH"
                number="2"
                ref={(el) => (rackRefs.current["wdn-lh-2"] = el)}
              />
            </div>
            <div className="col-span-1" />
            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-b-2"
                side="B"
                number="2"
                ref={(el) => (rackRefs.current["stl-b-2"] = el)}
              />
              <SteelBlock
                id="stl-f-2"
                side="F"
                number="2"
                ref={(el) => (rackRefs.current["stl-f-2"] = el)}
              />
            </div>
            <div className="col-span-3"></div>
            {/* <div className="col-span-3  flex items-end">
              <div className="backdrop-blur-xl w-full flex border border-[#875003] flex-col items-center justify-between p-1">
                <span className="text-xs font-mono text-[#875003]">↑</span>
                <span className="text-xs font-mono text-[#875003]">
                  Entrance
                </span>
              </div>
            </div> */}

            <div className="col-span-1 -mt-2.5 mb-24 flex h-10">
              <SteelBlock
                id="stl-f-1"
                side="F"
                number="1"
                ref={(el) => (rackRefs.current["stl-f-1"] = el)}
              />
              <SteelBlock
                id="stl-b-1"
                side="B"
                number="1"
                ref={(el) => (rackRefs.current["stl-b-1"] = el)}
              />
            </div>

            <div className="col-span-1 -ml-10 flex h-full flex-col items-center justify-end pb-0">
              {/* <div className="backdrop-blur-md items-center flex h-25 w-20 justify-center border-2 text-[12px] text-center font-bold font-mono text-[#875003]">
                Librarian's
                <br />
                Desk
              </div> */}
            </div>

            <div className="col-span-3 flex flex-col">
              <div className="col-span-3 flex h-2.5 flex-col">
                <WoodenRack
                  id="wdn-rh-3"
                  side="RH"
                  number="3"
                  ref={(el) => (rackRefs.current["wdn-rh-3"] = el)}
                />
                <WoodenRack
                  id="wdn-rh-2"
                  side="RH"
                  number="2"
                  ref={(el) => (rackRefs.current["wdn-rh-2"] = el)}
                />
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <Computers />
            </div>
            <div className="col-span-10"></div>
            <div className="col-span-3 flex flex-col justify-end">
              <WoodenRack
                id="wdn-lh-1"
                side="LH"
                number="1"
                ref={(el) => (rackRefs.current["wdn-lh-1"] = el)}
              />
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-3  flex items-end">
              <div className="backdrop-blur-xl w-full flex border border-[#875003] flex-col items-center justify-between">
                <span className="text-[8px] font-mono text-[#875003]">↑</span>
                <span className="text-[8px] font-mono text-[#875003]">
                  Entrance
                </span>
              </div>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-3 flex flex-col justify-end">
              <WoodenRack
                id="wdn-rh-1"
                side="RH"
                number="1"
                ref={(el) => (rackRefs.current["wdn-rh-1"] = el)}
              />
            </div>
          </div>
        </div>
      </div>
    </LibraryContext.Provider>
  );
};

export default Library;
