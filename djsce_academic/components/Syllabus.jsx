import React from "react";
import { useState } from "react";
import SemRadio from "./SemRadio";
import BranchRadio from "./BranchRadio";
import { useNavigate } from "react-router-dom";

const Syllabus = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState("IT");
  const [selectedSem, setSelectedSem] = useState("SEM I");
  return (
    <div className="bg-[#dbc397] min-h-screen flex justify-center items-center rounded-2xl p-6">
      <div className="p-6 grid gap-10  grid-cols-2 justify-items-center border bg-amber-100 border-amber-900 rounded-2xl">
        <p className="place-self-center font-bold text-4xl text-amber-900">
          Select Semester
        </p>
        <p className="place-self-center font-bold text-4xl text-amber-900">
          Select Branch
        </p>
        <SemRadio
          name="Semesters"
          selectedOption={selectedSem}
          setSelectedOption={setSelectedSem}
        />
        <BranchRadio
          name="Branches"
          selectedOption={selectedBranch}
          setSelectedOption={setSelectedBranch}
        />
        <button
          className="col-span-2 hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-full h-10 text-white"
          onClick={() => {
            navigate("/Syllabus/subjects", {
              state: {
                branch: selectedBranch,
                sem: selectedSem,
              },
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Syllabus;
