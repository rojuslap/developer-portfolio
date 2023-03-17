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
        <div className="h-[100vh] dark:bg-neutral-900 bg-gray-50 overflow-auto">
          <Navbar doIt={toggleTheme} change={darkMode} />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
