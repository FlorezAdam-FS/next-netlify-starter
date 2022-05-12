import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import src from "../assets/me.png";
export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4", duration: 2 },
    });
    tl.to(
      ".black-bg",
      {
        "clip-path": "polygon(60% 100%, 100% 100%, 100% 100%, 100% 60%)",
      },
      "+=2"
    );
    tl.to(
      ".adam",
      {
        y: 0,
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
      "-=5"
    );
    tl.to(
      ".titles",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
      "-=5"
    );
    tl.to(
      ".info",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
      "-=.8"
    );
    tl.to(
      ".button",
      {
        scaleY: 1,
        ease: "bounce.out",
        stagger: 0.2,
        marginBottom: 8,
      },
      "-=2.5"
    );
    tl.to(".image", {
      bottom: "-260px",
    });
  });
  return (
    <main className="flex flex-col items-center justify-center min-h-screen min-w-full bg-dark">
      <div className="w-[90%] mx-auto h-full flex-grow flex items-center justify-start">
        <div className="p-8 relative z-50 sm:text-center lg:text-left">
          <h1
            className="adam translate-y-[100px] text-3xl max-w-[900px] tracking-tight text-left leading-tight font-bold  sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
          >
            <span className="text-white">
              I'm Adam Florez
              <br />{" "}
            </span>
            <span
              className="titles block text-lg text-white opacity-0 font-light mt-4 mb-8 tracking-normal translate-y-[100px] sm:text-3xl md:text-3xl"
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              Developer | Designer | Dedicated
            </span>
          </h1>
          <p
            className="info mt-3 text-sm translate-y-[100px] opacity-0 text-left text-white  sm:mt-5 sm:text-md sm:max-w-cl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:max-w-2xl lg:text-lg"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
          >
            Graduating from Full Sail University in June 2022 with a Bachelor's
            of Science in Web Development and Design. Looking to make a name for
            myself as well as increase productivity and enhance creativity for
            your company.
          </p>
          <div className="mt-8 max-w-[400px] sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Link href="/work">
              <a className="button scale-y-0 origin-bottom  ease-in mr-3 duration-200 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-dark bg-white hover:bg-orange hover:text-white md:py-4 md:text-lg md:px-10">
                My Work
              </a>
            </Link>

            <Link href="/contact">
              <a className="button scale-y-0 origin-bottom ease-in duration-200 w-full flex items-center justify-center px-8 py-3 border border-dark text-base font-medium text-white bg-transparent border-white hover:border-none  hover:bg-orange hover:text-white md:py-4 md:text-lg md:px-10">
                Contact Me
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="black-bg h-[100vh] w-full absolute lg:block bottom-0 right-0 bg-orange z-0"
        style={{
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          zIndex: 0,
        }}
      />
      <div className="image fixed hidden right-[-30px] bottom-[-860px] xl:inline">
        <Image src={src} />
      </div>
    </main>
  );
}
