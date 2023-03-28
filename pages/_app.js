import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { createContext, useState } from "react";
import Trail from "@/components/Trail";

export const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState("dark");
  const toggleTheme = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode}>
        <Trail />
        <div className="h-full w-full absolute backdrop-blur-3xl bg-gray-50 dark:bg-neutral-900"></div>
        <div className="h-[100vh] overflow-auto z-50 relative">
          <div className="">
            <Navbar doIt={toggleTheme} change={darkMode} />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
