import React from "react";
import Image from "next/image";
import portrait from "../public/portrait.jpg";

function about() {
  return (
    <main className="dark:bg-neutral-900 bg-neutral-50">
      <div className="fade-in text-center p-3 dark:text-white text-neutral-900 overflow-auto">
        <h1 className="xl:text-5xl font-semibold text-4xl mb-8">About</h1>
        <div className="">
          <div className="xl:text-left xl:ml-96 mx-auto xl:block xl:float-left">
            <div className="relative rounded-full w-40 h-40 xl:mt-8 xl:h-48 xl:w-48 mb-3 mx-auto">
              <Image src={portrait} layout="fill" className="rounded-full" />
            </div>
            <div className="xl:ml-5">
              <h1 className="text-3xl">Rojus Lape</h1>
              <p className="font-light mb-6 dark:text-neutral-400">
                Software Developer
              </p>
            </div>
          </div>
          <div className="dark:text-neutral-400 xl:overflow-hidden text-left mt-10 sm:px-16  md:px-20 xl:px-16 mx-12 xl:-mx-10">
            <p className="xl:w-8/12 flex">
              A Computer Science student studying at the University of Freiburg
              in Germany. Committed to learning about new technologies and
              growing as a member of a team. lorem
            </p>
            <p className="mt-8 xl:w-8/12 xl:flex">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis molestias obcaecati eius saepe soluta, architecto eos
              odit amet quibusdam esse totam animi itaque culpa eligendi harum
              inventore. Aperiam, reprehenderit sint!
            </p>
            <p className="mt-8 xl:w-8/12 xl:flex">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              porro quos repudiandae explicabo, laborum facere odio nam
              architecto consequuntur corporis neque praesentium dolorum.
            </p>
            <div className="mt-8 flex justify-center xl:justify-start">
              <a className="bg-neutral-900 text-white dark:bg-neutral-50 dark:text-black px-4 py-2 rounded-md">
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default about;
