import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e8e0d8] flex flex-col relative overflow-hidden">
      
      {/* Background Subtle City Skyline Silhouette Accent */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none bg-repeat-x bg-bottom z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 200 250'%3E%3Cpath d='M0 250 L0 120 L40 120 L40 250 M40 250 L40 60 L90 60 L90 250 M90 250 L90 140 L140 140 L140 250 M140 250 L140 90 L200 90 L200 250' fill='%23FFFFFF'/%3E%3Cpath d='M15 140 H25 V150 H15 Z M55 90 H65 V100 H55 Z M55 130 H65 V140 H55 Z M110 160 H120 V170 H110 Z M160 110 H170 V120 H160 Z M160 150 H170 V160 H160 Z' fill='%23cc2222'/%3E%3C/svg%3E")`,
          backgroundSize: '400px auto'
        }}
      />

      {/* Main Container Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center flex-grow justify-center">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-16 flex flex-col items-center">
          <h1 className="font-mono font-bold text-4xl md:text-6xl text-[#e8e0d8] tracking-wider uppercase mb-6 drop-shadow-[0_0_15px_rgba(204,34,34,0.2)]">
            STOP SEARCHING.<br />START STUDYING.
          </h1>
          <p className="text-base md:text-lg text-[#c8c0b8] max-w-2xl leading-relaxed mb-8">
            Everything you need to ace your exams, all in one place. Grab past papers, track down library books, and view interactive syllabus maps instantly.
          </p>
          <button
            onClick={() => navigate("/Papers")}
            className="group hover:scale-105 active:scale-98 cursor-pointer px-8 h-12 bg-[#aa1111] border-2 border-[#cc2222] font-mono font-bold tracking-widest text-sm rounded-full text-white shadow-[0_4px_20px_rgba(170,17,17,0.3)] hover:bg-[#1a0505] hover:text-[#ff4444] hover:border-[#ff4444] transition-all duration-200 ease-out"
          >
            GET STARTED →
          </button>
        </div>

        {/* Core Features Grid Dashboard */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Past Papers */}
          <div className="bg-[#0f0f0f] border border-[#2a0a0a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#cc2222]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#1a0505] w-fit rounded-xl border border-[#2a0a0a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-[#e8e0d8] tracking-wide">
              Past Papers, Instantly
            </h3>
            <p className="text-sm text-[#c8c0b8] leading-relaxed">
              Skip the chaotic group drives. Get a clean, organized list of Term Tests and Final Exam papers matched exactly to your branch and semester.
            </p>
          </div>

          {/* Card 2: Subject Mind Maps */}
          <div className="bg-[#0f0f0f] border border-[#2a0a0a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#cc2222]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#1a0505] w-fit rounded-xl border border-[#2a0a0a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <circle cx="12" cy="12" r="3" />
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="18" cy="18" r="2" />
                <circle cx="6" cy="18" r="2" />
                <line x1="10.5" y1="10.5" x2="7.5" y2="7.5" />
                <line x1="13.5" y1="10.5" x2="16.5" y2="7.5" />
                <line x1="13.5" y1="13.5" x2="16.5" y2="16.5" />
                <line x1="10.5" y1="13.5" x2="7.5" y2="16.5" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-[#e8e0d8] tracking-wide">
              Interactive Syllabi
            </h3>
            <p className="text-sm text-[#c8c0b8] leading-relaxed">
              Don't waste time scrolling through boring syllabus PDFs. Turn heavy text into interactive, clickable mind maps so you can map out your topics easily.
            </p>
          </div>

          {/* Card 3: Library Map Tracker */}
          <div className="bg-[#0f0f0f] border border-[#2a0a0a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#cc2222]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#1a0505] w-fit rounded-xl border border-[#2a0a0a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#cc2222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-xl text-[#e8e0d8] tracking-wide">
              Live Book Finder
            </h3>
            <p className="text-sm text-[#c8c0b8] leading-relaxed">
              Find your reference books without walking in circles. Our digital library map highlights the exact row, shelf, and cupboard where your book is waiting.
            </p>
          </div>

        </div>

        {/* Footer Terminal Box Label */}
        <div className="border-t border-[#2a0808] w-full pt-6 flex items-center justify-between font-mono text-[11px] text-[#cc2222] tracking-widest uppercase">
          <span>System Status: Online</span>
          <span className="hidden sm:inline">No Clutter. Just Resources.</span>
        </div>

      </div>
    </div>
  );
};

export default Home;