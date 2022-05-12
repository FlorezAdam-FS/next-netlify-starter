import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/projects");
      const projects = await res.json();
      const data = projects.data;
      setProjects(projects.data);
    }
    fetchData();
  }, [projects]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.Out", duration: 1 },
    });
    const projects = document.querySelectorAll(".project");

    tl.to(".bg", {
      "clip-path": "polygon(70% 0%, 100% 0%, 30% 100%, 0% 100%)",
      duration: 2,
    });
    tl.to(
      projects,
      {
        scaleX: 1,
      },
      "-=1"
    );
    tl.to("strong", {
      opacity: 1,
      stagger: 0.02,
    });
    tl.to(".lang", {
      scaleX: 1,
      stagger: 0.1,
    });
    tl.to(".api", {
      opacity: 1,
    });
    tl.to(
      ".image",
      {
        scaleY: 1,
        stagger: 0.3,
      },
      "-=3"
    );
    tl.to(".screen", {
      height: "100%",
    });
  });

  return (
    <div className="screen items-center justify-center min-w-full min-h-full">
      <div className="screen  flex flex-col bg-orange min-h-screen min-w-full ">
        <div className="flex-grow flex justify-center items-start mt-8 mb-4 max-w-[1800px] mx-auto">
          <div className="flex justify-center items-center flex-wrap gap-2 mt-[80px] mb-[50px]">
            {projects &&
              projects.map((p, idx) => (
                <div
                  className="project relative z-10   hover:brightness-50 relative md:mb-0 flex scale-x-0 origin-left flex-col w-3/4 md:w-1/2 lg:w-[597px] overflow-hidden"
                  key={idx}
                >
                  <a
                    key={idx}
                    className="image scale-y-0 origin-bottom h-[223px] lg:w-[597px] lg:h-[326px]"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: `url(${p.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></a>
                  <div className="bg-white pb-2 pt-1 px-2">
                    <strong className="opacity-0 block mb-2">{p.name}</strong>
                    {p.languages.map((l) => (
                      <>
                        <p className="lang scale-x-0 origin-left inline-block mr-3 text-xs text-gray-600 bg-gray-300 p-2 rounded-full">
                          {l}
                        </p>
                      </>
                    ))}
                    {p.API != null ? (
                      <p className="api opacity-0 p-2 text-sm ">
                        Api:{" "}
                        <a
                          className="text-orange underline"
                          href={p.APILink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {p.API}
                        </a>
                      </p>
                    ) : (
                      <p className="api opacity-0 p-2 text-sm ">No API</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div
            className="bg fixed h-screen w-screen bg-dark"
            style={{
              "clip-path": "polygon(100% 0, 100% 0%, 30% 100%, 30% 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
