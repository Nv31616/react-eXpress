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
    <div className="flex justify-center">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-10 border bg-[#0f0f0f] border-[#2a0a0a] rounded-2xl m-4">
        <div className="flex flex-col gap-3">
          <p className="place-self-center font-bold text-xl sm:text-2xl lg:text-3xl text-[#e8e0d8]">
            Select Semester
          </p>
          <SemRadio
            name="Semesters"
            selectedOption={selectedSem}
            setSelectedOption={setSelectedSem}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="place-self-center font-bold text-xl sm:text-2xl lg:text-3xl text-[#e8e0d8]">
            Select Branch
          </p>
          <BranchRadio
            name="Branches"
            selectedOption={selectedBranch}
            setSelectedOption={setSelectedBranch}
          />
        </div>

        <button
          className="hover:scale-105 md:col-span-2 max-w-xs place-self-center cursor-pointer bg-[#aa1111] border-2 border-[#cc2222] font-mono hover:bg-[#1a0505] hover:text-[#ff4444] rounded-3xl w-full h-10 text-white"
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
