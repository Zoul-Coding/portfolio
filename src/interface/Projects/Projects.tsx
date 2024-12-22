import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle
} from "@/components/ui/card"
import Img from '/img/img.jpg';
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="max-w-screen-lg mx-auto xl:px-0 px-5 pt-16 pb-16">
      <div className="">
        <h3 className="text-3xl font-bold">Projects</h3>
        <p className="text-muted-foreground font-normal text-2xl leading-[28px] pt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
          <Card className="bg-gray-950 border-none rounded-[8px]">
            <img src={Img} alt="" className="w-full md:h-64 h-72 rounded-t-[8px] rounded-b-0" />
            <CardHeader className="pt-6 pb-0">
              <CardTitle className="text-2xl font-bold">
                Titre du projet
              </CardTitle>
              <div className="flex items-center gap-3">
                <span className='bg-gray-800 flex items-center justify-center gap-2 w-20 py-1 rounded-[8px]'>
                  <FaReact className="text-blue-300" size={15} />
                  <p className="text-sm text-blue-300 font-bold">React</p>
                </span>
                <span className='bg-slate-900 flex items-center justify-center gap-2 w-32 py-1 rounded-[8px]'>
                  <RiTailwindCssFill className="text-sky-300" size={15} />
                  <p className="text-sm text-sky-300 font-bold">Tailwind css</p>
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6 pb-6">
              <p className="text-gray-500 font-normal text-xl leading-[28px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis dolorum atque commodi
              </p>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <FaGithub />
                  <a className="text-yellow-200 hover:opacity-80" href="">Github</a>
                </div>
                <span>-</span>
                <div className="flex items-center gap-3">
                  <FaLink />
                  <a className="text-yellow-200 hover:opacity-80" href="">Live Site</a>
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-gray-950 border-none rounded-[8px]">
            <img src={Img} alt="" className="bg-gray-900 w-full md:h-64 h-72 rounded-t-[8px] rounded-b-0" />
            <CardHeader className="pt-6 pb-0">
              <CardTitle className="text-2xl font-bold">
                Titre du projet
              </CardTitle>
              <div className="flex items-center gap-3">
                <span className='bg-gray-800 flex items-center justify-center gap-2 w-20 py-1 rounded-[8px]'>
                  <FaReact className="text-blue-300" size={15} />
                  <p className="text-sm text-blue-300 font-bold">React</p>
                </span>
                <span className='bg-slate-900 flex items-center justify-center gap-2 w-32 py-1 rounded-[8px]'>
                  <RiTailwindCssFill className="text-sky-300" size={15} />
                  <p className="text-sm text-sky-300 font-bold">Tailwind css</p>
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6 pb-6">
              <p className="text-gray-500 font-normal text-xl leading-[28px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis dolorum atque commodi
              </p>
            </CardContent>
            <CardFooter className="pt-0 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <FaGithub />
                  <a className="text-yellow-200 hover:opacity-80" href="">Github</a>
                </div>
                <span>-</span>
                <div className="flex items-center gap-3">
                  <FaLink />
                  <a className="text-yellow-200 hover:opacity-80" href="">Live Site</a>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects