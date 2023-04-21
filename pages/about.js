import React from "react";
import Image from "next/image";
import portrait from "../public/portrait.jpg";

function about() {
  return (
    <main className="min-h-screen -webkit-overflow-scrolling-touch">
      <div className="fade-in text-center p-3 dark:text-white text-neutral-900">
        <h1 className="xl:text-5xl font-semibold text-4xl mb-8">About</h1>
        <div className="md:px-20">
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
          <div className="dark:text-neutral-300 xl:overflow-hidden text-left mt-10 sm:px-16  md:px-20 mx-4 xl:-mx-10">
            <p className="xl:w-8/12 flex">
              A Computer Science student studying at the University of Freiburg
              in Germany. Committed to learning about new technologies and
              growing as a member of a team.
            </p>
            <p className="mt-8 xl:w-8/12 xl:flex">
              I am currently working as a Software Engineer Intern at Holopin.
              Some of the technologies I'm tasked with using include Node.js,
              Next.js, Prisma, Vercel, GitHub, Git, React.js, TypeScript,
              Postman. I'm also proficient in Python and Flask.
            </p>
            <p className="mt-8 xl:w-8/12 xl:flex">
              Outside of programming, I'm fluent in 4 languages: English,
              Lithuanian, Spanish, and German. Outside of languages, I enjoy
              playing the guitar or hitting the nearest gym! :)
            </p>
            <div className="mt-8 flex justify-center xl:justify-start">
              <a
                href="mailto:rojuslapinskas@gmail.com"
                className="bg-neutral-900 text-white dark:bg-neutral-50 dark:text-black px-4 py-2 rounded-md"
              >
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
