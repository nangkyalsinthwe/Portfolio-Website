import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 md:pt-24 pb-12"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold text-[#100f0f]">
              👋🏻 Hello, I am
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight font-extrabold font-poppins text-pink-600">
              Nang Kyal Sin Thwe
            </h1>
            <p className="text-pink-500 leading-relaxed text-lg md:text-xl font-semibold">
              Front-end Developer
            </p>
            <div className="flex items-center space-x-4 pt-6 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/nangkyalsinthwe"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition shadow-md border border-pink-200"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-8 w-8 object-contain"
                />
              </a>
              <a
                href="https://github.com/nangkyalsinthwe"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition shadow-md border border-pink-200"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="h-8 w-8 object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nangkyalsinthwe/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition shadow-md border border-pink-200"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-8 w-8 object-contain"
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-112">
              <div className="absolute -inset-1.5 bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl blur-lg opacity-80"></div>
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full relative rounded-2xl object-cover object-center hover:scale-105 transition duration-500 shadow-md border-4 border-pink-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
