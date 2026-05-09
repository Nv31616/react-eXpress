import React from "react";
import WoodenRack from "./WoodenRack";

const WoodenRackPair = () => {
  return (
    <div className="col-span-3 flex h-16 flex-col">
      <WoodenRack round="t"/>
      <WoodenRack round="b"/>
    </div>
  );
};

export default WoodenRackPair;
