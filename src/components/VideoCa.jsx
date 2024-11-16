import { hightlightsSlides } from "../constants/index";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCa = () => {
  const videoref = useRef([]);
  const videospanref = useRef([]);
  const videodivref = useRef([]);
  const [video, setvideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setloadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",

      onUpdate: function () {
        console.log(
          "Animating... Transform:",
          this.targets()[0].style.transform
        );
      },
      onComplete: function () {
        console.log("Animation completed for videoId:", videoId);
      },
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setvideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoref.current[videoId].pause();
      } else {
        startPlay && videoref.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleloadedmetadata = (i, e) => setloadedData((pre) => [...pre, e]);

  useEffect(() => {
    let currentprogres = 0;
    let span = videospanref.current;

    // eslint-disable-next-line no-empty
    if (span[videoId]) {
    }
    let anim = gsap.to(span[videoId], {
      onUpdate: () => {
        const progress = Math.ceil(anim.progress() * 100);
        if (progress !== currentprogres) {
          currentprogres = progress;
          gsap.to(videodivref.current[videoId], {
            width:
              window.innerWidth < 760
                ? "10vw"
                : window.innerWidth < 1200
                ? "10vw"
                : "4vw",
          });
          gsap.to(span[videoId], {
            width: `${currentprogres}%`,
            backgroundColor: "white",
          });
        }
      },
      onComplete: () => {
        if (isPlaying) {
          gsap.to(videodivref.current[videoId], {
            width: "12px",
          });
          gsap.to(span[videoId], {
            backgroundColor: "#afafaf",
          });
        }
      },
    });
    if (videoId === 0) {
      anim.restart();
    }
    const animupdate = () => {
      anim.progress(
        videoref.current[videoId].currentTime /
          hightlightsSlides[videoId].videoDuration
      );
    };
    if (isPlaying) {
      gsap.ticker.add(animupdate);
    } else {
      gsap.ticker.remove(animupdate);
    }
  }, [videoId, startPlay, isPlaying]);

  const handleprocess = (type, i) => {
    switch (type) {
      case "video-end":
        setvideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setvideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setvideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setvideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setvideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <div className=" flex items-center dir-ltr" style={{ direction: "ltr" }}>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className=" sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } poiner-events-none }`}
                  ref={(el) => (videoref.current[i] = el)}
                  onEnded={() => {
                    i !== 3
                      ? handleprocess("video-end", i)
                      : handleprocess("video-last");
                  }}
                  onPlay={() => {
                    setvideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => handleloadedmetadata(i, e)}
                >
                  {" "}
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className=" absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className=" md:text-2xl text-xl font-medium">
                    {" "}
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" relative flex-center mt-10">
        <div className=" flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoref.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videodivref.current[i] = el)}
              className=" m-2 w-3 h-3 bg-gray-200  rounded-full relative cursor-pointer"
            >
              <span
                ref={(el) => (videospanref.current[i] = el)}
                className=" absolute h-full w-full rounded-full"
              ></span>
            </span>
          ))}
        </div>
        <button className=" control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt=""
            onClick={
              isLastVideo
                ? () => handleprocess("video-reset")
                : !isPlaying
                ? () => handleprocess("play")
                : () => handleprocess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCa;
