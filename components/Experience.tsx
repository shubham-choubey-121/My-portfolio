import { experience } from "@/data/experience";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-[#1a202c]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-8 pb-8 border-l-2 border-blue-600 last:pb-0"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 top-1 shadow-md"></div>

                <div className="bg-white dark:bg-[#0f172a] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
