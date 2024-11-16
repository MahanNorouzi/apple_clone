import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCa from "./VideoCa";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const { t } = useTranslation();
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });

    gsap.to("#Highlights", {
      scrollTrigger: {
        trigger: "#Highlights",
        start: "top 50%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section
      id="Highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc opacity-0 transform translate-y-10 dir-ltr"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            {t("highlight")}
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <a className="link" href="">
              {t("film")}
            </a>
            <a className="link" href="">
              {t("event")}
            </a>
          </div>
        </div>
        <VideoCa />
      </div>
    </section>
  );
};

export default Highlights;
