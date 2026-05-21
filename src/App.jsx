import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Voicers from "./components/Voicers";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg-light text-dark transition-colors duration-300 selection:bg-primary/20 selection:text-primary dark:bg-bg-dark dark:text-light">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="overflow-x-hidden">
        <Hero />
        <Voicers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
