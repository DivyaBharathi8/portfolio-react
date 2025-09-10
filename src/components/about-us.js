import "../assets/style.css";
import Buttons from "./buttons";
import AboutImg from "../assets/images/about.png";

const AboutUs = () => {
  return (
    <div className="about-section p-t-b">
      <div className="about-sec-img">
        <img src={AboutImg} className="about-img" alt="" />
      </div>
      <div className="about-left-section">
        <h2 className="about-heading">About</h2>
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
