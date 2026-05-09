import React from "react";

const SteelBlock = (props) => {
  const number = props.number;
  const side = props.side;
  return (
    <div className="col-span-1 -mt-8 mb-24 flex h-32 overflow-hidden rounded border-2  border-r bg-linear-to-r from-slate-400 via-slate-300 to-slate-400">
      <div className="flex w-1/2 rotate-180 items-center justify-center border-r bg-linear-to-r from-slate-400 via-slate-300 to-slate-400 text-[8px] font-bold [writing-mode:vertical-lr]">
      </div>
      <div className="flex w-1/2 rotate-180 items-center justify-center text-[8px] font-bold [writing-mode:vertical-lr]">
      </div>
    </div>
  );
};

export default SteelBlock;