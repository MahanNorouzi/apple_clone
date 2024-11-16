import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero162 from "../../public/assets/videos/hero162.mp4";
import hero16small from "../../public/assets/videos/hero16small.mp4";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero16 = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? hero16small : hero162
  );

  const handleVideoSourceSet = () => {
    setVideoSrc(window.innerWidth < 760 ? hero16small : hero162);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSourceSet);
    return () => {
      window.removeEventListener("resize", handleVideoSourceSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero16", {
      scrollTrigger: {
        trigger: "#i16pro",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 1.5,
      delay: 0.7,
    });
    gsap.to("#herovideo", {
      scrollTrigger: {
        trigger: "#i16pro",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      delay: 0.3,
    });
    gsap.to("#cta1", {
      scrollTrigger: {
        trigger: "#i16pro",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 50,
      delay: 2,
    });
    gsap.to("#i16pro", {
      scrollTrigger: {
        trigger: "#i16pro",
        start: "top 55%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section className="w-full pb-2  bg-black relative">
      <div
        id="i16pro"
        className=" w-full flex-center flex-col opacity-0 transform translate-y-10 common-padding  "
      >
        <p id="hero16" className="hero-title opacity-0 p-5">
          iPhone 16 Pro
        </p>
        <div id="herovideo" className="md:w-10/12 w-9/12 opacity-0">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta1"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <Link className="btn" to="iPhone_15">
            Buy
          </Link>
          <p className="font-normal text-xl"> from $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero16;
