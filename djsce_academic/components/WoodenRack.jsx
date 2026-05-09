import React from "react";

const WoodenRack = (props) => {
  const number = props.number;
  const side = props.side;
  return (
    <div className="flex flex-1 items-center justify-center">
        <img
          src="../src/assets/wooden.png"
          className={`object-cover h-8 w-full rounded-${props.round}-xl border-2 border-amber-800`}
        />
      </div>
  );
};

export default WoodenRack;