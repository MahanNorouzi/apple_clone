import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handlevideosourceset = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handlevideosourceset);
    return () => {
      window.removeEventListener("resize", handlevideosourceset);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#herovideo", { opacity: 1, delay: 0.3 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);
  return (
    <section className=" w-full nav-height bg-black ">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div id="herovideo" className=" md:w-10/12 w-9/12 opacity-0">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            {" "}
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className=" flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link className="btn" to="iPhone_15">
          {t("buy")}
        </Link>

        <p className=" font-normal text-xl"> {t("price")}</p>
      </div>
    </section>
  );
};

export default Hero;
