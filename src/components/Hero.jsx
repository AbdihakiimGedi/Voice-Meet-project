import { useState, useEffect } from "react";
import j1 from "../assets/images/E59rZRtXEAAwUhE.jpg";
import j2 from "../assets/images/WhatsApp Image 2026-02-07 at 01.46.59 (4).jpeg";
import j3 from "../assets/images/abdifitah.jpeg";
import j4 from "../assets/images/images (1).jpeg";
import j5 from "../assets/images/images.jpeg";
import j6 from "../assets/images/khalid.jpeg";
import j7 from "../assets/images/mqdefault.jpg";
import { ShieldCheck } from "lucide-react";

const allImages = [j1, j2, j3, j4, j5, j6, j7];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-slate-200 dark:bg-white/10" />

      <div className="container-custom grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative order-2 flex justify-center lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_90px_-55px_rgba(15,23,42,0.65)] dark:border-white/10 dark:bg-slate-900">
            {allImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
              >
                <img
                  src={img}
                  alt={`Journalist ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/10" />
              </div>
            ))}
            
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/88 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
              <div className="flex items-center gap-3 text-sm font-medium text-dark dark:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-blue-400/10 dark:text-blue-200">
                  <ShieldCheck size={20} />
                </span>
                <span>Verified media professionals, curated for quality audio storytelling.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 space-y-8 lg:order-2">
          <div className="eyebrow">Leading Audio News Network</div>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-dark sm:text-6xl lg:text-[5.4rem] dark:text-white leading-[0.98] text-balance">
            Meet Pro <br />
            <span className="text-primary">Voice Artists</span>
          </h1>
          
          <p className="max-w-xl text-lg text-slate-600 sm:text-xl dark:text-slate-300">
            Connect with verified media professionals and explore the future of investigative audio storytelling.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-white/10 sm:gap-8">
            {[
              { label: "Verified Pro", val: "500+" },
              { label: "Stories", val: "15k" },
              { label: "Countries", val: "42+" },
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-2xl font-semibold text-dark sm:text-3xl dark:text-white">{stat.val}</h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
