import Image from "next/image";
import ScrollAnimation from "@/animations/ScrollAnimation";
import clsx from "clsx";

export default function HeroComponent() {
  return (
    <div>

      <section className="flex flex-col justify-center items-center text-center h-screen px-4 bg-gray-200
    transition-all duration-500  p-10">
   <div className="mask-[url('/Logo/LogoName-W-nb-S.png')] bg-[url('/Logo/LogoName-W-nb-S.png')]">
</div>
        <ScrollAnimation >
          <Image
            src="/Profile-Picture.jpg"
            alt="Daniel profile"
            width={240}
            height={240}
            className="mask-radial-at-bottom-left"
          />
        </ScrollAnimation>
        <ScrollAnimation>
          <h1 className={clsx("text-gray-950 text-4xl sm:text-5xl font-bold mb-4",


          )}>
            Hi, I am Daniel 👋
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={0.5}>
          <p className=" text-gray-950 text-xl sm:text-2xl max-w-xl mb-6">
            I am a Full-stack-Web Developer passionate about crafting clean, modern web experiences using toosl like React, Next.js, and Tailwind CSS.
          </p>
        </ScrollAnimation >
        <ScrollAnimation delay={1}>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-800 text-white dark:bg-white dark:text-black font-semibold rounded-lg shadow hover:scale-105 transition"
          >
            See My Work
          </a>
        </ScrollAnimation>
      </section >

    </div >
  )
}
