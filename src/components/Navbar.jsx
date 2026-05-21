import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Mic, ChevronRight } from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-primary hover:text-primary focus:outline-none focus:ring-4 focus:ring-primary/15 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-300 dark:hover:text-blue-200"
    aria-label="Toggle Theme"
  >
    {darkMode ? <Sun size={19} /> : <Moon size={19} />}
  </button>
);

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Voicers", href: "#voicers" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/90 py-3 shadow-[0_12px_40px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-bg-dark/95"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="group flex items-center gap-3" aria-label="VoiceMeet home">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dark text-white transition-all duration-300 group-hover:bg-primary dark:bg-white dark:text-dark dark:group-hover:bg-blue-100">
            <Mic size={22} />
          </div>
          <span className="text-xl font-semibold tracking-tight text-dark sm:text-2xl dark:text-white">
            Voice<span className="text-primary">Meet</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 dark:border-white/10 dark:bg-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-dark dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-dark transition-all active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-[72px] border-t border-slate-200 bg-white/98 backdrop-blur-xl transition-all duration-300 ease-out md:hidden dark:border-white/10 dark:bg-bg-dark ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-custom flex min-h-[calc(100vh-72px)] flex-col gap-2 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between rounded-2xl px-1 py-4 text-2xl font-semibold text-dark dark:text-white"
            >
              {link.name}
              <ChevronRight className="text-primary transition-transform group-hover:translate-x-1" />
            </a>
          ))}
          <div className="mt-4 border-t border-slate-200 pt-6 dark:border-white/10">
            <button className="w-full btn-premium">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
