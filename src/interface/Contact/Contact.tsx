import { LucideLinkedin, LucideGithub, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="max-w-screen-lg mx-auto xl:px-0 px-5 pt-16 pb-16">
      <div className="flex justify-between items-center flex-col gap-10">
        {/* ---- Right Side ---- */}
        <div className="w-full">
          {/* Header */}
          <div>
            <h3 className="md:text-3xl text-2xl text-center font-bold">Contact Us</h3>
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

        {/* ---- Left Side Block ---- */}
        {/* ---- Contact Form ---- */}
        <form className="pt-6 space-y-5 w-full">
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              className="bg-secondary rounded py-6"
            />
          </div>

          {/* Surname */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="surname" className="text-white">
              Surname
            </Label>
            <Input
              id="surname"
              placeholder="Your surname"
              className="bg-secondary rounded py-6"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="subject" className="text-white">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Project subject"
              className="bg-secondary rounded py-6"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              className="bg-secondary rounded min-h-[120px]"
            />
          </div>

          {/* CTA Button */}
          <Button
            type="submit"
            className="w-full bg-yellow-200 text-black font-bold hover:bg-yellow-300 rounded py-6"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
