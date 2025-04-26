import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "Flutter",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "ASP.NET Core",
    "AWS",
    "MongoDB",
    "MySQL",
    "SQLite",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Motivated final-year Software Engineering student at Curtin
              University, graduating in July 2025, with hands-on experience in
              full-stack development, mobile application design, cloud-based
              systems, and software architecture. Skilled in Java, C#, Flutter,
              React, and AWS platforms, with a strong foundation in distributed
              computing, database systems, and extensible software design.
              Proven ability to deliver high-quality projects in agile team
              environments, utilizing modern development tools such as GitHub,
              Bitbucket, Jira, and Gradle. Eager to apply technical expertise,
              problem-solving skills, and passion for innovation to a dynamic
              Software Engineer role.
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
                  <strong>Bachelor of Computing, Software Engineering</strong> –
                  Curtin University (Feb 2023 – Jul 2025)
                </li>
                <li>
                  Coursework: Distributed Computing, Mobile App Dev, Software
                  Architecture, Database Systems, Cybersecurity, Capstone.
                </li>
                <li>
                  <strong>Higher Diploma in IT</strong> – SLIIT (Jun 2020 – Jul
                  2022)
                </li>
                <li>
                  Coursework: Web Development, Object-Oriented Programming
                  (Java), Networking, Databases, Project Management.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Front Office Receptionist – Ibis Budget Perth Airport
                  </h4>
                  <p>
                    Managed guest services, resolved booking issues, balanced
                    financial journals, and handled hotel software troubleshooting while
                    coordinating with multiple departments.
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
