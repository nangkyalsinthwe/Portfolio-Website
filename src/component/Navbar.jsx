import React from "react";
import download from "../assets/download.png";
import CvModal from "./CvModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCVOpen, setIsCVOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-pink-500/20 bg-pink-300">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">
          <div className="shrink-0 flex items-center">
            <a
              href="#"
              className="text-3xl font-extrabold text-rose-900 font-poppins tracking-wide"
            >
              𝓝𝓪𝓷𝓰 𝓚𝔂𝓪𝓵
            </a>
          </div>

          {/* desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="text-pink-800 font-bold hover:text-black cursor-pointer focus:underline focus:text-[#1A1110] focus:font-bold text-sm hover:underline transition"
              >
                Home
              </a>
              <a
                href="#aboutme"
                className="text-pink-800 font-bold hover:text-black cursor-pointer focus:underline focus:text-[#1A1110] focus:font-bold text-sm  hover:underline transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-pink-800 font-bold hover:text-black cursor-pointer focus:underline focus:text-[#1A1110] focus:font-bold text-sm  hover:underline transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-pink-800 font-bold hover:text-black cursor-pointer focus:underline focus:text-[#1A1110] focus:font-bold text-sm hover:underline transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-pink-800 font-bold hover:text-black cursor-pointer focus:underline focus:text-[#1A1110] focus:font-bold text-sm hover:underline transition"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsCVOpen(true);
                }}
                className="inline-flex items-center bg-pink-600 hover:bg-pink-800 active:scale-95 text-center focus:text-pink-500 focus:bg-white text-white px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-pink-600/30 border border-pink-400/30 cursor-pointer"
              >
                <span>Download CV</span>
                <img
                  src={download}
                  alt="Download"
                  className="inline-block h-4 w-4 ml-2"
                />
              </button>
            </div>
          </div>

          {/* mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-pink-500 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1A1110] border-b border-pink-500/20 px-4 pt-4 pb-6 space-y-3 text-center">
          <a
            href="#aboutme"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 hover:text-pink-400 focus:underline focus:text-pink-500 focus:font-bold px-3 py-2 rounded-md text-base font-medium"
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 hover:text-pink-400 focus:underline focus:text-pink-500 focus:font-bold px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 hover:text-pink-400 focus:underline focus:text-pink-500 focus:font-bold px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-white/80 hover:text-pink-400 focus:underline focus:text-pink-500 focus:font-bold px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Me
          </a>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setIsCVOpen(true);
            }}
            className="w-full inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-center text-white px-4 py-2.5 rounded-full text-base font-medium shadow-lg shadow-pink-600/30 cursor-pointer"
          >
            <span>Download CV</span>
            <img
              src={download}
              alt="Download"
              className="inline-block h-4 w-4 ml-2"
            />
          </button>
        </div>
      )}
      <CvModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </nav>
  );
};

export default Navbar;
