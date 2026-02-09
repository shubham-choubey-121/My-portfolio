const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "Git",
];

export default function Skills() {
  return (
    <section className="py-20 bg-white dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-blue-900/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Frontend</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, Vue.js, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Backend</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, REST APIs, PostgreSQL</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-[#1e293b] rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">DevOps</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Docker, Git, Linux, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
