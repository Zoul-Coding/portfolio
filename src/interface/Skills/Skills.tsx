import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import ReactImg from "../../../public/assets/img/react.svg";
import TailwindImg from "../../../public/assets/img/tailwind-css.svg";
import TypeScriptImg from "../../../public/assets/img/typescript.svg";
import GitImg from "../../../public/assets/img/Skills/git.png";
import GitHubImg from "../../../public/assets/img/Skills/github.svg";
import NextJsImg from "../../../public/assets/img/Skills/next-js.svg";
import AngularImg from "../../../public/assets/img/Skills/angular.png";
import FigmaImg from "../../../public/assets/img/Skills/figma.png";
import ApiImg from "../../../public/assets/img/Skills/api.svg";

export const skillData = [
  {
    name: "React",
    img: ReactImg,
  },
  {
    name: "Tailwind CSS",
    img: TailwindImg,
  },
  {
    name: "TypeScript",
    img: TypeScriptImg,
  },
  {
    name: "Git",
    img: GitImg,
  },
  {
    name: "GitHub",
    img: GitHubImg,
  },
  {
    name: "Next Js",
    img: NextJsImg,
  },
  {
    name: "Angular",
    img: AngularImg,
  },
  {
    name: "Figma",
    img: FigmaImg,
  },
  {
    name: "Api Rest",
    img: ApiImg,
  },
];

const Skills = () => (
  <section className="pt-16 pb-16">
    <div className="flex flex-col gap-3">
      <h3 className="md:text-3xl text-2xl font-bold text-center">My skills</h3>
      <p className="text-muted-foreground text-center font-normal md:text-2xl text-xl leading-[28px]">
        Here are the technologies I work with
      </p>
    </div>
    <div className="flex size-full items-center justify-center pt-12">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {skillData.map((skill, index) => (
            <MarqueeItem
              className="flex flex-col items-center h-32 w-32"
              key={index}
            >
              <img
                alt={skill.name}
                className="overflow-hidden rounded h-24 w-24"
                src={skill.img}
              />
              <p className="text-white text-center font-inter text-md pt-4">
                {skill.name}
              </p>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  </section>
);

export default Skills;
