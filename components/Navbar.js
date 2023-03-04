import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import toggleTheme from "../pages/_app";

function Navbar(props) {
  return (
    <div>
      <div className="py-10 mb-12 flex justify-between bg-slate-300 dark:bg-gray-900">
        <h1></h1>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <p className="cursor-pointer text-xl mr-5">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="cursor-pointer text-xl mr-5">Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="cursor-pointer text-xl mr-16">About</p>
            </Link>
          </li>
          <li>
            <AiFillFire
              className="text-2xl cursor-pointer"
              onClick={props.doIt}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
