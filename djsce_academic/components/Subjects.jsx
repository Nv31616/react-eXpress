import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";

const subjects = {
  IT: {
    "SEM I": ["SPC", "Maths", "ECS", "Chemistry", "Engg. Graphics"],
    "SEM II": ["Maths-II", "Java", "BEE", "CEM", "Physics", "FIT"],
  },
  Comps: {
    "SEM I": ["SPC", "Maths", "ECS", "Chemistry", "Engg. Graphics"],
    "SEM II": ["Maths-II", "Java", "BEE", "CEM", "Physics", "FCT"],
  },
  "CSE-DS": {
    "SEM I": ["SPC", "Maths", "ECS", "Chemistry", "Engg. Graphics"],
    "SEM II": ["Maths-II", "Java", "BEE", "CEM", "Physics", "FDA"],
  },
  AIDS: {
    "SEM I": ["SPC", "Maths", "BEE", "CEM", "Physics"],
    "SEM II": [
      "Maths-II",
      "Java",
      "ECS",
      "Chemistry",
      "Engg. Graphics",
      "FAIDS",
    ],
  },
  Mech: {
    "SEM I": ["SPC", "Maths", "BEE", "CEM", "Physics"],
    "SEM II": ["Maths-II", "Java", "ECS", "Chemistry", "Engg. Graphics", "EME"],
  },
  AIML: {
    "SEM I": ["SPC", "Maths", "BEE", "CEM", "Physics"],
    "SEM II": [
      "Maths-II",
      "Java",
      "ECS",
      "Chemistry",
      "Engg. Graphics",
      "FAIML",
    ],
  },
  EXTC: {
    "SEM I": ["SPC", "Maths", "BEE", "CEM", "Physics"],
    "SEM II": ["Maths-II", "Java", "ECS", "Chemistry", "Engg. Graphics", "EN"],
  },
  ICB: {
    "SEM I": ["SPC", "Maths", "BEE", "CEM", "Physics"],
    "SEM II": [
      "Maths-II",
      "Java",
      "ECS",
      "Chemistry",
      "Engg. Graphics",
      "FSST",
    ],
  },
};

const Subjects = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { branch, sem } = state;
  const subjectList = subjects[branch][sem];
  return (
    <div className="bg-[#dbc397] min-h-screen flex flex-col items-center p-6 gap-6">
      <p className="font-bold text-4xl text-amber-900">
        {sem} — {branch}
      </p>

      {subjectList.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 w-full">
          {subjectList.map((subject) => (
            <Card key={subject} title={subject} buttonText="Download" />
          ))}
        </div>
      ) : (
        <p className="text-amber-800 font-mono text-xl">
          No subjects found for this selection.
        </p>
      )}

      <button
        onClick={() => navigate("/TermTest")}
        className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-64 h-10 text-white"
      >
        Back
      </button>
    </div>
  );
};

export default Subjects;
