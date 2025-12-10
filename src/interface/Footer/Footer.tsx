import { LucideLinkedin, LucideGithub, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <section className="max-w-screen-lg mx-auto xl:px-0 px-5 pt-16 pb-16">
          <div className="flex justify-between items-center flex-col gap-10">
            <div className="w-full">
              <div>
                <p className="text-muted-foreground max-w-xl mx-auto font-normal text-2xl text-center leading-[28px] pt-4">
                  I'm currently specializing in{" "}
                  <span className="text-yellow-200">Front-end Development.</span>{" "}
                  Feel free to get in touch and talk more about your projects.
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
              </div>
            </div>
          </div>
        </section>
  )
}

export default Footer