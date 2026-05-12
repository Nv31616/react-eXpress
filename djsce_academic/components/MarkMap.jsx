import React from "react";
import { useEffect, useRef } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import { useLocation } from "react-router-dom";

const transformer = new Transformer();

const MarkMap = () => {
  const { state } = useLocation();
  const { subject, markdown } = state;
  const svgRef = useRef(null);
  const markmapRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current) return;
    const { root } = transformer.transform(markdown);
    if (!markmapRef.current) {
      markmapRef.current = Markmap.create(svgRef.current);
    }
    markmapRef.current.setData(root);
    markmapRef.current.fit();
  }, [markdown]);

  return (
    <div className="w-full bg-amber-100 border border-amber-900 rounded-2xl p-4">
      <p className="font-bold text-2xl text-amber-900 mb-2">
        {subject} — Mind Map
      </p>
      <svg ref={svgRef} style={{ width: "100%", height: "500px" }} />;
    </div>
  );
};

export default MarkMap;
