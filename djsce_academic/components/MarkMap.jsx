import React from "react";
import { useEffect, useRef } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const transformer = new Transformer();

const MarkMap = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { subject, markdown } = state;
  const svgRef = useRef(null);
  const markmapRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current) return;
    const { root } = transformer.transform(markdown);
    if (!markmapRef.current) {
      markmapRef.current = Markmap.create(svgRef.current, {
        autoFit: true,
        duration: 500,
        spacingHorizontal: 150,
        spacingVertical: 10,
        paddingX: 20,
        initialExpandLevel: 2,
      });
    }
    markmapRef.current.setData(root);
  }, [markdown]);

  return (
    <div className="w-full min-h-screen bg-amber-100 border border-amber-900 p-4 flex flex-col">
      <p className="font-bold place-self-center text-2xl text-amber-900">
        {subject} — Mind Map
      </p>

      {/* Controls */}
      <div className="flex place-content-end gap-3 mb-4">
        <button
          onClick={() => markmapRef.current?.fit()}
          className="hover:scale-105 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-amber-700 rounded-3xl px-4 h-10 text-white"
        >
          Reset View
        </button>
        <button
          onClick={() => navigate(-1)}
          className="hover:scale-105 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl px-4 h-10 text-white"
        >
          Back
        </button>
      </div>

      <div className="rounded-2xl mx-4 h-90 overflow-hidden border border-amber-900">
        <style>
        {`
          /* 1. Disable text selection to prevent cursor interference during panning */
          .markmap-node {
            user-select: none;
          }

          /* 2. Increase font size and improve readability */
          .markmap-node > div {
            font-size: 16px
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            color: #451a03;
          }

          /* Responsive adjustments for the SVG container */
          svg {
            background: transparent;
          }
        `}
      </style>
        <svg ref={svgRef} style={{ width: "100%" ,height: "80vh" }} />
      </div>

    </div>
  );
};

export default MarkMap;
