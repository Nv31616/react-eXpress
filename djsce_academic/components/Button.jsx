import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-30 h-10 text-white shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27] active:shadow-[inset_3px_3px_6px_#8a2d15,inset_-3px_-3px_6px_#e64d27]">
        {props.text}
      </button>
    </>
  );
};

export default Button;
