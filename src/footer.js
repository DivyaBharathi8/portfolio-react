import { useState } from "react";
import "./assets/style.css";
import LinkedInImg from "./assets/images/linkedin.png";
import InstaImg from "./assets/images/insta.png";
import WhatsAppInImg from "./assets/images/whatsapp.png";
import DetailsContainer from "./components/details-card/details-container";

const Footer = () => {
  const footerData = [
    { img: LinkedInImg },
    { img: InstaImg },
    { img: WhatsAppInImg },
  ];
  return (
    <section className="footer-sec">
      <div className="footer-container">
        <div className="footer-box">
          {footerData.map((lists, index) => (
            <div key={index} className="footer-item">
              <img src={lists.img} alt="Images" />
            </div>
          ))}
        </div>
        <div className="heading">
          Want to know more about me, tell me about your project or just to say
          hello? Drop me a line and I'll get back as soon as possible.
        </div>
        <div className="line"></div>
        <DetailsContainer />
      </div>
    </section>
  );
};

export default Footer;
