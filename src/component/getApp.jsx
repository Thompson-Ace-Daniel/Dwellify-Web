import { useState } from "react";
import { 
  PlayCircle, 
  Smartphone, 
  CheckCircle2, 
  QrCode, 
  ChevronRight,
  Apple,
  Play,
  ShieldAlert,
  Zap,
  Layers,
  Sparkles
} from "lucide-react";
import heroBg from "../assets/bg-image10.jpg"; 
import screenMockup from "../assets/bg-image.jpg"; 

export default function GetApp() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const benefits = [
    {
      title: "Real-Time Push Triggers",
      desc: "Never lose out on a premium layout again. Our low-latency push notification ecosystem pings your device the exact millisecond an apartment meeting your structural parameters, budget criteria, and geographical limits goes live on the verified index marketplace."
    },
    {
      title: "Secure Agent Messenger Encrypt",
      desc: "Skip slow email chains and dangerous secondary chat networks. Talk directly with certified real estate agents via our secure, end-to-end encrypted messaging portal designed to log transaction parameters, terms, and agreements transparently."
    },
    {
      title: "Immersive 3D Spatial Walkthroughs",
      desc: "Tour your future home without spending a single dime on travel. The mobile application leverages native hardware acceleration to deliver ultra-smooth 3D rendering and real-time point-of-view live video casting direct from your localized property expert."
    },
    {
      title: "Encrypted Document & Ledger Vault",
      desc: "Submit your credit verifications, employment history frameworks, and background checking assets safely. Dwellify protects your private records using multi-tiered encryption layers, meaning your data stays hidden until you decide to authorize a lease."
    }
  ];

  const handleLinkSend = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setEmailInput("");
    }
  };

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* ==========================================
          HERO & DOWNLOAD MAIN SECTION
          ========================================== */}
      <div 
        className="relative w-full pt-32 pb-24 px-6 sm:px-12 md:px-24 bg-cover bg-center border-b border-white/5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${heroBg})`,
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Call to Action Columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-blue-400 border border-blue-600/30 bg-blue-600/5 w-fit px-4 rounded-full py-1.5 font-mono text-xs tracking-widest uppercase font-bold">
                Dwellify Mobile Experience
              </h3>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
                Your Next Home <br /> Right In Your <span className="text-blue-600">Pocket</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Experience the full power of Dwellify on the move. Filter authenticated premium listings, reach trusted agents instantly, and track application flows safely from anywhere in the world. We have customized our native applications to bring elite real estate management metrics straight to your handheld device.
              </p>
            </div>

            {/* APP STORE STYLED ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* App Store Button */}
              <a 
                href="#download-apple" 
                className="flex items-center gap-3 bg-neutral-900 border border-white/10 hover:border-blue-600/50 hover:bg-neutral-800 text-white rounded-xl px-5 py-3 transition cursor-pointer group min-w-[180px]"
              >
                <Apple className="text-white group-hover:text-blue-500 transition" size={28} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Download on the</p>
                  <p className="text-sm font-bold tracking-tight">App Store</p>
                </div>
              </a>

              {/* Play Store Button */}
              <a 
                href="playstore.com/Dwellify" 
                className="flex items-center gap-3 bg-neutral-900 border border-white/10 hover:border-blue-600/50 hover:bg-neutral-800 text-white rounded-xl px-5 py-3 transition cursor-pointer group min-w-[180px]"
              >
                <Play className="text-white fill-white group-hover:text-blue-500 group-hover:fill-blue-500 transition" size={24} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">Get it on</p>
                  <p className="text-sm font-bold tracking-tight">Google Play</p>
                </div>
              </a>
            </div>

            <hr className="border-white/5 my-4" />

            {/* Option 2: Text / Email a link */}
            <div className="space-y-3 max-w-md">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">Get an instant download link</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Can't access the storefronts right now? Submit your active email details down below and our deployment systems will forward a verified, secure installation route directly into your inbox.
              </p>
              {isSubmitted ? (
                <div className="p-3 bg-blue-600/10 border border-blue-600/20 text-blue-400 rounded-lg text-xs font-light">
                  ✓ Link sent! Check your inbox to download Dwellify instantly.
                </div>
              ) : (
                <form onSubmit={handleLinkSend} className="flex gap-2">
                  <input 
                    type="email" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address" 
                    className="bg-neutral-900/80 backdrop-blur-sm border border-white/10 px-3 py-2.5 rounded-lg text-xs w-full text-white focus:outline-none focus:border-blue-600 transition"
                  />
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-5 py-2.5 rounded-lg transition font-medium cursor-pointer shrink-0">
                    Send Link
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column Interactive App Frame Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            
            {/* Phone Frame Shell Wrapper */}
            <div className="w-70 h-140 bg-neutral-900 rounded-[44px] p-3.5 border-4 border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Speaker Speaker Notched Sensor */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-neutral-800 rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1" />
              </div>

              {/* Dynamic UI Content Mirroring inside app */}
              <div className="w-full h-full rounded-4xl bg-black overflow-hidden relative flex flex-col justify-between p-4 pt-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono">
                    <span>9:41 AM</span>
                    <Smartphone size={10} />
                  </div>
                  <h4 className="text-xs font-black text-white">Dwellify Premium</h4>
                  {/* Inside card mockup image view */}
                  <div className="w-full aspect-4/3 rounded-xl overflow-hidden border border-white/5 relative bg-neutral-900">
                    <img src={screenMockup} alt="In-app screen display view" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 text-[8px] bg-blue-600 px-2 py-0.5 rounded-md font-bold font-mono">VERIFIED</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-white/10 rounded-full" />
                    <div className="h-1.5 w-32 bg-white/5 rounded-full" />
                  </div>
                </div>

                <div className="space-y-2 pb-2">
                  <div className="p-2 bg-neutral-900/90 rounded-xl border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 text-[10px] font-bold">A</div>
                      <div>
                        <p className="text-[8px] font-bold">Agent connected live</p>
                        <p className="text-[6px] text-neutral-500">Active in your zone</p>
                      </div>
                    </div>
                    <ChevronRight size={10} className="text-neutral-500" />
                  </div>
                  <button className="w-full py-2 bg-blue-600 rounded-xl text-[9px] font-bold text-white tracking-wide uppercase">
                    Secure This Apartment
                  </button>
                </div>
              </div>
            </div>

            {/* QR Floating Overlay (Desktop View Only) */}
            <div className="absolute bottom-6 -right-4 bg-neutral-950 border border-white/10 p-3 rounded-xl hidden xl:flex items-center gap-3 shadow-2xl max-w-[180px]">
              <div className="bg-white p-1 rounded-lg shrink-0">
                <QrCode size={48} className="text-black" />
              </div>
              <p className="text-[10px] text-neutral-400 font-light leading-snug">
                Scan via camera viewport to execute seamless phone loading.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ==========================================
          BENEFITS & PROOFS DETAIL STRIP
          ========================================== */}
      <div className="w-full bg-neutral-950 py-20 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Designed For High-Speed Decisions
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Why utilize our mobile native framework? Traditional browsers load complex caching variations that delay real-time pricing indices. We built dedicated micro-modules into our customized iOS and Android channels to bypass traditional web loading friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-2 p-6 bg-white/1 border border-white/5 rounded-2xl hover:border-blue-600/20 transition duration-300">
                <div className="flex gap-2 items-center text-blue-500">
                  <CheckCircle2 size={16} />
                  <h3 className="text-sm font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed pl-6">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* EXTRA NATIVE HARDWARE COPY SECTION */}
          <div className="mt-20 border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600/5 border border-blue-600/20 flex items-center justify-center text-blue-500">
                <Layers size={18} />
              </div>
              <h4 className="text-sm font-bold text-white pt-2">Offline Layout Cache</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Review saved buildings, historical location analytics, structural floor maps, and chat logs even when transitioning through underground subways or encountering cellular dead-zones.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600/5 border border-blue-600/20 flex items-center justify-center text-blue-500">
                <ShieldAlert size={18} />
              </div>
              <h4 className="text-sm font-bold text-white pt-2">Anti-Scam Anti-Spoof Protection</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Device device authentication certificates ensure that third-party entities cannot hijack communication handles or fabricate user credentials within the secure matching pipeline.
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600/5 border border-blue-600/20 flex items-center justify-center text-blue-500">
                <Sparkles size={18} />
              </div>
              <h4 className="text-sm font-bold text-white pt-2">AI Optimization Matching</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Our lightweight onsite sorting algorithm tracks behavioral interface interactions to recommend hidden regional properties aligned perfectly with your lifestyle trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          MINIMAL SYSTEM REQUIREMENTS FOOTER
          ========================================== */}
      <footer className="w-full bg-black border-t border-white/10 text-neutral-500 font-mono text-[11px] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Dwellify Inc. Mobile Architecture Distribution Desk.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span>iOS build 15.4+ (Optimized for Apple Silicon & FaceID layers)</span>
            <span className="hidden md:inline text-neutral-800">|</span>
            <span>Android build 10.0+ (Full architecture cross-compilation target)</span>
          </div>
        </div>
      </footer>

    </div>
  );
}