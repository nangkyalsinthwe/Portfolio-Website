import React from "react";
import souri from "../assets/projectImg/souri.jpg";
import vanlife from "../assets/projectImg/vanlife.jpg";
import movie from "../assets/projectImg/movieWatchlist.jpg";
import quiz from "../assets/projectImg/quiz.jpg";
import restApi from "../assets/projectImg/restApi.png";
import assemebly from "../assets/projectImg/assemebly.jpg";

const Projects = () => {
  const featuredProjects = [
    {
      img: souri,
      title: "SouriBKK",
      description:
        "A gorgeous frontend web application built for a popular patisserie/macaron brand, featuring responsive layouts, product showcases, and modern UI design.",
      techStack: ["React", "Tailwind CSS", "Vite"],
      liveLink: "https://nangkyalsinthwe.github.io/SouriBKK-project/",
      githubLink: "https://github.com/nangkyalsinthwe/SouriBKK-project",
    },
    {
      img: vanlife,
      title: "Vanlife Rental App",
      description:
        "A van rental web application featuring dynamic routing, nested layouts, and simulated authentication for browsing and managing van listings.",
      techStack: ["React", "React Router", "Tailwind CSS"],
      liveLink: "https://nangkyalsinthwe.github.io/Vanlife",
      githubLink: "https://github.com/nangkyalsinthwe/Vanlife",
    },
    {
      img: movie,
      title: "MovieWatchList useApi",
      description:
        "An interactive movie search application utilizing external APIs to fetch movie data, view detailed info, and manage a personalized watchlist.",
      techStack: ["React", "REST API", "Tailwind CSS"],
      liveLink: "https://nangkyalsinthwe.github.io/MovieWatchList_useApi",
      githubLink: "https://github.com/nangkyalsinthwe/MovieWatchList_useApi",
    },
    {
      img: assemebly,
      title: "Assembly-EndGame",
      description:
        "An interactive word-guessing game built with React state management, featuring custom keyboard handling and visual feedback loops.",
      techStack: ["React", "JavaScript", "CSS3"],
      liveLink: "https://nangkyalsinthwe.github.io/Assembly-EndGame",
      githubLink: "https://github.com/nangkyalsinthwe/Assembly-EndGame",
    },
    {
      img: quiz,
      title: "Quizzical Trivia App",
      description:
        "A dynamic trivia quiz application that fetches questions from an API, manages game states, and calculates scores with an engaging user interface.",
      techStack: ["React", "API Integration", "JavaScript"],
      liveLink: "https://nangkyalsinthwe.github.io/Quizzical_app",
      githubLink: "https://github.com/nangkyalsinthwe/Quizzical_app",
    },
    {
      img: restApi,
      title: "My-Rest-API",
      description:
        "A backend RESTful API project built to demonstrate server-side logic, data handling, and backend integration capabilities using Node.js and Express.",
      techStack: ["Node.js", "Express", "REST API"],
      liveLink: "https://my-rest-api-lq82.onrender.com/api",
      githubLink: "https://github.com/nangkyalsinthwe/My-Rest-API",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pink-500/50 text-[#1A1110] "
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-block border-2 border-[#1A1110] px-8 py-3 shadow-[4px_4px_0px_0px_#db2777]">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase font-poppins">
              Featured Projects
            </h2>
          </div>
          <p className="text-neutral-600 max-w-xl mx-auto text-base">
            Here are some of my key projects highlighting my frontend
            development journey and backend exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-pink-200/60 shadow-lg shadow-pink-500/5 flex flex-col justify-between hover:-translate-y-1.5 transition duration-300 group overflow-hidden"
            >
              <div className="w-full h-80 overflow-hidden bg-pink-50 border-b border-pink-100">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-bold text-pink-600 group-hover:text-pink-700 transition">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-50 text-pink-700 px-3 py-1 rounded-lg text-xs font-semibold border border-pink-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4 bg-pink-50/5 border-t border-neutral-100">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-neutral-800 hover:text-pink-600 transition flex items-center gap-1"
                >
                  <span>📂</span> Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-pink-100 hover:bg-pink-600 hover:text-white text-pink-700 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <a
            href="https://github.com/nangkyalsinthwe?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-pink-600/30 transition duration-300 hover:scale-105"
          >
            View All My Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
