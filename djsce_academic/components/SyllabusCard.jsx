import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SyllabusCard = (props) => {
  const { buttonText, subtitle, title } = props;
  const navigate = useNavigate();

  const fetchAndNavigate = async (subject) => {
    try {
      const response = await fetch(
        `/api/syllabus/markmap/?subject=${subject}`,
      );
      const data = await response.json();
      navigate("/markmap", {
        state: {
          subject: subject,
          markdown: data.markdown,
        },
      });
    } catch (error) {
      console.error("Failed to fetch markdown:", error);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2 items-center border bg-amber-100 border-amber-900 rounded-2xl">
      <p className="font-bold text-4xl text-amber-900">{title}</p>
      <p className="text-xl text-[#ba3e1f] mb-3">{subtitle}</p>
      <button
        className="hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-full h-10 text-white"
        onClick={() => fetchAndNavigate(title)}
      >
        View MarkMap
      </button>
      <button
        className="flex gap-3 items-center justify-center hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-full h-10 text-white"
        onClick={() => {
          window.open(`/api/syllabus/download/${title}/`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={22}
          id="download"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <path d="M1 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M6 11l4 4 4-4M10 1v14" />
          </g>
        </svg>
        Download
      </button>
    </div>
  );
};

export default SyllabusCard;
