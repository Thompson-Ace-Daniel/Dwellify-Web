import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  LocationEdit,
  HomeIcon,
  Tag,
  ArrowBigDown,
  ArrowBigUp,
} from "lucide-react";
import bg from "../assets/bg-image10.jpg";
import img from "../assets/bg-image.jpg";
import img2 from "../assets/bg-image2.jpg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openArrow, setOpenArrow] = useState(false);
  const [openArrow2, setOpenArrow2] = useState(false);
  const [openArrow3, setOpenArrow3] = useState(false);

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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? container.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === container.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-green-500 selection:text-white">
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <div
        className="bgImage w-full min-h-137.5 md:min-h-162.5 bg-cover bg-center flex items-center pt-24 pb-16 px-6 sm:px-12 md:px-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
        }}
      >
        <div className="max-w-2xl relative z-10 space-y-4">
          <h3 className="text-green-400 border w-fit px-3 rounded-md py-3 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold">
            Find, Connect, Move in.
          </h3>
          <h1 className="text-4xl capitalize sm:text-6xl md:text-7xl font-bold font-sans tracking-tight leading-none ">
            Find Your <br className="sm:inline" /> Perfect Apartment{" "}
            <br className="sm:inline" /> With{" "}
            <span className="font-bold text-green-500 font-sans">Dwellify</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-lg">
            Dwellify connects you with trusted agents and verified listings,
            making it easy to find the right apartment that fits your lifestyle
            and budget.
          </p>
          <div className="pt-4 flex gap-4">
            <button className="bg-green-500 text-white font-bold tracking-wide text-sm capitalize cursor-pointer hover:bg-green-400 active:scale-[0.98] transition duration-200 w-fit px-8 py-4 rounded-xl shadow-lg shadow-green-500/20">
              Find an apartment
            </button>
            <button className="flex gap-3 items-center bg-white rounded-2xl text-black px-4">
              <PlayCircle /> How it works
            </button>
          </div>
          <div className="absolute rounded-2xl font-bold bg-white md:top-130 py-3 md:flex hidden md:gap-30 px-7 text-black justify-center items-center">
            <div className="flex items-center gap-10 font-bold">
              <LocationEdit size={58}/>
              <div className="w-full">
                <h1 className="text-sm">Location</h1>
                <hr className="text-black mt-2 mb-2 font-black"/>
                <p className="text-xs">Choose Location</p>
              </div>
              <button onClick={() => setOpenArrow(!openArrow)}>
                {openArrow ? <ArrowBigUp /> : <ArrowBigDown />}
              </button>
            </div>
            <div className="flex items-center gap-10">
              <HomeIcon size={35}/>
              <div>
                <h1 className="text-xs w-full">Property Type</h1>
                <hr className="text-black mt-2 mb-2 font-black"/>
                <p className="text-xs">Any</p>
              </div>
              <button onClick={() => setOpenArrow2(!openArrow2)}>
                {openArrow2 ? <ArrowBigUp /> : <ArrowBigDown />}
              </button>
            </div>
            <div className="flex items-center gap-10">
              <Tag size={35}/>
              <div>
                <h1 className="text-xs">Price Range</h1>
                <hr className="text-black mt-2 mb-2 font-black"/>
                <p className="text-xs">Any</p>
              </div>
               <button onClick={() => setOpenArrow3(!openArrow3)}>
                {openArrow3 ? <ArrowBigUp/> : <ArrowBigDown/>}
              </button>
            </div>
            <div>
              <button className="">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          FEATURES CAROUSEL SECTION
          ========================================== */}
      <div className="w-full bg-neutral-950 py-20 border-t border-white/5">
        {/* INTRODUCTION CONTENT HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 sm:mb-20 px-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Car rental on demand
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            With Bolt Drive car-sharing, you pay for the time and distance you
            drive. Nothing more.
          </p>
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <p className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-wider uppercase">
              See all available services in the app
            </p>
          </div>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="w-full max-w-6xl mx-auto px-4 relative">
          {/* CAROUSEL VIEWPORT CONTAINER - NO MOBILE OVERFLOW HIDE */}
          <div className="overflow-hidden md:overflow-visible w-full">
            <div
              className="flex transition-transform duration-500 ease-out md:grid md:grid-cols-3 md:gap-6 md:transform-none"
              style={{
                // Dynamically transform tracking ONLY on mobile viewframes
                transform:
                  window.innerWidth < 768
                    ? `translateX(-${activeIndex * 100}%)`
                    : "none",
              }}
            >
              {container.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.02] border border-white/10 rounded-3xl p-5 backdrop-blur-md hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 w-full shrink-0 md:w-auto"
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

          {/* CAROUSEL CONTROLS (STAYS COMPLETELY HIDDEN ON DESKTOP VIEWS) */}
          <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition text-white"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>

            {/* PAGINATION PROGRESS DOTS */}
            <div className="flex gap-2">
              {container.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-6 bg-green-500"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition text-white"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
