import React from "react";
import Button from "./Button";


const Card = (props) => {
  const {buttonText,subtitle,title} = props;
  return (
    <div className="p-4 flex flex-col justify-center border h-75 w-75 items-center bg-amber-100 border-amber-900 rounded-2xl">
      <p className="font-bold text-4xl text-amber-900">{title}</p>
      <p className="text-s text-[#ba3e1f] mb-3">{subtitle}</p>
      <Button text={buttonText} />
    </div>
  );
};

export default Card;