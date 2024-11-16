import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useTranslation } from "react-i18next";
const Features = () => {
  const { t } = useTranslation();
  useGSAP(() => {
    gsap.to("#Features_title", { opacity: 1, y: 0 });
    gsap.to(".g_grow", { opacity: 1, y: 0 });
    gsap.to(".g_text", { opacity: 1, y: 0 });
    gsap.to("#Features", {
      ScrollTrigger: {
        trigger: "#Features",
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section
      id="Features"
      className="h-full common-padding bg-zinc relative overflow-hidden opacity-0 transform translate-y-10"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="Features_title" className="section-heading ">
            {t("dive")}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-6xl font-semibold"> {t("bs")}</h2>
            <h2 id="neon" className="text-7xl lg:text-8xl  font-semibold">
              {" "}
              {t("tiu")}
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className=" relative h-[50vh] w-full flex items-center">
              <video
                id="explorevideo"
                playsInline
                autoPlay
                muted
                className="w-full h-full object-cover object-center"
                preload="none"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className=" overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt=""
                    className=" feature-video g_grow"
                  />
                </div>
                <div className=" overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt=""
                    className=" feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center ">
                  <p className="feature-text g_text">
                    {t("fp1")} {""}
                    <span className="text-white">{t("fp12")}</span>
                    {t("fp13")}
                    <span className="text-white">{t("fp14")}</span>
                  </p>
                </div>
                <div className="flex-1 flex-center ">
                  <p className="feature-text g_text">
                    {t("fp2")} {""}
                    <span className="text-white">{t("fp22")} </span>
                    {t("fp23")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
