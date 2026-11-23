import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import profile from "../assets/nk.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 justify-center md:pt-24 pb-12"
    >
      <div className="md:flex w-full max-w-8xl mx-auto px-4 sm:px-6 relative lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-[55%] flex flex-col justify-center space-y-4 text-center md:text-left px-4 md:px-10">
            <p className="text-xl md:text-2xl font-bold text-[#100f0f]">
              👋🏻 Hello, I am
            </p>
            <h1 className="whitespace-nowrap text-3xl sm:text-4xl lg:text-6xl tracking-tight leading-tight font-extrabold font-poppins text-pink-600">
              Nang Kyal Sin Thwe
            </h1>
            <p className="text-pink-400 leading-relaxed text-lg md:text-xl font-medium">
              Front-end Developer
            </p>
            <div className="flex items-center space-x-4 pt-6 md:justify-start justify-center">
              <a
                href="https://www.instagram.com/nangkyalsinthwe"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center transition shadow-md border border-pink-200"
              >
                <img src={instagram} alt="Instagram" className="h-10 w-10" />
              </a>
              <a
                href="https://github.com/nangkyalsinthwe"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center transition shadow-md border border-pink-200"
              >
                <img src={github} alt="GitHub" className="h-10 w-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/nangkyalsinthwe/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center transition shadow-md border border-pink-200"
              >
                <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[45%] px-6  md:px-20">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
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
