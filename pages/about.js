import { gsap } from "gsap";
import { useEffect } from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCsharp,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
const todayDate = new Date().toISOString().slice(0, 10);

const frontend = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "C#", icon: <SiCsharp /> },
];
const backend = [
  { name: "NodeJS", icon: <SiNodedotjs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
];
const frameworks = [
  { name: "ReactJS", icon: <SiReact /> },
  { name: "BootStrap", icon: <SiBootstrap /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
];
const databases = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const Tag = ({ list, name }) => {
  return (
    <div className="w-1/2 lg:inline-block p-2">
      <h4 className="name mt-3 mb-2 md:text-xl md: font-bold translate-x-[100px] opacity-0">
        {name}
      </h4>
      <ul className="flex w-full justify-start items-center flex-wrap ">
        {list.map((l) => (
          <li
            key={"name_" + l.name}
            className="item flex justify-between px-3 items-center text-xs bg-dark text-orange p-1 w-full mb-1 z-30 text-center md:text-lg shadow shadow-gray-500 translate-y-[-10px] opacity-0 scale-[1.4]"
          >
            <p>{l.name}</p>
            <p>{l.icon}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function About() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 2 } });
    tl.to(".about", {
      scale: 1,
    });
    tl.to(".item", { y: 0, opacity: 1, scale: 1, stagger: 0.08 }, "-=1");
    tl.to(
      ".name",
      {
        x: 0,
        opacity: 1,
      },
      "-=1"
    );
    tl.to(".progress", {
      marginLeft: 0,
    });
    tl.to(
      ".small",
      {
        opacity: 1,
      },
      "-=1"
    );
  });

  return (
    <div className="z-0 bg-orange mb-10 p-8 relative">
      <div className="mx-auto max-w-[700px]">
        <div className="about relative scale-[1.3] z-30 shadow shadow-gray-500 p-4 bg-dark text-orange mt-[80px]">
          <h2 className="text-center  text-2xl font-bold mb-4">About Me</h2>
          <div
            className="px-3 mb-3 text-xl tracking-wide leading-relaxed
        "
          >
            <p>
              I'm Adam Florez, an aspiring web developer and designer from New
              York! I live in Florida now and attend Full Sail university where
              I am studying for my Bachelors of Science in Web Development and
              Design.
            </p>
            <br />
            <p className="mb-8">
              My goal is to find a place where I am able to be creative and show
              people what I am capable of. I graduate in June 2022 and can't
              wait to put my passion into practice.{" "}
            </p>
            <a
              className="p-3 border-2 border-orange ease-in duration-200 hover:bg-orange hover:text-dark"
              href="resume.pdf"
              download={`AdamFlorez-${todayDate}`}
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="h-[2px] w-full bg-dark my-8"></div>
        <div className="px-2">
          <h2 className="progress text-center  text-2xl font-bold mb-4 ml-[50px]">
            Progress<span className="small opacity-0 text-sm"> ... so far</span>
          </h2>
          <div className="flex flex-wrap ">
            <Tag list={frontend} name="Frontend" />
            <Tag list={backend} name="Backend" />
            <Tag list={frameworks} name="Frameworks" />
            <Tag list={databases} name="Databases" />
          </div>
        </div>
      </div>
      <div
        className="h-screen hidden fixed w-screen bg-dark top-0 lg:block z-0"
        style={{ "clip-path": "polygon(90% 0%, 100% 0%, 74% 100%, 63% 100%)" }}
      ></div>
      <div
        className="h-screen hidden fixed z-0 w-screen bg-dark top-0 lg:block"
        style={{
          "clip-path": "polygon(100% 20%, 100% 34%, 84% 100%, 80% 100%) ",
        }}
      ></div>
    </div>
  );
}
