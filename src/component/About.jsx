import React from "react";

const About = () => {
  return (
    <section
      id="aboutme"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pink-500/50 text-[#1A1110]"
    >
      <div className="max-w-5xl mx-auto space-y-28">
        <div className="text-center space-y-10 px-6 ">
          {/* title */}
          <div className="inline-block border-2 border-[#1A1110] px-8 py-4 rounded-none shadow-[4px_4px_0px_0px_#db2777]">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase font-poppins">
              About Me
            </h2>
          </div>
          {/**description */}
          <div className="max-w-5xl mx-auto text-neutral-700 text-base sm:text-lg leading-10 font-medium tracking-wider">
            <p>
              Hello, I am{" "}
              <span className="text-pink-600 font-semibold">
                Nang Kyal Sin Thwe
              </span>
              . After passing my matriculation exam, I was admitted to a
              Computer Science University Mandalay, but due to various
              circumstances, I was unable to attend. However, driven by my deep
              passion for technology, I took the initiative to learn
              independently through platforms like{" "}
              <span className="text-pink-600 font-bold">
                Scrimba, freeCodeCamp, Khan Academy and YouTube
              </span>
              , and have now spent about 3 years studying Full Stack Development
              and Mathematics.
            </p>
            <p>
              I have built a strong foundation in Front-end Development,
              specializing in creating modern, responsive web applications using{" "}
              <span className="text-[#1A1110] font-bold">
                React, JavaScript, Tailwind CSS, HTML, and CSS
              </span>
              . Currently, I am actively expanding my backend skills by learning{" "}
              <span className="text-[#1A1110] font-bold">
                Node.js, SQL, and TypeScript
              </span>
              .
            </p>
          </div>
          {/* sub services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="bg-white p-6 border border-pink-200/80 rounded-2xl shadow-lg shadow-pink-500/5 text-center space-y-3">
              <h3 className="text-pink-600 text-xl underline">Design</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Creating user-friendly, clean, and modern UI/UX layouts tailored
                to aesthetic and functional needs.
              </p>
            </div>
            <div className="bg-white p-6 border border-pink-200/80 rounded-2xl shadow-lg shadow-pink-500/5 text-center space-y-3">
              <h3 className="text-pink-600 text-xl underline">Development</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Building fully responsive and interactive web applications
                utilizing React, Tailwind CSS, and JavaScript.
              </p>
            </div>
            <div className="bg-white p-6 border border-pink-200/80 rounded-2xl shadow-lg shadow-pink-500/5 text-center space-y-3">
              <h3 className="text-pink-600 text-xl underline">Maintenance</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Troubleshooting code, introducing new features and solutions,
                and ensuring optimized website performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
