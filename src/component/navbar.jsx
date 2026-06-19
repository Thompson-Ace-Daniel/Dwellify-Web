import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // TRACK SCROLL VELOCITY / DISTANCE
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-16 py-4 flex justify-between items-center border-b
          ${
            isScrolled
              ? "bg-white text-black shadow-md border-neutral-100"
              : "bg-transparent text-white border-transparent"
          }`}
      >
        {/* BRAND IDENTITY LOGO */}
        <Link
          to={"/"}
          className="font-black text-2xl tracking-tight uppercase transition-colors"
        >
          Dwellify
        </Link>

        {/* CONTROLS & INTERACTION ENGINE */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* LANGUAGE PICKER SELECTION */}
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition py-2 px-3 rounded-full">
            <Globe size={16} />
            <span className="font-semibold text-xs tracking-wider">EN</span>
          </div>

          {/* DESKTOP DESCRIPTIVE ACTION ROUTES */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-full transition
                ${
                  isScrolled
                    ? "text-neutral-700 hover:bg-neutral-100"
                    : "text-white hover:bg-white/10"
                }`}
            >
              Support
            </Link>
            <Link
              className={`px-6 py-2.5 text-xs uppercase tracking-wider font-black rounded-full transition shadow-sm
                ${
                  isScrolled
                    ? "bg-green-500 text-white hover:bg-green-400"
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
            >
              {isScrolled ? "Get App" : "Register"}
            </Link>
          </div>

          {/* INTERACTIVE MOBILE BURGER TRIGGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer outline-none transition rounded-full hover:bg-current/5"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ==========================================
         MOBILE DRAWER PANEL LAYOUT
         ========================================== */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-70 z-40 bg-neutral-950 text-white p-6 pt-24 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-5">
          <Link
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold tracking-tight text-center uppercase text-neutral-400 hover:text-white transition"
          >
            Support
          </Link>
          <hr className="border-white/5" />
          <Link className="text-lg font-bold tracking-tight text-center uppercase text-neutral-400 hover:text-white transition"
          onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <hr className="border-white/5" />
          <Link
            onClick={() => setIsOpen(false)}
            className="w-full bg-green-500 text-center font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl text-white shadow-lg shadow-green-500/10"
          >
            {isScrolled ? "Register" : "Get app"}
          </Link>
        </div>

        <div className="text-center font-mono text-[9px] tracking-widest text-neutral-700 uppercase select-none">
          NavBar
        </div>
      </div>
    </>
  );
}
