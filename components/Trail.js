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
  const pointerRef = useRef(null);

  useEffect(() => {
    if (pointerRef.current) {
      const windowHeight = window.innerHeight;
      const bottom = y + pointerRef.current.offsetHeight;
      if (bottom > windowHeight) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      pointerRef.current.animate([{ left: `${x}px`, top: `${y}px` }], {
        duration: 5000,
        easing: "cubic-bezier(.22,.55,.6,.69)",
        fill: "forwards",
      });
    }
  }, [x, y]);

  return (
    <div className="absolute">
      <div
        ref={pointerRef}
        className={`invisible md:visible pointer-events-none ${styles.rotate} rounded-full w-[20vw]  aspect-square absolute z-10 left-1/2 top-1/2 bg-gradient-to-r dark:from-neutral-300 from-neutral-500 dark:to-neutral-400  `}
      ></div>
      <div className=""></div>
    </div>
  );
}

export default Trail;
