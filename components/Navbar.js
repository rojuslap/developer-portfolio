import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import toggleTheme from "../pages/_app";

function Navbar(props) {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
      <div className="py-10 flex justify-between">
        <h1></h1>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <p className="cursor-pointer text-xl mr-5 dark:text-white">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="cursor-pointer text-xl mr-5 dark:text-white">
                Projects
              </p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="cursor-pointer text-xl mr-5 dark:text-white">
                About
              </p>
            </Link>
          </li>
          <li>
            <AiFillFire
              className="text-2xl cursor-pointer dark:text-white mr-20 fade-in"
              onClick={props.doIt}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
