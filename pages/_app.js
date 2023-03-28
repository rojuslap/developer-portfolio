import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { createContext, useState, useEffect } from "react";
import Trail from "@/components/Trail";

export const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState("dark");
  const toggleTheme = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const width = window.innerWidth >= 600;
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
    if (width) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (width) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  useEffect(() => {
    const width = window.innerWidth >= 600;
    if (width) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (width) {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
      }
    };
  }, []);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className="">
        <div className={darkMode}>
          <Trail />
          <div className="h-screen w-screen fixed backdrop-blur-3xl bg-gray-50 dark:bg-neutral-900 overflow-hidden"></div>
          <div className="h-[100vh] md:overflow-hidden z-50 relative">
            <div className="min-h-screen md:backdrop-blur-[100px] z-20">
              <Navbar doIt={toggleTheme} change={darkMode} />
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
