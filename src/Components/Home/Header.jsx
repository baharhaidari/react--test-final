import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import CV from "../../CV/Bahar Haidari.pdf";
import profile from "../../assets/Images/profi.jpg";
import "./Header.css";

function Header() {
  ScrollReveal({
    reset: true,
    distance: "70px",
    duration: 2500,
    delay: 200,
  });

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".home-image", {
      origin: "bottom",
    });
  }, []);

  const { t } = useTranslation();

  return (
    <section id="home" className="homeSection">
      <div className="home-content">
        <div className="contents">
          <h3>{t("HEADER.greet")}</h3>
          <h1>{t("HEADER.name")}</h1>
          <h3 className="profession">{t("HEADER.profession")}</h3>
          <p>{t("HEADER.desc")}</p>
        </div>

        <div className="buttons-containers">
          <a href={CV} download="Bahar Haidari Resume">
            <button className="btns btn-download">
              <span className="btn-icons">
                <i className="bx bxs-download"></i>
              </span>

              <span className="btn-text">{t("HEADER.cv-button")} </span>
            </button>
          </a>

          <a href="#contact">
            <button className="btns ">
              <span className="btn-icons">
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <span className="btn-text">{t("HEADER.contact-button")} </span>
            </button>
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profile} className="img" alt={t("HEADER.image-alt")}></img>
      </div>
    </section>
  );
}

export default Header;
