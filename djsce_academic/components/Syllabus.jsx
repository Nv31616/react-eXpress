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
      <div className="p-6 flex flex-col gap-10 justify-items-center border bg-amber-100 border-amber-900 rounded-2xl m-4">
        <div className="flex flex-col gap-3">
          <p className="place-self-center font-bold text-3xl text-amber-900">
            Select Semester
          </p>
          <SemRadio
            name="Semesters"
            selectedOption={selectedSem}
            setSelectedOption={setSelectedSem}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="place-self-center font-bold text-3xl text-amber-900">
            Select Branch
          </p>
          <BranchRadio
            name="Branches"
            selectedOption={selectedBranch}
            setSelectedOption={setSelectedBranch}
          />
        </div>

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
  );
};

export default Syllabus;