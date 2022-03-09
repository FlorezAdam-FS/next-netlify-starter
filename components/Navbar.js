import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = ({ textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4", duration: 1 } });
    tl.to(
      ".nav-link",
      {
        color: "#27282A",
      },
      "+=1.1"
    );
    tl.to(".nav", {
      scaleY: 1,
    });
  });
  return (
    <div className="fixed nav w-full scale-y-0 origin-top pt-4 pb-6 px-4 lg:px-8 left-0 bg-orange z-30 shadow">
      <nav
        className="sticky top-0 z-50 flex items-center justify-start sm:h-10 mx-auto"
        aria-label="Global"
      >
        <Link href="/">
          <a className="nav-link ease-in duration-200 text-white font-heading text-5xl ml-3 hover:text-white">
            af.
          </a>
        </Link>
        <div className="mt-3 ml-3">
          <Link href="/about">
            <a
              className={`nav-link ease-in duration-200 font-medium mt-2 p-4 text-white hover:text-white`}
            >
              About
            </a>
          </Link>

          <Link href="/work">
            <a
              className={`nav-link ease-in duration-200 font-medium mt-2 p-4 text-white hover:text-white`}
            >
              My Work
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
