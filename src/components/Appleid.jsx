import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import BlackII6KAppleID from "../../public/assets/images/BlackII6KAppleID.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useTranslation } from "react-i18next";

export const AppleID = () => {
  const [signinstart, setsigninstart] = useState("flex");
  const [Signining, setSignining] = useState("none");
  const [Signuping, setSignuping] = useState("none");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValid1, setIsFormValid1] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isCaptchaValid1, setIsCaptchaValid1] = useState(false);
  const { t } = useTranslation();
  function signin() {
    setsigninstart("none");
    setSignining("flex");
    setSignuping("none");
    setEmail("");
    setPassword("");
  }
  function Signup() {
    setSignining("none");
    setSignuping("flex");
    setEmail("");
    setPassword("");
    setNumber("");
  }

  useEffect(() => {
    const isValidLength = password.length >= 8 && password.length <= 45;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValidPassword = isValidLength && hasLetter && hasNumber;

    if (password !== "") {
      if (hasLetter && hasNumber === true) {
        setError1(false);
      } else {
        setError1(true);
      }

      if (isValidLength === true) {
        setError2(false);
      } else {
        setError2(true);
      }
    } else {
      setError1(false);
      setError2(false);
    }
    setIsFormValid(isValidPassword);
  }, [password]);
  useEffect(() => {
    const isValidLength = password.length >= 8 && password.length <= 45;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValidPassword = isValidLength && hasLetter && hasNumber;
    const startsWithZero = number.startsWith("0");
    const isnumberValidLength = number.length >= 11 && number.length <= 12;
    const isNumeric = /^\d+$/.test(number);
    const isvalidNumber = startsWithZero && isnumberValidLength && isNumeric;
    if (password !== "") {
      if (hasLetter && hasNumber === true) {
        setError1(false);
      } else {
        setError1(true);
      }
      if (isValidLength === true) {
        setError2(false);
      } else {
        setError2(true);
      }
    } else {
      setError1(false);
      setError2(false);
    }
    if (number !== "") {
      if (startsWithZero === true) {
        setError3(false);
      } else {
        setError3(true);
      }
      if (isnumberValidLength === true) {
        setError4(false);
      } else {
        setError4(true);
      }
    } else {
      setError3(false);
      setError4(false);
    }

    setIsFormValid1(isValidPassword && isvalidNumber);
  }, [password, number]);

  const handleCaptchaChange = (value) => {
    setIsCaptchaValid(true);
  };
  const handleCaptchaChange1 = (value) => {
    setIsCaptchaValid1(true);
  };
  const handlesignin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logged in");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setError(true);
        setEmail("");
        setPassword("");
      });
  };
  const handlesignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user created");
        setEmail("");
        setPassword("");
        setNumber("");
        setsigninstart("none");
        setSignining("flex");
        setSignuping("none");
      })
      .catch((error) => {
        console.log("error");

        setError5(true);
        setEmail("");
        setPassword("");
        setNumber("");
      });
  };
  useEffect(() => {
    if (Signining === "flex") {
      gsap.to("#signin_grow", { opacity: 1, y: -20, delay: 1 });
      gsap.to(".signin_fade", {
        opacity: 1,
        delay: 0.3,
        duration: 1,
        stagger: 0.5,
      });
    } else {
      gsap.to("#signin_grow", { opacity: 0, y: -20, delay: 1 });
    }
    if (Signuping === "flex") {
      gsap.to("#siup_fade", {
        opacity: 1,
        delay: 0.3,
        duration: 0.5,
        stagger: 0.5,
      });
    } else {
      gsap.to("#siup_fade", {
        opacity: 0,
        delay: 0.3,
        duration: 0.5,
        stagger: 0.5,
      });
    }
  }, [Signining, Signuping]);

  useGSAP(() => {
    gsap.to(".g_fade", { opacity: 1, delay: 0.3, duration: 1, stagger: 0.2 });
    gsap.to(".g_grow", { opacity: 1, y: -20, delay: 1 });
  }, []);
  return (
    <>
      <Navbar />

      <section className="w-full nav-height   ">
        <div className="  w-full flex-center flex-col ">
          <div className=" w-screen flex flex-col justify-center items-center ">
            {" "}
            <div className=" flex justify-center opacity-0  g_fade">
              <img
                className=" "
                src={BlackII6KAppleID}
                width={650}
                height={500}
                alt=""
              />
            </div>
            <div
              style={{ display: signinstart }}
              className="flex justify-center items-center flex-col p-10 opacity-0  g_fade"
            >
              <h1 className=" text-2xl text-center text-gray-100 pb-8 md:text-xl md:w-10/12 w-9/12">
                {t("oneacc")}
              </h1>
              <p className=" text-sm text-center w-10/12 text-gray-200 opacity-0  g_fade ">
                {t("oneaccinfo")}
              </p>
            </div>
            <div
              style={{ display: signinstart }}
              className="g_grow  flex justify-center items-center translate-y-20 opacity-0"
            >
              <button
                className="btn flex justify-center items-center "
                onClick={signin}
              >
                {t("oneaccbtn")}
              </button>
            </div>
          </div>
          <div
            id="signin_grow"
            className="w-4/6 justify-center items-center opacity-0"
            style={{ display: Signining }}
          >
            <div className=" w-fit">
              <div className=" flex justify-center items-center">
                <form
                  className="flex justify-center items-center flex-col"
                  onSubmit={handlesignin}
                >
                  <div className="flex w-fit justify-center items-center p-5">
                    <input
                      className=" signin_fade bg-zinc w-[55vw] lg:w-[25vw] flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="email"
                      value={email}
                      placeholder={t("email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center p-5">
                    <input
                      id=""
                      className="signin_fade bg-zinc  w-[55vw] lg:w-[25vw]  flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="password"
                      placeholder={t("password")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error1 && (
                      <span className=" text-red-600 text-sm p-3 ">
                        {t("er1")}
                      </span>
                    )}
                    {error2 && (
                      <span className=" text-red-600 text-sm p-1 ">
                        {t("er2")}
                      </span>
                    )}
                  </div>
                  <div className=" signin_fade flex justify-center">
                    <ReCAPTCHA
                      sitekey="6LfgglUqAAAAAJqyrQgIUMVL-2YkznGVbfNSzE-W"
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <div className="mt-6 p-5 flex items-center justify-center gap-x-6">
                    <button
                      className="bg-zinc signin_fade w-full rounded-md text-sm font-semibold leading-6 text-gray-400 cursor-pointer  p-3 disabled:bg-slate-200 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={!isFormValid || !isCaptchaValid}
                    >
                      {" "}
                      {t("oneaccbtn")}
                    </button>
                  </div>

                  {error && (
                    <span className=" justify-center flex text-center text-red-600 text-sm p-2 ">
                      {t("er")}
                    </span>
                  )}
                  <div>
                    <hr className="p-2" />
                  </div>
                  <div className="flex justify-evenly">
                    <div>
                      <p>{t("creacc")}</p>
                    </div>{" "}
                    <Link
                      className="px-3 text-blue cursor-pointer signin_fade"
                      onClick={Signup}
                    >
                      {t("signup")}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="w-9/12 justify-center items-center"
            style={{ display: Signuping }}
          >
            <div className="">
              <div className=" flex justify-center items-center">
                <form
                  className="flex justify-center items-center flex-col"
                  onSubmit={handlesignup}
                >
                  <div className="flex justify-center items-center p-5">
                    <input
                      className="bg-zinc w-[55vw] lg:w-[25vw]   flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="email"
                      value={email}
                      placeholder={t("email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center p-5">
                    <input
                      className="bg-zinc  w-[55vw] lg:w-[25vw]  flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="password"
                      value={password}
                      placeholder={t("password")}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error1 && (
                      <span className=" text-red-600 text-sm p-3">
                        {t("er1")}
                      </span>
                    )}
                    {error2 && (
                      <span className=" text-red-600 text-sm p-3">
                        {t("er2")}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col justify-center items-center pb-6 p-5">
                    <input
                      className="bg-zinc opacity-0   w-[55vw] lg:w-[25vw]   flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      type="text"
                      id="siup_fade"
                      value={number}
                      placeholder={t("number")}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    {error3 && (
                      <span className=" text-red-600 text-sm p-3">
                        {t("er3")}
                      </span>
                    )}{" "}
                    {error4 && (
                      <span className=" text-red-600 text-sm p-3">
                        {t("er4")}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    <ReCAPTCHA
                      sitekey="6LfgglUqAAAAAJqyrQgIUMVL-2YkznGVbfNSzE-W"
                      onChange={handleCaptchaChange1}
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-x-6 p-5">
                    <button
                      className="bg-zinc w-full rounded-md text-sm font-semibold leading-6 text-gray-400 cursor-pointer  p-3 disabled:bg-slate-200 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={!isFormValid1 || !isCaptchaValid1}
                    >
                      {" "}
                      {t("signup")}
                    </button>
                  </div>{" "}
                  {error5 && (
                    <span className=" text-red-600 text-sm p-3">
                      {t("er5")}
                    </span>
                  )}
                  <div>
                    <hr className="p-2" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div>
                      <p>{t("haveacc")}</p>
                    </div>{" "}
                    <a
                      className="px-3 text-blue cursor-pointer"
                      onClick={signin}
                    >
                      {t("oneaccbtn")}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" common-padding w-full flex flex-col items-center lg:flex-row justify-evenly  ">
            <div className="bg-zinc   w-9/12 rounded-3xl p-5 mb-20  lg:mb-0 lg:w-[40%] ">
              {" "}
              <div className="">
                <h2 className="p-3 text-3xl ">{t("box1h")}</h2>
              </div>{" "}
              <div>
                <p className="p-5 "> {t("box1p")}</p>
              </div>{" "}
            </div>
            <div className="bg-zinc w-9/12 rounded-3xl p-5 mb-20  lg:mb-0 lg:w-[40%]">
              {" "}
              <div>
                <h2 className="p-5 text-3xl">{t("box2h")}</h2>
              </div>{" "}
              <div>
                <p className="p-5 "> {t("box2p")}</p>
              </div>{" "}
            </div>
          </div>
          <div className=" common-padding flex flex-col justify-start items-center bg-zinc">
            <div className="lg:h-[63vh] w-9/12 flex justify-start items-start flex-col ">
              {" "}
              <div>
                <h2 className="p-2 text-2xl">{t("qh1")}</h2>
                <p className="text-md p-3 text-gray-100">{t("ap1")}</p>
              </div>
              <div>
                <h2 className="p-2 text-2xl">{t("qh2")}</h2>
                <p className="text-md p-3 text-gray-100">{t("ap2")}</p>
              </div>
              <div>
                <h2 className="p-2 text-2xl">{t("qh3")}</h2>
                <p className="text-md p-3 text-gray-100">{t("ap3")}</p>
              </div>
              <p className="text-md p-3 text-blue cursor-pointer">{t("faq")}</p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
