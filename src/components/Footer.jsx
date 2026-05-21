import { Mic, ArrowUp } from "lucide-react";

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = [
    { icon: <FacebookIcon />, name: "Facebook" },
    { icon: <TwitterIcon />, name: "Twitter" },
    { icon: <InstagramIcon />, name: "Instagram" },
    { icon: <LinkedinIcon />, name: "Linkedin" },
  ];

  return (
    <footer className="bg-dark pt-20 pb-10 text-white dark:bg-slate-950">
      <div className="container-custom">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] lg:gap-14">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-dark">
                <Mic size={23} />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                Voice<span className="text-primary">Meet</span>
              </span>
            </div>
            <p className="max-w-sm text-slate-400">
              Empowering global audio journalists through verified networks and premium storytelling.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Explore</h4>
            <ul className="space-y-3">
              {["Home", "Voicers", "About Us", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="inline-block text-slate-400 transition-all hover:translate-x-1 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms", "Cookies", "License"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">Newsletter</h4>
              <p className="text-slate-400">Join 10k+ audio professionals.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
              <button className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-dark transition-all hover:-translate-y-0.5 hover:bg-blue-100">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} VoiceMeet. Crafted for premium audio media.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-primary hover:bg-primary hover:text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
