import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

function Trail() {
  const { x, y } = useMousePosition();
  return (
    <div className="">
      <div
        style={{ left: `${x}px`, top: `${y}px`, duration: 5000 }}
        className={`pointer-events-none ${styles.rotate} rounded-full w-[15vw]  aspect-square absolute z-10 left-1/2 top-1/2 bg-gradient-to-r from-indigo-500 dark:to-neutral-300 `}
      ></div>
      <div className="h-full w-full absolute backdrop-blur-3xl z-20"></div>
    </div>
  );
}

export default Trail;
