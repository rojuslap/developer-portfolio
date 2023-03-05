import React from "react";
import Image from "next/image";
import portrait from "../public/portrait.jpg";

function about() {
  return (
    <main>
      <div className="fade-in text-center p-3 dark:text-white text-neutral-900">
        <h1 className="md:text-5xl font-semibold text-4xl">About</h1>
        <div className="relative rounded-full w-40 h-40 mt-8 mx-auto md:h-48 md:w-48 mb-3">
          <Image src={portrait} layout="fill" className="rounded-full" />
        </div>
        <h1 className="text-3xl">Rojus Lape</h1>
        <p className="font-light mb-6 dark:text-neutral-400">
          Software Developer
        </p>
        <p className="md:w-8/12 mx-auto">
          A Computer Science student studying at the University of Freiburg in
          Germany. Committed to learning about new technologies and growing as a
          member of a team.
        </p>
        <p className="mt-8">Some of the technologies I use include...</p>
      </div>
    </main>
  );
}

export default about;
