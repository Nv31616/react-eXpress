import React from "react";
import SteelBlock from "./SteelBlock";
import WoodenRackPair from "./WoodenRackPair";
import Computers from "./Computers";
import WoodenRack from "./WoodenRack";

const Library = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="border-b-16px grid w-full max-w-7xl grid-cols-13 border-slate-500 bg-white p-10 shadow-2xl"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(13, minmax(0, 1fr))",
          }}
        >
          <WoodenRackPair />
          <div className="col-span-1" />
          <SteelBlock />
          <div className="col-span-3 flex h-full justify-center">
            <div className="h-full w-px bg-slate-200" />
          </div>
          <SteelBlock />
          <div className="col-span-1" />
          <WoodenRackPair />
          <WoodenRackPair />
          <div className="col-span-1" />
          <SteelBlock />
          <div className="col-span-3 flex h-full justify-center">
            <div className="h-full w-px bg-slate-200" />
          </div>
          <SteelBlock />
          <div className="col-span-1" />
          <WoodenRackPair />
          <WoodenRackPair />
          <div className="col-span-1" />
          <SteelBlock />
          <div className="col-span-3 flex h-full justify-center">
            <div className="h-full w-px bg-slate-200" />
          </div>
          <SteelBlock />
          <div className="col-span-1" />
          <WoodenRackPair />
          <WoodenRackPair />
          <div className="col-span-1" />
          <SteelBlock />
          <div className="col-span-3 flex h-full justify-center">
            <div className="h-full w-px bg-slate-200" />
          </div>
          <SteelBlock />
          <div className="col-span-1" />
          <WoodenRackPair />
          <WoodenRackPair />
          <div className="col-span-1" />
          <SteelBlock />
          <div className="col-span-3 flex h-full justify-center">
            <div className="h-full w-px bg-slate-200" />
          </div>
          <SteelBlock />
          <div className="col-span-1" />
          <div className="col-span-3 flex h-16 flex-col justify-center">
            <WoodenRack round="t" />
            <WoodenRack round="b" />
            <Computers/>
          </div>

          <div className="col-span-3 flex flex-col">
            <WoodenRackPair />
            <div className="mb-4 flex items-center justify-center border-slate-800">
              <Computers />
            </div>
            <WoodenRack />
          </div>

          <div className="col-span-2" />
          <div className="min-h-160px col-span-3 flex h-full flex-col items-center justify-end border-x-2 border-slate-300 bg-slate-50 pb-2">
            <span className="text-[9px] font-bold text-slate-400">
              ENTRANCE
            </span>
          </div>

          <div className="col-span-2 flex h-full flex-col items-center justify-end pb-0">
            <div className="flex h-30 w-20 items-center justify-center border-2 border-r bg-linear-to-r from-slate-400 via-slate-300 to-slate-400 text-center text-[8px] leading-tight font-black uppercase shadow-md">
              Librarian's
              <br />
              Desk
            </div>
          </div>

          <div className="col-span-3 flex flex-col justify-between">
            <WoodenRackPair />
            <div className="flex items-center justify-end border-b border-amber-900 text-[10px] font-bold">
              <img
                src="../src/assets/wooden.png"
                className="object-cover h-8 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
