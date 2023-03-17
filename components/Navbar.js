import React from "react";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import darkMode from "../pages/_app";

function Navbar(props) {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 relative">
      <div className="py-10 flex md:justify-between justify-center">
        <h1></h1>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <p className="cursor-pointer text-l mr-10 text-neutral-900 dark:text-white">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="cursor-pointer text-l mr-10 text-neutral-900 dark:text-white">
                Projects
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="cursor-pointer text-l mr-10 text-neutral-900 dark:text-white">
                About
              </p>
            </Link>
          </li>
          <li>
            {" "}
            {props.change === "light" ? (
              <MdDarkMode
                className="text-xl cursor-pointer text-neutral-900 dark:text-white md:mr-32 fade-in"
                onClick={props.doIt}
              />
            ) : (
              <MdLightMode
                className="text-xl cursor-pointer text-neutral-900 dark:text-white md:mr-32 fade-in"
                onClick={props.doIt}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
