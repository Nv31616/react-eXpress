import React, { useState } from "react";
import BranchRadio from "./BranchRadio";
import SemRadio from "./SemRadio";
import { useNavigate } from "react-router-dom";

const PYPs = () => {
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

      <div className="flex flex-col gap-3">
        <p className="place-self-center font-bold text-3xl text-amber-900">
          Select Exam
        </p>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 grid-rows-4 w-full text-amber-800 text-xl font-mono font-bold place-items-center">
          <div className="flex cursor-pointer gap-2 justify-self-start px-6">
            <input
              className="cursor-pointer"
              type="radio"
              id="End Sem"
              name="Exams"
              value="End Sem"
              // checked="true" // controlled by Card
              // onChange={(e) => setSelectedOption(e.target.value)} // updates Card's state
            />
            <label className="cursor-pointer" htmlFor="End Sem">
              End Sem
            </label>
          </div>

          <div className="flex cursor-pointer gap-2 justify-self-start px-6">
            <input
              className="cursor-pointer"
              type="radio"
              id="End Sem"
              name="Exams"
              value="TT1"
              // checked="true" // controlled by Card
              // onChange={(e) => setSelectedOption(e.target.value)} // updates Card's state
            />
            <label className="cursor-pointer" htmlFor="TT1">
              TT1
            </label>
          </div>
          <div className="flex cursor-pointer gap-2 justify-self-start px-6">
            <input
              className="cursor-pointer"
              type="radio"
              id="End Sem"
              name="Exams"
              value="TT2"
              // checked="true" // controlled by Card
              // onChange={(e) => setSelectedOption(e.target.value)} // updates Card's state
            />
            <label className="cursor-pointer" htmlFor="TT1">
              TT2
            </label>
          </div>
        </div>
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

export default PYPs;