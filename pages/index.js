import Navbar from "../components/Navbar";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import src from "../assets/me.png";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [isOpen, setIsopen] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zcgja3q",
        "template_mj5svxi",
        form.current,
        "user_G3CjMdVEDQr2iAgyItDya"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
          setIsSuccessful(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
      ".adam span",
      {
        color: "#27282A",
      },
      "-=2.5"
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
    <main className="flex flex-col items-center justify-center min-h-screen min-w-full bg-orange">
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
            className="info mt-3 text-sm leading-relaxed translate-y-[100px] opacity-0 text-left text-dark  sm:mt-5 sm:text-md sm:max-w-cl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:max-w-2xl lg:text-lg"
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
              <a className="button scale-y-0 origin-bottom  ease-in mr-3 duration-200 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-dark hover:bg-dark md:py-4 md:text-lg md:px-10">
                My Work
              </a>
            </Link>

            <div
              onClick={() => setIsopen((prev) => !prev)}
              className="cursor-pointer button scale-y-0 origin-bottom ease-in duration-200 w-full flex items-center justify-center px-8 py-3 border border-dark text-base font-medium text-dark bg-transparent hover:text-white hover:bg-dark md:py-4 md:text-lg md:px-10"
            >
              Contact Me
            </div>
          </div>
        </div>
      </div>
      <div
        className="black-bg h-full w-full absolute lg:block bottom-0 right-0 bg-dark z-0"
        style={{
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          zIndex: 0,
        }}
      />
      <div className="image fixed hidden right-10 bottom-[-860px] xl:inline">
        <Image src={src} />
      </div>
      {isOpen ? (
        <div className="w-full fixed lg:top-[50%] z-50 bg-dark lg:left-[70%] lg:translate-x-[-50%] lg:translate-y-[-50%] md:w-[500px] md:max-w-full mx-auto shadow-lg shadow-black">
          <div
            className="absolute cursor-pointer right-0 p-4 text-white text-2xl"
            onClick={() => setIsopen((prev) => !prev)}
          >
            <MdClose />
          </div>
          <div className="p-6 pt-10 flex">
            <div
              className={
                isSuccessful
                  ? `success_text absolute w-full ease-in duration-200 origin-left scale-x-1 h-full bg-orange top-0 left-0 p-8`
                  : `success_text absolute w-full scale-x-0 h-full bg-orange origin-left top-0 left-0 p-8 ease-in duration-200`
              }
            >
              <div
                className="absolute top-0 cursor-pointer right-0 p-4 text-dark text-2xl"
                onClick={() => setIsopen((prev) => !prev)}
              >
                <MdClose />
              </div>
              <h2 className="text-2xl mb-8  font-bold">
                Thanks for being awesome!{" "}
              </h2>
              <p className="leading-loose">
                We have received your message and would like to thank you for
                writing to us. If you want to get in contact to me in other ways
                reach out to me on social media! Just click the links in my
                footer.
              </p>
              <br />
              <p>Otherwise, I will reply by email as soon as possible. </p>
              <br />
              <p className="mb-2">Talk to you soon,</p>
              <p className="font-heading text-5xl">af.</p>
            </div>
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              <div>
                <label className="block mt-4 mb-2 text-orange font-bold tracking-wider">
                  Name
                </label>
                <input
                  className="block w-full p-2 mb-5"
                  type="text"
                  placeholder="Gotta know who you are!"
                  name="user_name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-orange font-bold tracking-wider">
                  Email
                </label>
                <input
                  className="block w-full p-2 mb-5"
                  type="email"
                  placeholder="Let me contact you back!"
                  name="user_email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-orange font-bold tracking-wider">
                  Message
                </label>
                <textarea
                  className="block w-full p-2 mb-5"
                  name="message"
                  rows="5"
                  placeholder="let me know how I can help..."
                  required
                />
              </div>
              <div>
                <input
                  className="w-full mt-1 p-3 bg-orange cursor-pointer hover:scale-[1.02]"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
