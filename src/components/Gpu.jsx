import { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const Gpu = () => {
  const videoRef = useRef();
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.to("#GPU", {
      scrollTrigger: {
        trigger: "#GPU",
        start: "top 75%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section
      id="GPU"
      className="common-padding opacity-0 transform translate-y-10"
    >
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="hiw-title">{t("gpuin1")}</h2>
          <br />
          <h2 className="hiw-title">{t("gpuin2")}</h2>

          <p className="hiw-subtitle">{t("gpuin3")}</p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text ">
              {t("gpute1")} <span className="text-white">{t("gpute2")}</span>.
            </p>

            <p className="hiw-text ">
              {t("gpute3")} <span className="text-white">{t("gpute4")}</span>,
              {t("gpute5")}
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col ">
            <p className="hiw-text">{t("gpute21")}</p>
            <p className="hiw-bigtext">{t("gpute22")}</p>
            <p className="hiw-text">{t("gpute23")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gpu;
