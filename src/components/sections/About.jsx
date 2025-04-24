import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "Tailwind CSS",
    "Svelte",
  ];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a passionate software developer with a strong foundation in
              programming languages such as Java, C++, and JavaScript. I have a
              keen interest in problem-solving and enjoy tackling complex
              challenges. My experience includes working on various projects
              that have honed my skills in software development, database
              management, and web technologies. I am always eager to learn new
              technologies and improve my skills to stay updated with the latest
              trends in the industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-transform transform hover:scale-105 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-transform transform hover:scale-105 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor in Computing</strong> - Curtin University
                  (2023–2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Web
                  Development, Database Management...
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at Abc Corp (2020–present)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Intern</h4>
                  <p>
                    Assisted in building front-end components and integration of
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
