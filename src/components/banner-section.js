import React from "react";
import "../assets/style.css";
import Buttons from "./buttons";
import BannerImg from "../assets/images/Banner.png";

export default function BannerSection() {
  return (
    <div className="banner-section flex-center container">
      <div className="left-section">
        <span className="hello-text">Hello It’s Me</span>
        <h1>Divya Bharathi</h1>
        <div className="designation">
          And I’m a <span>UI/UX Developer</span>
        </div>
        <p>
          I specialize in designing and developing responsive, user-friendly
          websites and web applications that combine intuitive interfaces with
          seamless user experiences. I leverage HTML, CSS, JavaScript, and
          modern frameworks to deliver visually appealing and high-performing
          digital solutions.
        </p>
        <Buttons />
      </div>
      <div
        className="right-section"
        style={{ backgroundImage: `url(${BannerImg})` }}
      ></div>
    </div>
  );
}
