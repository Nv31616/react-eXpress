import React from 'react'

const hoverCard = (props) => {
  return (
    <div className={`
        pointer-events-none
        absolute
        z-50
        ${props.alignment}
        w-72 p-6 rounded-2xl
        bg-[#] backdrop-blur-lg 
        border border-white/40 
        shadow-[0_8px_32px_0_rgba(184,61,30,0.15)]
        ring-1 ring-white/20
      `}>
        {/* Header using the darkest 'Wood' color #B83D1E */}
        <h2 className="text-[#B83D1E] text-lg font-black tracking-tight uppercase mb-1">
          Reference Block
        </h2>
        
        {/* Divider using the medium orange #F78231 */}
        <div className="h-1 w-12 bg-[#F78231] rounded-full mb-4" />

        <div className="space-y-3">
          <p className="text-[#4a3f35] text-xs leading-relaxed font-medium">
            Contains archival manuscripts and technical engineering journals.
          </p>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F78231] animate-pulse" />
            <span className="text-[10px] font-bold text-[#B83D1E] uppercase">
              Section 04 • Level 1
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-6 w-full py-2 bg-[#B83D1E] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-[#F78231] transition-colors shadow-lg">
          Browse Shelf
        </button>
      </div>
  )
}

export default hoverCard