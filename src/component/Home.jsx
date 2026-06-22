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
  User2,
  MessageSquare,
  ShieldCheck,
  Zap,
  Building,
  Key
} from "lucide-react";
import bg from "../assets/bg-image10.jpg";
import img from "../assets/bg-image.jpg";
import img2 from "../assets/bg-image2.jpg";
import img3 from "../assets/bg-image3.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openArrow, setOpenArrow] = useState(false);
  const [openArrow2, setOpenArrow2] = useState(false);
  const [openArrow3, setOpenArrow3] = useState(false);

  // Expanded container copy with explicit detail definitions for rich visual weight
  const container = [
    {
      tittle: "Connect with trusted local agents",
      desc: "Skip the endless loops of unreturned calls and unverified property brokers. Browse, filter, and instantly match with certified, highly-rated neighborhood specialists operating directly inside your target zip codes. Chat securely in real-time, ask detailed structural questions, and get immediate digital support finding your perfect arrangement.",
      img: img3,
      textColor: "text-blue-600",
      borderColor: "group-hover:border-blue-600/60",
      icon: <User2 size={22} />
    },
    {
      tittle: "Discover physical-verified listings",
      desc: "Every single apartment profile listed on Dwellify undergoes a comprehensive, multi-point onsite inspection process before publishing. Explore highly realistic media galleries alongside updated structural pricing metrics, utility structural layouts, accurate community policy details, and local safety breakdowns.",
      img: img,
      textColor: "text-amber-500",
      borderColor: "group-hover:border-amber-500/60",
      icon: <HomeIcon size={22} />
    },
    {
      tittle: "Fast tracking & document integration",
      desc: "Our localized communications hub eliminates traditional friction panels. Securely coordinate interactive digital walkthrough viewings, iron out custom move-in clauses directly with authorized agency managers, and sign essential rental frameworks via fully integrated digital escrow services with ultimate speed.",
      img: img2,
      textColor: "text-blue-600",
      borderColor: "group-hover:border-blue-600/60",
      icon: <MessageSquare size={22} />
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? container.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === container.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white">
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <div
        className="bgImage w-full min-h-150 md:min-h-180 bg-cover bg-center flex items-center pt-24 pb-36 md:pb-48 px-6 sm:px-12 md:px-24 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.6)), url(${bg})`,
        }}
      >
        <div className="max-w-4xl relative z-10 space-y-6">
          <h3 className="text-blue-400 border border-blue-600/30 bg-blue-600/5 w-fit px-4 rounded-full py-1.5 font-mono text-xs tracking-widest uppercase font-bold">
            Find, Connect, Move in.
          </h3>
          <h1 className="text-4xl capitalize sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
            Find Your <br className="sm:inline" /> Perfect Apartment{" "}
            <br className="sm:inline" /> With{" "}
            <span className="text-blue-600">Dwellify</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-xl">
            Dwellify redefines the residential renting paradigm by matching verified structural properties with expert regional handlers. Avoid fraudulent brokers, navigate realistic historical pricing structures, and move into premium layouts tailored to your lifestyle.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white font-bold tracking-wide text-sm capitalize cursor-pointer hover:bg-blue-700 active:scale-[0.98] transition duration-200 px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20">
              Find an apartment
            </button>
            <button className="flex gap-3 items-center bg-white hover:bg-neutral-100 font-medium rounded-xl text-black px-6 transition cursor-pointer">
              <PlayCircle size={20} /> How it works
            </button>
          </div>

          {/* FLOATING FILTER ROW */}
          <div className="absolute rounded-2xl font-bold bg-white top-[112%] left-0 grid-cols-4 gap-6 items-center p-4 text-black shadow-2xl z-20 min-w-212.5 max-w-5xl hidden lg:grid">
            <div className="flex items-center justify-between border-r border-neutral-200 pr-4">
              <div className="flex items-center gap-3">
                <LocationEdit size={28} className="text-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Target Destination</h4>
                  <p className="text-[11px] text-neutral-500 font-normal mt-0.5">Select preferred state or city</p>
                </div>
              </div>
              <button onClick={() => setOpenArrow(!openArrow)} className="text-neutral-400 hover:text-neutral-900 cursor-pointer transition">
                {openArrow ? <ArrowBigUp size={16} /> : <ArrowBigDown size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between border-r border-neutral-200 pr-4">
              <div className="flex items-center gap-3">
                <HomeIcon size={24} className="text-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Property Configuration</h4>
                  <p className="text-[11px] text-neutral-500 font-normal mt-0.5">Hotel, Shortlet, Apartment</p>
                </div>
              </div>
              <button onClick={() => setOpenArrow2(!openArrow2)} className="text-neutral-400 hover:text-neutral-900 cursor-pointer transition">
                {openArrow2 ? <ArrowBigUp size={16} /> : <ArrowBigDown size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between border-r border-neutral-200 pr-4">
              <div className="flex items-center gap-3">
                <Tag size={24} className="text-neutral-700" />
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">Monthly Allocation</h4>
                  <p className="text-[11px] text-neutral-500 font-normal mt-0.5">Set structural price metrics</p>
                </div>
              </div>
              <button onClick={() => setOpenArrow3(!openArrow3)} className="text-neutral-400 hover:text-neutral-900 cursor-pointer transition">
                {openArrow3 ? <ArrowBigUp size={16} /> : <ArrowBigDown size={16} />}
              </button>
            </div>

            <div className="pl-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 w-full text-xs font-bold uppercase tracking-wider transition duration-200 cursor-pointer shadow-md shadow-blue-600/10">
                Search Listings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          METRICS & ECOSYSTEM BREAKDOWN SECTION
          ========================================== */}
      <div className="w-full bg-neutral-950 pt-28 pb-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2 p-6 bg-white/1 border border-white/5 rounded-2xl">
            <Zap size={24} className="text-blue-600" />
            <h3 className="text-base font-bold text-white pt-2">Real-Time Application Tracking</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Monitor your rental approval pipeline step-by-step. Receive direct systemic notifications when your documents undergo structural underwriting evaluation so you are never left guessing.
            </p>
          </div>
          <div className="space-y-2 p-6 bg-white/1 border border-white/5 rounded-2xl">
            <Building size={24} className="text-amber-500" />
            <h3 className="text-base font-bold text-white pt-2">Zero-Spam Indexing Policies</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              We remove expired or duplicate listing frameworks automatically every 24 hours. Renters gain access strictly to currently active real estate inventory across premium metropolitan communities.
            </p>
          </div>
          <div className="space-y-2 p-6 bg-white/1 border border-white/5 rounded-2xl">
            <Key size={24} className="text-blue-600" />
            <h3 className="text-base font-bold text-white pt-2">Integrated Virtual Walkthroughs</h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Tour multiple complexes from your current space. Request real-time point-of-view streaming sessions from your designated expert to examine structural parameters closely.
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          FEATURES CAROUSEL SECTION
          ========================================== */}
      <div className="w-full bg-neutral-950 pt-16 pb-24">
        <div className="text-center relative space-y-4 max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight capitalize pb-2">
            Why choose <span className="text-blue-600">Dwellify</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-2" />
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed pt-2">
            Dwellify simplifies complex multi-tier property searches by uniting authentic listings, verified professional field representatives, and lightning-fast digital communication tools under a single comprehensive workflow interface.
          </p>
        </div>

        {/* CAROUSEL TRACK WRAPPER */}
        <div className="w-full max-w-6xl mx-auto px-6 relative">
          <div className="overflow-hidden lg:overflow-visible w-full">
            <div
              className="flex transition-transform duration-500 ease-out lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:transform-none"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {container.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white/1 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-blue-600/30 transition-all duration-300 flex flex-col justify-between space-y-6 w-full shrink-0 lg:w-auto ${
                    index === 2 ? "lg:col-span-2 xl:col-span-1 lg:max-w-[50%] xl:max-w-none mx-auto lg:w-full" : ""
                  }`}
                >
                  <div className="space-y-5">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-lg ${item.textColor}`}>
                      {item.icon}
                    </div>

                    {/* TEXT INFO CONTAINER */}
                    <div className="space-y-3">
                      <div className={`flex items-center gap-2 border-b border-white/10 pb-3 transition-colors duration-300 ${item.borderColor}`}>
                        <span className="text-[10px] font-mono bg-blue-600/10 border border-blue-600/20 text-blue-500 px-2 py-0.5 rounded-md font-bold">
                          0{index + 1}
                        </span>
                        <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-500 transition-colors duration-200">
                          {item.tittle}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* MEDIA IMAGE CONTAINER CARD */}
                  <div className="relative overflow-hidden aspect-4/3 rounded-2xl border border-white/5 bg-neutral-900">
                    <img
                      src={item.img}
                      alt={item.tittle}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DISPLAY CONTROLS BELOW LAPTOP VIEWPORTS */}
          <div className="flex justify-center items-center gap-4 mt-10 lg:hidden">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition text-white cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {container.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-blue-600" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition text-white cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* TRUST BADGE CALLOUT */}
          <div className="md:flex border py-4 border-blue-600/10 justify-around mt-20 rounded-xl bg-blue-600/5 items-center hidden px-6">
            <ShieldCheck className="text-blue-600" size={54} />
            <div className="max-w-xl px-4">
              <h1 className="font-black text-lg">A safer way to find your next home</h1>
              <p className="text-sm text-gray-400 font-light mt-1">
                At Dwellify, we enforce strict background evaluation metrics across all registered agencies. This protective model eliminates ghost listings, hidden transaction surcharges, and overlapping lease structures, ensuring a transparent experience from start to finish.
              </p>
            </div>
            <button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-semibold transition cursor-pointer shrink-0">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          FOOTER SECTION
          ========================================== */}
      <footer className="w-full bg-black border-t border-white/10 text-neutral-400 text-sm">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Identity */}
          <div className="space-y-4 md:col-span-1">
            <h2 className="text-2xl font-black text-white tracking-tight">
              Dwellify<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Connecting you safely to verified premium spaces and neighborhood expertise handlers across the nation's fastest growing urban rental markets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider">Marketplace</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#" className="hover:text-blue-500 transition">Find Apartments</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Verified Agents</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Corporate Housing</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs font-light">
              <li><Link to={"/about"} className="hover:text-blue-500 transition">About Our Vision</Link></li>
              <li><Link to={""} className="hover:text-blue-500 transition">Safety Guidelines</Link></li>
              <li><Link to={"/support"} className="hover:text-blue-500 transition">Contact Support</Link></li>
              <li><Link to={"/carrers"} className="hover:text-blue-500 transition">Real Estate Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-600 font-mono">
          <p>© {new Date().getFullYear()} Dwellify Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to={"/"}  className="hover:text-neutral-400 transition">Privacy Policy</Link>
            <Link to={"/"}  className="hover:text-neutral-400 transition">Terms of Service</Link>
            <Link to={"/"} className="hover:text-neutral-400 transition">Cookie Preferences</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}