import macair from "../../public/assets/videos/macair.mp4";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OtherProductes = () => {
  useGSAP(() => {
    gsap.to("#macair", {
      scrollTrigger: {
        trigger: "#macair",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1.5,
      delay: 0.7,
    });

    gsap.to("#macair1", {
      scrollTrigger: {
        trigger: "#macair1",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      delay: 0.3,
    });

    gsap.to("#macairvideo", {
      scrollTrigger: {
        trigger: "#macairvideo",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 10,
      delay: 0.2,
      onComplete: () => {
        const video = document.querySelector("#macairvideo video");
        video.play();
      },
    });

    gsap.to("#macaircta", {
      scrollTrigger: {
        trigger: "#macaircta",
        start: "top 100%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 20,
    });
  }, []);

  return (
    <section className="common-padding">
      <div
        id="macair"
        className="opacity-0 transform translate-y-10 pb-1 common-padding"
      >
        <div className="h-5/6 w-full flex-center flex-col">
          <p
            id="macair1"
            className="text-center text-gray-100 opacity-0 p-5 text-4xl"
          >
            MacBook Air
          </p>
          <div id="macairvideo" className="w-[100vw] opacity-0">
            <video className="pointer-events-none w-screen" muted playsInline>
              <source src={macair} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          id="macaircta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#Highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $1099 or $91.58/month</p>
        </div>
      </div>
    </section>
  );
};

export default OtherProductes;
