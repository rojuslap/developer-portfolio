import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState("dark");
  const toggleTheme = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode}>
        <div className="h-screen dark:bg-neutral-900 bg-gray-50 overflow-y-scroll">
          <Navbar doIt={toggleTheme} />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
