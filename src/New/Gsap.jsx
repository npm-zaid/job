import React, { useEffect } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  let tl = gsap.timeline({
    defaults: { duration: 0.3, ease: "power1.in" },
  });

  const moveFunc = () => {
    tl.to(".box1", { x: 200, background: "red" }, 0.4)
      .to(".box2", { x: 200, background: "green" }, 0.2)
      .to(".box3", { x: 200, background: "yellow" }, 0.1);
  };

  useEffect(() => {
    gsap.to(".target", {
      x: -800,
      ease: "none",
      scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "+=2000", // longer scroll distance
        scrub: true, // sync with scroll
        pin: true, // pin the section
        markers: true, // debug markers
      },
    });
  }, []);

  return (
    <>
      <div className="bg-zinc-800 h-screen flex flex-col gap-4 items-center justify-center">
        <div className="box1 h-40 w-40 bg-zinc-900 rounded-lg"></div>
        <div className="box2 h-40 w-40 bg-zinc-900 rounded-lg"></div>
        <div className="box3 h-40 w-40 bg-zinc-900 rounded-lg"></div>
        <button
          onClick={moveFunc}
          className="p-3 bg-sky-400/90 active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl"
        >
          <Plus size={60} />
        </button>
      </div>

      <div className="page2 h-screen bg-[#490b00] flex items-center overflow-hidden">
        <h1 className="target bg-amber-900 text-white text-[50vw] uppercase font-extrabold whitespace-nowrap">
          hello world
        </h1>
      </div>

      <div className="page3 h-screen bg-[#056b1a] flex items-center justify-center">
        <h1 className="text-white text-[10vw] uppercase font-extrabold">
          hello world
        </h1>
      </div>
    </>
  );
};

export default Gsap;
