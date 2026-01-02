'use client';
import ScrollAnimation from "@/animations/ScrollAnimation";

export default function AboutComponent() {
  return (
    <section id="about" className="w-full px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed">
            Hi! I’m <span className="font-semibold">Daniel</span>, a full-stack developer with an engineering background and a strong passion for building reliable, well-structured software.
            I combine problem-solving, technical thinking, and hands-on development to create applications that work efficiently from backend to frontend.
          </p>

          <p className="text-lg mt-4 leading-relaxed">
            I have experience working across the full stack, from designing and consuming <span className="font-semibold">REST APIs</span> to building responsive user interfaces.
            My work includes backend development with <span className="font-semibold">Node.js</span> and <span className="font-semibold">Django</span>, as well as frontend development using modern web technologies.
            I value clean architecture, maintainable code, and thoughtful system design.
          </p>

          <p className="text-lg mt-4 leading-relaxed">
            Before transitioning into software development, I completed three years of biomedical engineering studies, which gave me a strong foundation in structured problem-solving, system optimization, and technical documentation.
            I’m also deeply interested in physics and mathematics, with long-term goals that connect software engineering with scientific and technical innovation.
          </p>

          <p className="text-lg mt-4 leading-relaxed">
            Outside of coding, I enjoy learning new concepts, exploring complex problems, and continuously improving my skills—both as a developer and as an engineer.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
