import React from "react";
import Button from "./Button";


const Card = (props) => {
  return (
    <div className="p-4 border bg-amber-100 border-amber-900 rounded-2xl">
      <p className="font-bold text-xl text-amber-900">{`Maths`}</p>
      <p className="text-s text-[#ba3e1f] mb-3">{`Wooden Rack 7 | (RH)`}</p>
      <Button text="Show on Map" />
    </div>
  );
};

export default Card;