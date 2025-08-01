'use client';

export default function AboutComponent() {
  return (
    <section id="about" className="w-full px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I’m <span className="font-semibold">Daniel</span>, a passionate web developer with a background in biomedical engineering and a love for clean, interactive design.
          I’m currently focused on building modern, responsive websites using <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, and <span className="font-semibold">Tailwind CSS</span>. I enjoy bringing ideas to life on the web and constantly pushing myself to learn new technologies.
        </p>

        <p className="text-lg mt-4 leading-relaxed">
          Beyond coding, I’m diving deeper into physics and mathematics with the goal of pursuing a future in <span className="font-semibold">quantum engineering</span>. I believe in lifelong learning, and I’m excited to combine science, design, and technology in meaningful ways.
        </p>

        <p className="text-lg mt-4 leading-relaxed">
          When I’m not coding, you’ll probably find me exploring nature, solving physics problems, or experimenting with new design ideas.
        </p>
      </div>
    </section>
  );
}
