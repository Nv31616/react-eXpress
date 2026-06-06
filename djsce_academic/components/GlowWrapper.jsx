import React, { useRef, useEffect } from "react";

const GlowWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!wrapperRef.current) return;
      
      // Calculate coordinates relative to this wrapper container
      const { left, top } = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      wrapperRef.current.style.setProperty("--mouse-x", `${x}px`);
      wrapperRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const container = wrapperRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(220,38,38,0.15),transparent_80%)]"
    >
      {children}
    </div>
  );
};

export default GlowWrapper;