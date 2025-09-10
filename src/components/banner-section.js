import React from "react";
import "../assets/style.css";
import Buttons from "./buttons";
import BannerImg from "../assets/images/Banner.png";

export default function BannerSection() {
  return (
    <div className="banner-section flex-center">
      <div className="left-section">
        <span className="hello-text">Hello It’s Me</span>
        <h1>Divya Bharathi</h1>
        <div className="designation">
          And I’m a <span>UI/UX Developer</span>
        </div>
        <p>
          Hi, I’m a UI/UX Developer. I create intuitive interfaces and deliver
          smooth, user-focused digital experiences. Hi, I’m a UI/UX Developer. I
          create intuitive interfaces and deliver smooth, user-focused digital
          experiences.
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
