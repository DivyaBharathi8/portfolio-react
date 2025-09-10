import "../assets/style.css";
import Buttons from "./buttons";
import AboutImg from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className="banner-section flex-center">
      <div className="about-sec-img">
        <img src={AboutImg} className="about-img" alt="" />
      </div>
      <div className="left-section p-50">
        <h2 className="designation">
          <span>About</span>
        </h2>
        <p>
          I am a UI/UX and Front-End Web Developer, specializing in applying
          interactive and visual design principles to websites and web
          applications. My focus is on creating seamless, cohesive user
          experiences. Using HTML, CSS, and various design tools, I build
          responsive, user-friendly designs that adapt to different devices and
          screen sizes.
        </p>
        <Buttons />
      </div>
    </div>
  );
};

export { AboutUs };
