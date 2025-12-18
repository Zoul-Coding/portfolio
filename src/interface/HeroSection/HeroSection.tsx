import { CardSpotlight } from "@/components/ui/card-spotlight-static";
import Cv from "../../../public/assets/files/Cv_Zoulkifirou_SABI_ADAM.pdf";

export function HeroSection() {
  return (
    <CardSpotlight className="flex items-center justify-center md:h-[116vh] h-[100vh]">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center h-screen items-center">
          <div className="z-40">
           {/*  <div className="flex justify-center">
              <img
                src={Profile}
                className="w-20 h-20 rounded-full"
                alt="Profile Zoulkifirou SABI ADAM"
              />
            </div> */}
            <h1 className="md:text-5xl text-3xl text-center font-poppins relative z-0 pt-10 text-white md:px-0 px-3">
              Zoulkifirou SABI ADAM,{" "}
              <span className="text-yellow-200">
                Front-End Web Developer & UX/UI Designer 🚀
              </span>
            </h1>
            <p className="text-gray-200 font-inter max-w-screen-md mx-auto font-normal md:text-2xl text-1xl text-center leading-[28px] pt-6 md:px-0 px-3">
              I design and build modern, high-performance interfaces that
              deliver smooth and intuitive user experiences. From UX/UI design
              to front-end development, I bring ideas to life with clean,
              user-centered digital solutions.
            </p>
            {/* <div className="flex justify-center space-x-4 pt-6">
              <a
                href="https://www.linkedin.com/in/zoulkifirou-sabi-adam-73ab0b296"
                target="_blank"
                className="bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 w-32 h-10 rounded-[8px]"
              >
                <LucideLinkedin className="text-yellow-200" size={16} />
                <p className="text-md font-bold">Linkedin</p>
              </a>
              <a
                href="https://github.com/Zoul-Coding"
                target="_blank"
                className="bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 w-28 h-10 rounded-[8px]"
              >
                <LucideGithub className="text-yellow-200" size={16} />
                <p className="text-md font-bold">Github</p>
              </a>
              <a
                href="https://github.com/Zoul-Coding"
                target="_blank"
                className="bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 w-28 h-10 rounded-[8px]"
              >
                <Mail className="text-yellow-200" size={16} />
                <p className="text-md font-bold">Gmail</p>
              </a>
            </div> */}
            <div className="flex md:flex-row flex-col items-center justify-center gap-4 pt-8">
              <a href="#" className="px-12 h-12 rounded-xl font-poppins bg-yellow-200 text-black font-semibold hover:opacity-80 hover:bg-yellow-200 transition flex items-center">
                Discover my projects
              </a>

              <a href={Cv} download className="px-12 h-12 font-poppins rounded-xl bg-gray-800 text-yellow-200 font-semibold hover:opacity-80 hover:bg-gray-800 transition flex items-center">
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}
