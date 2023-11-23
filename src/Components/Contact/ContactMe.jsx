import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import phone from "../../assets/Images/phone-call.png";
import email from "../../assets/Images/email.png";

export default function ContactMe() {
  const form = useRef();
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9q68fs",
        "template_hdw4ebb",
        form.current,
        "n01DueOdBya9LfMGt"
      )
      .then(
        (result) => {
          form.current.reset();
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
          }, 2500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowModal(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="contact-section" id="contact">
      <h1 className="heading">{t("CONTACT.heading")}</h1>

      <img className="phone-img" alt="phone pic" src={phone}></img>
      <img className="email-img" alt="phone pic" src={email}></img>

      <img className="phone-img sec" alt="phone pic" src={phone}></img>
      <img className="email-img sec" alt="phone pic" src={email}></img>

      <div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input
                type="text"
                placeholder={t("CONTACT.first-name-label")}
                name="name"
                required
              />
              <input
                type="text"
                placeholder={t("CONTACT.last-name-label")}
                name="last-name"
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder={t("CONTACT.email-address-label")}
                name="user-email"
                required
              />

              <input
                type="text"
                placeholder={t("CONTACT.email-subject-label")}
                name="email-subject"
                required
              />
            </div>

            <textarea
              cols="30"
              rows="10"
              placeholder={t("CONTACT.message-area-label")}
              name="message"
              required
            ></textarea>
            <input
              type="submit"
              value={t("CONTACT.button-text")}
              className="btns"
            />
          </form>
        </div>

        {showModal && (
          <div
            className={`modal ${showModal ? "show" : ""}`}
            onClick={() => setShowModal(false)}
          >
            <div className={`modal-content ${showModal ? "show" : ""}`}>
              <p>{t("CONTACT.modal-message")}</p>

              <button className="btns" onClick={() => setShowModal(false)}>
                {t("CONTACT.modal-close-button")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
