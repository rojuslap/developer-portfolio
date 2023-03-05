import React from "react";
import Image from "next/image";
import portrait from "../public/portrait.jpg";

function about() {
  return (
    <div className="fade-in text-center p-3 dark:text-white text-neutral-900">
      <h1 className="text-5xl font-semibold px-80">About</h1>
      <div className="relative rounded-full w-20 h-20 mt-8 mx-auto md:h-48 md:w-48 mb-3">
        <Image src={portrait} layout="fill" className="rounded-full" />
      </div>
      <h1 className="text-3xl">Rojus Lape</h1>
      <p className="font-light mb-6 dark:text-neutral-400">
        Software Developer
      </p>
      <p className="px-96">
        A Computer Science student studying in the University of Freiburg in
        Germany. Committed to learning about new technologies and applying
        ideas.
      </p>
      <p className="mt-8">something something</p>
    </div>
  );
}

export default about;
