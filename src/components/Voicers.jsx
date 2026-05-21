import { useState } from "react";
import img1 from "../assets/images/WhatsApp Image 2026-02-07 at 01.46.59 (4).jpeg";
import img2 from "../assets/images/images (1).jpeg";
import img3 from "../assets/images/images.jpeg";
import img4 from "../assets/images/mqdefault.jpg";
import img5 from "../assets/images/abdifitah.jpeg";
import img6 from "../assets/images/khalid.jpeg";
import { User, Headphones, Globe, Star } from "lucide-react";

const initialVoicers = [
  { id: 1, name: "Elena Rossi", title: "Voice Anchor", image: img1, location: "Milan, Italy", rating: "4.9" },
  { id: 2, name: "Marcus Thorne", title: "Investigative Reporter", image: img2, location: "London, UK", rating: "4.8" },
  { id: 3, name: "Aisha Benali", title: "Radio Journalist", image: img3, location: "Casablanca, Morocco", rating: "5.0" },
  { id: 4, name: "David Chen", title: "Podcast Host", image: img4, location: "Vancouver, Canada", rating: "4.7" },
];

const moreVoicers = [
  { id: 5, name: "Abdifitah Ahmed", title: "Field Reporter", image: img5, location: "Mogadishu, Somalia", rating: "4.9" },
  { id: 6, name: "Khalid Mansour", title: "Political Analyst", image: img6, location: "Cairo, Egypt", rating: "4.9" },
];

const Voicers = () => {
  const [showAll, setShowAll] = useState(false);
  const currentVoicers = showAll ? [...initialVoicers, ...moreVoicers] : initialVoicers;

  return (
    <section id="voicers" className="section-shell bg-white dark:bg-bg-dark">
      <div className="container-custom">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="space-y-5">
            <div className="eyebrow">Global Talents</div>
            <h2 className="section-title">
              Featured <span className="text-primary">Voicers</span>
            </h2>
            <p className="section-copy">
              Our journalists are vetted for quality, authenticity, and technical excellence in audio production.
            </p>
          </div>
          <button className="hidden lg:inline-flex btn-outline">Browse Category</button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentVoicers.map((voicer) => (
            <div key={voicer.id} className="group card-premium overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={voicer.image}
                  alt={voicer.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-dark backdrop-blur-md dark:bg-slate-950/75 dark:text-white">
                  <Star size={13} fill="currentColor" className="text-amber-500" /> {voicer.rating}
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold leading-tight text-dark dark:text-white">
                    {voicer.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-primary dark:text-blue-300">
                    <User size={15} /> {voicer.title}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-slate-200 py-4 dark:border-white/10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">Location</p>
                    <p className="flex items-center gap-1 text-xs font-medium text-dark dark:text-slate-200">
                      <Globe size={12} /> {voicer.location.split(",")[0]}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">Episodes</p>
                    <p className="flex items-center gap-1 text-xs font-medium text-dark dark:text-slate-200">
                      <Headphones size={12} /> 120+
                    </p>
                  </div>
                </div>

                <button className="w-full rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-dark transition-all duration-300 hover:bg-dark hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-dark">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => setShowAll(!showAll)} className="btn-outline px-8">
            {showAll ? "Show Less" : "Explore All Voicers"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Voicers;
