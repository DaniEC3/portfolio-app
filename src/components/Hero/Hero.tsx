import Image from "next/image";
import ScrollAnimation from "@/animations/ScrollAnimation";
import clsx from "clsx";
import TypewriterClient from "../Styles/TypewriterClient";
import { AnimatedBackground } from "../Styles/AnimatedBackground";

export default function HeroComponent() {
  return (
    <div className=" relative h-screen flex items-center justify-center ">
      <AnimatedBackground />

      <section className={clsx("flex flex-col xl:flex-row xl:gap-24 justify-center items-center text-center",
        "h-screen xl:pr-12 transition-all duration-500  xl:mt-0 "
      )}>
        <div className="flex flex-col p-4 ">
          <ScrollAnimation>
            <h1 className={clsx("text-gray-950  md:h-full text-4xl sm:text-5xl font-bold mb-4",
              "text-shadow-lg font-sans",
            )}>
              Hello, I am 	&lt;

            </h1>
            <h1 className={clsx("text-gray-950  md:h-full text-4xl sm:text-5xl font-bold mb-4",
              "text-shadow-lg font-sans",
            )}>
              <TypewriterClient word={'Daniel Estrada'} /> /	&gt;
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <p className=" text-gray-950 text-xl sm:text-2xl max-md: m-5 text-shadow-sm max-w-2xl">
              A full-stack developer driven by curiosity, problem-solving, and a genuine passion for writing good code.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={1}>
            <div className="flex flex-col items-center gap-3 my-7">
              <a href="#projects">
                <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:scale-105 hover:cursor-pointer transition text-shadow-sm">
                  See My Work
                </button>
              </a>
              <a href="/pdf/Daniel_Estrada_Resume.pdf" download>
                <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:scale-105 hover:cursor-pointer transition text-shadow-sm dark:bg-blue-700">
                  Download Resume
                </button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation delay={1.5}>
          <Image
            src="/Profile-Picture.jpg"
            alt="Daniel profile"
            width={400}
            height={400}
            className=" mask-radial-at-center mask-radial-from-60% mask-radial-to-70% mt-10 md:mt-0 xl:w-[600px]
            "
          />
        </ScrollAnimation>
      </section >

    </div >
  )
}


