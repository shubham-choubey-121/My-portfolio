export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div>
           <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I'm{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Shubham Choubey
              </span>
              , a passionate{" "}
              <span className="font-semibold">Junior Full-Stack Developer</span>
              {" "}who enjoys learning and building modern web applications.
            </p>

            <p>
              I started my journey with web development fundamentals and gradually moved towards working on
              product-based applications. I've worked on projects like{" "}
              <span className="font-semibold">Healthray</span> (Pharmacy Management System) and{" "}
              <span className="font-semibold">MyHolidayTrip</span> (Hotel Booking Platform), mainly at the
              staging and development level.
            </p>

            <p>
              My current role involves understanding existing codebases, developing UI components, testing
              features, and learning real-world workflows under senior guidance.
              I work with frameworks like{" "}
              <span className="font-semibold">React.js, Next.js, and Vue.js</span>,
              and I’m gaining hands-on experience with{" "}
              <span className="font-semibold">Node.js, PostgreSQL</span>,{" "}
              <span className="font-semibold">Docker</span>, and{" "}
              <span className="font-semibold">Git</span>.
            </p>

            <p>
              I focus on writing clean and maintainable code and continuously improving my skills.
              I'm always eager to learn new technologies and grow as a developer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "React.js", icon: "⚛️" },
              { label: "Next.js", icon: "▲" },
              { label: "Vue.js", icon: "💚" },
              { label: "TypeScript", icon: "🔷" },
              { label: "PostgreSQL", icon: "🐘" },
              { label: "Docker", icon: "🐳" },
            ].map((tech) => (
              <div
                key={tech.label}
                className="p-4 bg-gray-50 dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-gray-700 text-center font-semibold text-gray-800 dark:text-gray-200"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
