import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState("light");
  const toggleTheme = () => {
    setDarkMode((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode}>
        <Navbar doIt={toggleTheme} />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  );
}
