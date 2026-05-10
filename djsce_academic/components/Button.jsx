import React from "react";

const Button = (props) => {
  return (
    <button className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white">
      {props.text}
    </button>
  );
};

export default Button;
