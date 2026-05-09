import React from "react";
import SteelBlock from "./SteelBlock";
import Computers from "./Computers";
import WoodenRack from "./WoodenRack";

const Library = () => {
  const totalTiles = 20 * 30; //Number of background floor tiles
  const tiles = Array.from({ length: totalTiles }); //Background floor tiles

  return (
    <>
      <div className="relative ml-auto mr-10 my-5 w-2/3">
        <div
          className="absolute inset-0 z-0 grid"
          style={{
            gridTemplateColumns: "repeat(20, 1fr)",
            gridTemplateRows: "repeat(30, 1fr)",
          }}
        >
          {tiles.map(() => (
            <div
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
            <WoodenRack side="LH" number="13" alignment="top-full left-0 mt-2" />
            <WoodenRack side="LH" number="12" alignment="top-full left-0 mt-2" />
          </div>

          <div className="col-span-1" />

          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="B" number="12"/>
            <SteelBlock side="F" number="12"/>
          </div>

          <div className="col-span-3" />
          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="F" number="11"/>
            <SteelBlock side="B" number="11"/>
          </div>
  
          <div className="col-span-1" />

          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="RH" number="13" />
            <WoodenRack side="RH" number="12" />
          </div>

          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="LH" number="11" />
            <WoodenRack side="LH" number="10" />
          </div>

          <div className="col-span-1" />

          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="B" number="10"/>
            <SteelBlock side="F" number="10"/>
          </div>

          <div className="col-span-3" />

          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="F" number="9"/>
            <SteelBlock side="B" number="9"/>
          </div>

          <div className="col-span-1" />

          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="RH" number="11" />
            <WoodenRack side="RH" number="10" />
          </div>

          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="LH" number="9" />
            <WoodenRack side="LH" number="8" />
          </div>

          <div className="col-span-1" />

          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="B" number="8"/>
            <SteelBlock side="F" number="8"/>
          </div>
  
          <div className="col-span-3" />

          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="F" number="7"/>
            <SteelBlock side="B" number="7"/>
          </div>
    
          <div className="col-span-1" />
          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="RH" number="9" />
            <WoodenRack side="RH" number="8" />
          </div>
          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="LH" number="7" />
            <WoodenRack side="LH" number="6" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="B" number="6"/>
            <SteelBlock side="F" number="6"/>
          </div>

          <div className="col-span-3" />
          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="F" number="5"/>
            <SteelBlock side="F" number="5"/>
          </div>

          <div className="col-span-1" />

          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="RH" number="7" />
            <WoodenRack side="RH" number="6" />
          </div>

          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="LH" number="5" />
            <WoodenRack side="LH" number="4" />
          </div>

          <div className="col-span-1" />
          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="B" number="4"/>
            <SteelBlock side="F" number="4"/>
          </div>
  
          <div className="col-span-3" />
          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="F" number="3"/>
            <SteelBlock side="B" number="3"/>
          </div>

          <div className="col-span-1" />
          <div className="col-span-3 flex h-16 flex-col">
            <WoodenRack side="RH" number="5" />
            <WoodenRack side="RH" number="4" />
            <Computers />
          </div>
          <div className="col-span-3 flex flex-col">
            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="LH" number="3" />
              <WoodenRack side="LH" number="2" />
            </div>
            <Computers />
            <WoodenRack side="LH" number="1" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-1 -mt-8 mb-24 flex h-32">
            <SteelBlock side="B" number="2"/>
            <SteelBlock side="F" number="2"/>
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
            <SteelBlock side="F" number="1"/>
            <SteelBlock side="B" number="1"/>
          </div>

          <div className="col-span-1 -ml-10 flex h-full flex-col items-center justify-end pb-0">
            <div className="backdrop-blur-md items-center flex h-25 w-20 justify-center border-2 text-[12px] text-center font-bold font-mono text-[#875003]">
              Librarian's 
              <br/>
              Desk
            </div>
          </div>

          <div className="col-span-3 flex flex-col justify-between">
            <div className="col-span-3 flex h-16 flex-col">
              <WoodenRack side="RH" number="3" />
              <WoodenRack side="RH" number="2" />
            </div>
            <div className="flex items-center justify-end">
              <WoodenRack side="RH" number="1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
