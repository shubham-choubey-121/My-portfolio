"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">Welcome to my portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Shubham</span>
            </h1>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack Developer building scalable, high-performance web applications with modern technologies and best practices.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-4 pt-6">
            <a
              href="https://linkedin.com/in/shubhamchoubeyx"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shubham-choubey-121"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/shubham_choubey_121"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
            <Image
              src="/profile.png"
              alt="Shubham"
              width={400}
              height={400}
              className="relative rounded-3xl object-cover shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
