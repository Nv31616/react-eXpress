import React from "react";
import { useState } from "react";

const GroupRadio = ({name,selectedOption,setSelectedOption}) => {
  return (
    <div className="flex w-full text-amber-800 font-mono justify-around ">
      <div className="flex gap-2">
        <input
          type="radio"
          name={name}
          id={`${name}-groupA`}
          value="Group A"
          checked={selectedOption === "Group A"}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        />
        <label htmlFor={`${name}-groupA`}>Group A</label>
      </div>

      <div className="flex gap-2">
        <input
          type="radio"
          name={name}
          value="Group B"
          id={`${name}-groupB`}
          checked={selectedOption === "Group B"}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        />
        <label htmlFor={`${name}-groupB`}>Group B</label>
      </div>
    </div>
  );
};

export default GroupRadio;
