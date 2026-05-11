import React from "react";

const SemRadio = ({ name, selectedOption, setSelectedOption }) => {
  const sems = ["SEM I", "SEM II", "SEM III", "SEM IV", "SEM V", "SEM VI", "SEM VII", "SEM VIII"];

  return (
    <div className="grid grid-cols-2 grid-rows-4 w-full text-amber-800 text-xl font-mono font-bold place-items-center">
      {sems.map((sem) => (
        <div key={sem} className="flex cursor-pointer gap-2 justify-self-start px-6">
          <input
            className="cursor-pointer"
            type="radio"
            id={`${name}-${sem}`}
            name={name}
            value={sem}
            checked={selectedOption === sem}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label className="cursor-pointer" htmlFor={`${name}-${sem}`}>{sem}</label>
        </div>
      ))}
    </div>
  );
};

export default SemRadio;