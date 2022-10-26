import { useTranslation } from "react-i18next";

import "./Hero.scss";
import heroImg from "../../assets/hero-img.jpg";

import Header from "../header/Header";

import { IoArrowDown } from "react-icons/io5";

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />
      <div className="hero">
        <div className="container container--hero grid grid--2-cols">
          <div className="hero__text-box">
            <h1 className="heading-primary">{t("Hero.title")}</h1>
            <p className="hero__description">{t("Hero.description")}</p>
            <div className="btns">
              <a className="btn" href="#">
                {t("Hero.btn1")}
              </a>
              <a className="btn btn--secondary" href="#">
                {t("Hero.btn2")}
                <IoArrowDown />
              </a>
            </div>
          </div>
          <div className="hero__img-box">
            <img className="hero__img" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
