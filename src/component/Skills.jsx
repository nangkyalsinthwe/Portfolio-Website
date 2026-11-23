import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pink-500/50 text-[#1A1110]"
    >
      <div className="max-w-5xl mx-auto space-y-26">
        <div className="text-center space-y-10">
          {/* title */}
          <div className="inline-block border-2 border-[#1A1110] px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#db2777]">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase font-poppins">
              Skills
            </h2>
          </div>
          <div className="space-y-10 text-left max-w-3xl mx-auto">
            <div className="bg-white p-6 sm:p-8 border rounded-2xl border-pink-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-pink-600 tracking-wider flex items-center gap-2">
                <span>🛠️</span> USING NOW:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Javascript (ES6+)",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "Git & GitHub",
                  "Node.js (Basic)",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-pink-50 text-pink-700 px-4 py-2 rounded-xl text-sm font-semibold border border-pink-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 border rounded-2xl border-pink-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-pink-600 tracking-wider flex items-center gap-2">
                <span>📈</span> LEARNING:
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Advanced Node.js & Express",
                  "SQL Databases",
                  "TypeScript",
                  "RESTful APIs & Auth",
                  "Full Stack Integration",
                  "Chinese Language",
                  "Mathematics",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-50 text-purple-700 px-4 py-2 rounded-xl text-sm font-semibold border border-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 border rounded-2xl border-pink-200/60 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-pink-600 tracking-wider flex items-center gap-2">
                <span>💡</span> DIFFERENT (Soft Skills & Strengths):
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Self-Taught & Disciplined",
                  "Problem Solving",
                  "Responsive Web Design",
                  "Continuous Learner",
                  "Attention to Detail",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-xl text-sm font-semibold border border-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
