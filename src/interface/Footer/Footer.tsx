import { LucideLinkedin, LucideGithub, Mail } from "lucide-react";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="max-w-screen-xl mx-auto xl:px-0 px-5 pt-16 pb-0">
      <div className="border border-t-gray-900 border-b-0 border-l-0 border-r-0">
        <div className="flex justify-between items-center flex-col gap-10 pt-8 pb-8">
          <div className="w-full">
            <div>
              <p className="text-muted-foreground max-w-xl mx-auto font-normal text-2xl text-center leading-[28px] pt-4">
                I currently specialize in{" "}
                <span className="text-yellow-200">
                  Front-end Development and UX/UI Design.
                </span>{" "}
                Feel free to contact me to discuss your projects.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex md:justify-center justify-center space-x-4 pt-4">
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
              <a
                href="https://www.behance.net/zoulsad"
                target="_blank"
                className="bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 w-28 h-10 rounded-[8px]"
              >
                <FaBehance className="text-yellow-200" size={16} />
                <p className="text-md font-bold">Behance</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
