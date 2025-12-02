import {
    Card,
} from "@/components/ui/card"
import ReactImg from '/img/react.svg';
import TailwindImg from '/img/tailwind-css.svg';
import TypeScriptImg from '/img/typescript.svg';


const Skills = () => {
    return (
        <div className="max-w-screen-lg mx-auto xl:px-0 px-5 pt-16 pb-16">
            <div className="">
                <h3 className="md:text-3xl text-2xl text-center font-bold">Skills</h3>
                <p className="text-muted-foreground text-center font-normal md:text-2xl text-1xl leading-[28px] pt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-12">
                    <Card className="bg-gray-950 border-border rounded-[8px] py-16">
                        <div className="flex flex-col justify-center items-center gap-6">
                            <img src={ReactImg} className='w-20 h-20' alt="" />
                            <h3 className="font-medium text-2xl">
                                React
                            </h3>
                        </div>
                    </Card>
                    <Card className="bg-gray-950 border-border rounded-[8px] py-16">
                        <div className="flex flex-col justify-center items-center gap-6">
                            <img src={TailwindImg} className='w-20 h-20' alt="" />
                            <h3 className="font-medium text-2xl">
                                TailwindCss
                            </h3>
                        </div>
                    </Card>
                    <Card className="bg-gray-950 border-border rounded-[8px] py-16">
                        <div className="flex flex-col justify-center items-center gap-6">
                            <img src={TypeScriptImg} className='w-20 h-20' alt="" />
                            <h3 className="font-medium text-2xl">
                                TypeScript
                            </h3>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Skills