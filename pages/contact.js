import React, { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4", duration: 1 } });
    tl.to(".screen", {
      scaleY: 1,
    });
  });

  const sendMail = async (data) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      //if sucess do whatever you like, i.e toast notification
      setTimeout(() => reset(), 2000);
    } catch (error) {
      // toast error message. whatever you wish
    }
  };

  return (
    <div className="screen z-0 mb-10 p-8 relative h-screen flex justify-center origin-bottom items-center bg-dark scale-y-0">
      <div className="contact-wrapp">
        <Link href="/">
          <h2 className="ease-in duration-200 text-white font-heading text-6xl ml-3 mb-8 text-center cursor-pointer">
            af.
          </h2>
        </Link>
        <form
          onSubmit={sendMail}
          className="flex flex-col items-center justify-center p-3"
        >
          <input
            tabIndex="0"
            type="text"
            name="name"
            placeholder="Name"
            className="py-3 px-3 rounded w-[300px] ease-in duration-300 my-2 
            focus:border-4 focus:border-orange focus:outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="py-3 px-3 rounded w-[300px] ease-in duration-300 my-2 tab-index-1
            focus:border-4 focus:border-orange focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="py-3 px-3 rounded w-[300px] ease-in duration-300 my-2 
            focus:border-4 focus:border-orange focus:outline-none"
            required
          />
          <div className="h-[1px] w-[150px] mt-3 mb-4 bg-white" />
          <button
            type="submit"
            className="bg-white text-dark py-3 px-5 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
