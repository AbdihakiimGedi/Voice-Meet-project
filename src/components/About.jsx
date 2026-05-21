import { useState, useEffect } from "react";
import img1 from "../assets/images/E59rZRtXEAAwUhE.jpg";
import img2 from "../assets/images/abdifitah.jpeg";
import img3 from "../assets/images/khalid.jpeg";
import img4 from "../assets/images/images (1).jpeg";
import { CheckCircle2, Award, Users, Mic2 } from "lucide-react";

const sliderImages = [img1, img2, img3, img4];

const About = () => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section-shell overflow-hidden bg-slate-50 dark:bg-slate-900/55">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="eyebrow">Our Story</div>
              <h2 className="section-title">
                Who We <br />
                <span className="text-primary">Really Are?</span>
              </h2>
              <p className="section-copy">
                VoiceMeet is not just a platform; it's a movement to restore authenticity to media through the power of high-fidelity voice reporting.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: CheckCircle2, title: "Verified Hub", desc: "Every voice is verified by media professionals." },
                { icon: Mic2, title: "Pure Audio", desc: "Studio-quality reporting from the field." },
                { icon: Award, title: "Top Rated", desc: "Consistently ranked #1 for voice journalism." },
                { icon: Users, title: "Community", desc: "A global network of 5k+ organizations." },
              ].map((item, i) => (
                <div key={i} className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 dark:border-white/10 dark:bg-slate-900/80">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-blue-400/10 dark:text-blue-200">
                    <item.icon size={22} />
                  </div>
                  <h4 className="mb-2 text-base font-semibold text-dark dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="btn-premium">Explore Our Mission</button>
          </div>

          <div className="relative">
            <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_35px_90px_-55px_rgba(15,23,42,0.65)] dark:border-white/10 dark:bg-slate-900 sm:h-[600px]">
              {sliderImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === activeImg ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/10" />
                </div>
              ))}
              
              <div className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
                <Award size={28} className="mb-2 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-dark dark:text-white">Award Winning Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
