import React from "react";
import SteelBlock from "./SteelBlock";
import Computers from "./Computers";
import WoodenRack from "./WoodenRack";
import SearchCard from "./SearchCard";
import { useState } from "react";
import { createContext } from "react";
import LibraryContext from "../src/LibraryContext";
import { useRef } from "react";
import { useEffect } from "react";

const Library = () => {
  const totalTiles = 20 * 30; //Number of background floor tiles
  const tiles = Array.from({ length: totalTiles }); //Background floor tiles
  const [highlightedId, setHighlightedId] = useState("");
  const rackRefs = useRef({});

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
    <LibraryContext.Provider value={{ highlightedId, setHighlightedId }}>
      <div className="flex justify-between">
        <SearchCard />
        <div className="relative ml-auto mr-10 my-5 w-2/3">
          <div
            className="absolute inset-0 z-0 grid"
            style={{
              gridTemplateColumns: "repeat(20, 1fr)",
              gridTemplateRows: "repeat(30, 1fr)",
            }}
          >
            {tiles.map((_,i) => (
              <div
                key={i}
                className="border-[0.5px] border-slate-300/50 bg-[#c2b8ac]" //Repeating  floor tiles
              />
            ))}
          </div>

          <div //Parent grid of library Wooden Racks, Steel Blocks & Computers
            className="relative z-10 grid grid-cols-13 px-10 pb-3 pt-10 border-2 border-amber-800"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
            }}
          >
            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack
                side="LH"
                number="13"
                alignment="top-full left-0 mt-2"
                ref={(el) => (rackRefs.current["LH-13"] = el)}
              />
              <WoodenRack
                side="LH"
                number="12"
                alignment="top-full left-0 mt-2"
                ref={(el) => (rackRefs.current["LH-12"] = el)}
              />
            </div>

            <div className="col-span-1" />

            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="B" number="12" ref={(el) => (rackRefs.current["B-12"] = el)}/>
              <SteelBlock side="F" number="12" ref={(el) => (rackRefs.current["F-12"] = el)}/>
            </div>

            <div className="col-span-3" />
            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="F" number="11" ref={(el) => (rackRefs.current["F-11"] = el)}/>
              <SteelBlock side="B" number="11" ref={(el) => (rackRefs.current["B-11"] = el)}/>
            </div>

            <div className="col-span-1" />

            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="RH" number="13" ref={(el) => (rackRefs.current["RH-13"] = el)}/>
              <WoodenRack side="RH" number="12" ref={(el) => (rackRefs.current["RH-12"] = el)} />
            </div>

            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="LH" number="11" ref={(el) => (rackRefs.current["LH-11"] = el)}/>
              <WoodenRack side="LH" number="10" ref={(el) => (rackRefs.current["LH-10"] = el)}/>
            </div>

            <div className="col-span-1" />

            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="B" number="10" ref={(el) => (rackRefs.current["B-10"] = el)}/>
              <SteelBlock side="F" number="10" ref={(el) => (rackRefs.current["F-10"] = el)}/>
            </div>

            <div className="col-span-3" />

            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="F" number="9" ref={(el) => (rackRefs.current["F-9"] = el)}/>
              <SteelBlock side="B" number="9" ref={(el) => (rackRefs.current["B-9"] = el)}/>
            </div>

            <div className="col-span-1" />

            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="RH" number="11" ref={(el) => (rackRefs.current["RH-11"] = el)}/>
              <WoodenRack side="RH" number="10" ref={(el) => (rackRefs.current["RH-10"] = el)}/>
            </div>

            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="LH" number="9" ref={(el) => (rackRefs.current["LH-9"] = el)}/>
              <WoodenRack side="LH" number="8" ref={(el) => (rackRefs.current["LH-8"] = el)}/>
            </div>

            <div className="col-span-1" />

            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="B" number="8" ref={(el) => (rackRefs.current["B-8"] = el)}/>
              <SteelBlock side="F" number="8" ref={(el) => (rackRefs.current["F-8"] = el)}/>
            </div>

            <div className="col-span-3" />

            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="F" number="7" ref={(el) => (rackRefs.current["F-7"] = el)}/>
              <SteelBlock side="B" number="7" ref={(el) => (rackRefs.current["B-7"] = el)}/>
            </div>

            <div className="col-span-1" />
            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="RH" number="9" ref={(el) => (rackRefs.current["RH-9"] = el)}/>
              <WoodenRack side="RH" number="8" ref={(el) => (rackRefs.current["RH-8"] = el)}/>
            </div>
            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="LH" number="7" ref={(el) => (rackRefs.current["LH-7"] = el)}/>
              <WoodenRack side="LH" number="6" ref={(el) => (rackRefs.current["LH-6"] = el)}/>
            </div>
            <div className="col-span-1" />
            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="B" number="6" ref={(el) => (rackRefs.current["B-6"] = el)}/>
              <SteelBlock side="F" number="6" ref={(el) => (rackRefs.current["F-6"] = el)}/>
            </div>

            <div className="col-span-3" />
            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="F" number="5" ref={(el) => (rackRefs.current["F-5"] = el)}/>
              <SteelBlock side="F" number="5" ref={(el) => (rackRefs.current["F-5"] = el)}/>
            </div>

            <div className="col-span-1" />

            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="RH" number="7" ref={(el) => (rackRefs.current["RH-7"] = el)}/>
              <WoodenRack side="RH" number="6" ref={(el) => (rackRefs.current["RH-6"] = el)}/>
            </div>

            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="LH" number="5" ref={(el) => (rackRefs.current["LH-5"] = el)}/>
              <WoodenRack side="LH" number="4" ref={(el) => (rackRefs.current["LH-4"] = el)}/>
            </div>

            <div className="col-span-1" />
            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="B" number="4" ref={(el) => (rackRefs.current["B-5"] = el)}/>
              <SteelBlock side="F" number="4" ref={(el) => (rackRefs.current["F-4"] = el)}/>
            </div>

            <div className="col-span-3" />
            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="F" number="3" ref={(el) => (rackRefs.current["F-3"] = el)}/>
              <SteelBlock side="B" number="3" ref={(el) => (rackRefs.current["B-3"] = el)}/>
            </div>

            <div className="col-span-1" />
            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="RH" number="5" ref={(el) => (rackRefs.current["RH-5"] = el)}/>
              <WoodenRack side="RH" number="4" ref={(el) => (rackRefs.current["RH-4"] = el)}/>
              <Computers />
            </div>
            <div className="col-span-3 flex flex-col">
              <div className="col-span-3 flex h-16 flex-col">
                <WoodenRack side="LH" number="3" ref={(el) => (rackRefs.current["LH-3"] = el)}/>
                <WoodenRack side="LH" number="2" ref={(el) => (rackRefs.current["LH-2"] = el)}/>
              </div>
              <Computers />
              <WoodenRack side="LH" number="1" ref={(el) => (rackRefs.current["LH-1"] = el)}/>
            </div>
            <div className="col-span-1" />
            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="B" number="2" ref={(el) => (rackRefs.current["B-2"] = el)}/>
              <SteelBlock side="F" number="2" ref={(el) => (rackRefs.current["F-2"] = el)}/>
            </div>
            <div className="col-span-3 flex items-end">
              <div className="backdrop-blur-xl w-full flex h-1/3 border border-[#875003] flex-col items-center justify-between p-1">
                <span className="text-3xl font-mono text-[#875003]">↑</span>
                <span className="text-3xl font-mono text-[#875003]">
                  Entrance
                </span>
              </div>
            </div>

            <div className="col-span-1 -mt-8 mb-24 flex h-32">
              <SteelBlock side="F" number="1" ref={(el) => (rackRefs.current["F-1"] = el)}/>
              <SteelBlock side="B" number="1" ref={(el) => (rackRefs.current["B-1"] = el)}/>
            </div>

            <div className="col-span-1 -ml-10 flex h-full flex-col items-center justify-end pb-0">
              <div className="backdrop-blur-md items-center flex h-25 w-20 justify-center border-2 text-[12px] text-center font-bold font-mono text-[#875003]">
                Librarian's
                <br />
                Desk
              </div>
            </div>

            <div className="col-span-3 flex flex-col justify-between">
              <div className="col-span-3 flex h-16 flex-col">
                <WoodenRack side="RH" number="3" ref={(el) => (rackRefs.current["RH-3"] = el)}/>
                <WoodenRack side="RH" number="2" ref={(el) => (rackRefs.current["RH-2"] = el)}/>
              </div>
              <div className="flex items-center justify-end">
                <WoodenRack side="RH" number="1" ref={(el) => (rackRefs.current["RH-1"] = el)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LibraryContext.Provider>
  );
};

export default Library;
