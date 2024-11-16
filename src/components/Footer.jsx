import { footerLinks } from "../constants";
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-5 sm:px-10 px-5 bg-zinc">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            {t("MoreWaysToShop")}{" "}
            <span className="underline text-blue">
              {t("FindanAppleStore")}{" "}
            </span>
            {t("or1")}{" "}
            <span className="underline text-blue"> {t("otherretailer")}</span>{" "}
            {t("nearyou")}
          </p>
          <p className="font-semibold text-gray text-xs">
            {t("or")} {t("call")}
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copright @ 2024 Apple Inc. All rights reserved
          </p>
          <div className="flex flex-wrap pt-1">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray-500 text-xs ">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-1 sm:mx-2"> | </span>
                )}
              </p>
            ))}
          </div>

          <div className="flex-nowrap">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
