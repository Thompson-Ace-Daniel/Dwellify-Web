import React from 'react';

export default function DwellifyLogo({ className = "h-8 w-auto", iconOnly = false }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic Geometric Brand Mark */}
      <div className="relative flex items-center justify-center w-9 h-9 shrink-0">
        {/* Outer Protective Data Layer Ring */}
        <div className="absolute inset-0 border-2 border-blue-600/20 rounded-xl transform rotate-6 transition-transform duration-500 hover:rotate-45" />
        
        {/* Core Structural Isometric Hex/Cube Frame */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-6 h-6 text-blue-500 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)] animate-pulse"
          style={{ animationDuration: '4s' }}
        >
          {/* Left Wall / Tenant Node */}
          <path 
            d="M12 2L3 7v10l9 5" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="opacity-70"
          />
          {/* Right Wall / Agent Asset Ledger */}
          <path 
            d="M12 2l9 5v10l-9 5" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Central Structural Validation Axis */}
          <path 
            d="M12 22V12M12 12L3 7M12 12l9-5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-blue-400"
          />
          {/* The High-Trust Secure Core Dot */}
          <circle cx="12" cy="12" r="2" fill="#ffffff" className="animate-ping" style={{ animationDuration: '2s' }} />
          <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Typography Configuration */}
      {!iconOnly && (
        <div className="flex flex-col justify-center text-left">
          <span className="text-lg font-black tracking-tight leading-none text-white font-sans">
            Dwell<span className="text-blue-500 drop-shadow-[0_0_6px_rgba(37,99,235,0.2)]">ify</span>
          </span>
          <span className="text-[8px] font-bold font-mono tracking-[0.2em] text-neutral-500 uppercase mt-0.5 leading-none">
            Verified Index
          </span>
        </div>
      )}
    </div>
  );
}