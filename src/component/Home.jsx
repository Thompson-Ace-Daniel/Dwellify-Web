import { useState, useEffect } from "react";
import bg from "../assets/bg-image10.jpg";
import img from "../assets/bg-image.jpg";
import img2 from "../assets/bg-image2.jpg";

export default function Home() {
  const container = [
    {
      tittle: "Drive for minutes",
      desc: "Book a car, unlock it with your phone, and pay for the time and distance you drive.",
      img: bg,
    },
    {
      tittle: "Drive for days",
      desc: "Pick daily rentals for longer trips and pay a fixed fee. Fuel and parking not included.",
      img: img,
    },
    {
      tittle: "Park for free",
      desc: "No fees in designated areas, whether you're taking a break or ending your trip.",
      img: img2,
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-green-500 selection:text-white">
      
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <div 
        className="bgImage w-full min-h-[550px] md:min-h-[650px] bg-cover bg-center flex items-center pt-24 pb-16 px-6 sm:px-12 md:px-24"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})` }}
      >
        <div className="max-w-2xl relative z-10 space-y-4">
          <h3 className="text-green-400 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold">
            Bolt Drive Car Rentals
          </h3>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
            A car when <br className="hidden sm:inline" /> you need one
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-lg">
            No service checks, insurance forms, fuel prices, or parking fees. 
            Drive new cars at low rates with Bolt Drive car rental.
          </p>
          <div className="pt-4">
            <button className="bg-green-500 text-white font-bold tracking-wide text-xs uppercase cursor-pointer hover:bg-green-400 active:scale-[0.98] transition duration-200 w-full sm:w-fit px-8 py-4 rounded-xl shadow-lg shadow-green-500/20">
              Get the app
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          FEATURES SECTION
          ========================================== */}
      <div className="w-full bg-neutral-950 py-20 border-t border-white/5">
        
        {/* INTRODUCTION CONTENT HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 sm:mb-24 px-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Car rental on demand
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            With Bolt Drive car-sharing, you pay for the time and distance you drive. Nothing more.
          </p>
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <p className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-wider uppercase">
              See all available services in the app
            </p>
          </div>
        </div>

        {/* 📱 HORIZONTAL SCROLL CONTEXT FOR MOBILE / STABLE GRID FOR DESKTOP */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
          <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 scrollbar-hide">
            {container.map((item, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] border border-white/10 rounded-3xl p-5 backdrop-blur-md hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center"
              >
                {/* INTERACTIVE MEDIA ITEM CAPTURE */}
                <div className="relative overflow-hidden aspect-[4/3] rounded-2xl border border-white/5 bg-neutral-900">
                  <img
                    src={item.img}
                    alt={item.tittle}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* TEXT METADATA BLOCK */}
                <div className="space-y-2 grow px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-green-500/10 border border-green-500/20 text-green-400 px-2 py-0.5 rounded-md font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-white group-hover:text-green-400 transition-colors duration-200">
                      {item.tittle}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}