import Image from "next/image";

export default function HeroComponent() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen px-4 bg-gray-200
    transition-all duration-500 ease-in-out p-10">
      <Image
        src="/Profile-Picture.jpg"
        alt="Daniel profile"
        width={240}
        height={240}
        className="rounded-full mb-10 "
      />
      <h1 className="text-gray-950 text-4xl sm:text-5xl font-bold mb-4">
        Hi, I am Daniel 👋
      </h1>
      <p className=" text-gray-950 text-xl sm:text-2xl max-w-xl mb-6">
        I am a Full-stack-Web Developer passionate about crafting clean, modern web experiences using toosl like React, Next.js, and Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-gray-800 text-white dark:bg-white dark:text-black font-semibold rounded-lg shadow hover:scale-105 transition"
      >
        See My Work
      </a>
    </section>
  )
}
