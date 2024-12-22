import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
    return (
        <section className="max-w-screen-lg mx-auto xl:px-0 px-5 pt-16 pb-16">
            <div className="">
                <div className="">
                    <h1 className="text-3xl md:text-start text-center font-bold text-white">
                        Keep In Touch.
                    </h1>
                    <p className="text-muted-foreground max-w-xl font-normal text-2xl md:text-start text-center leading-[28px] pt-6">
                        I'm currently specializing in <span className="text-yellow-200">Front-end Development.</span> Feel free to get in touch and talk more about your projects.
                    </p>
                </div>
                <div className='flex md:justify-start justify-center space-x-4 pt-6'>
                    <a
                        href="https://www.linkedin.com/in/zoulkifirou-sabi-adam-73ab0b296"
                        target="_blank"
                        className='bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 w-32 h-10 rounded-[8px]'>
                        <FaLinkedin className='text-yellow-200' size={16} />
                        <p className="text-md font-bold">Linkedin</p>
                    </a>
                    <a
                        href="mailto:zoulkifirousabiadam@gmail.com"
                        className='bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 w-28 h-10 rounded-[8px]'
                    >
                        <IoMail className='text-yellow-200' size={16} />
                        <p className="text-md font-bold">Email</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact