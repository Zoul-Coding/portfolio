import { CardSpotlight } from "@/components/ui/card-spotlight";
import { LucideLinkedin, LucideGithub, Mail } from "lucide-react";
import Profile from "/img/profile.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <CardSpotlight className="h-[100vh]">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center h-screen items-center">
          <div className="z-40">
            <div className="flex justify-center">
              <img
                src={Profile}
                className="w-20 h-20 rounded-full"
                alt="Profile Zoulkifirou SABI ADAM"
              />
            </div>
            <h1 className="md:text-5xl text-3xl text-center font-bold relative z-0 pt-10 text-white">
              Zoulkifirou SABI ADAM,{" "}
              <span className="text-yellow-200">
                Front-End Web Developer & UX/UI Designer 🚀
              </span>
            </h1>
            <p className="text-muted-foreground max-w-screen-md mx-auto font-normal md:text-2xl text-1xl text-center leading-[28px] pt-6">
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
            <div className="flex items-center justify-center gap-4 pt-8">
              <Button className="px-12 py-6 rounded-xl bg-yellow-200 text-black font-semibold hover:bg-yellow-300 transition">
                View My Work
              </Button>

              <Button className="px-12 py-6 rounded-xl bg-gray-800 text-yellow-200 font-semibold hover:opacity-80 hover:bg-gray-800 transition">
                Télécharger mon cv
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}
