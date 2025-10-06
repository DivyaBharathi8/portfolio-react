import "../assets/style.css";
import Buttons from "./buttons";
import AboutImg from "../assets/images/about.png";

const AboutUs = ({ id }) => {
  return (
    <div className="about-section p-t-b" id={id}>
      <div className="about-sec-img">
        <img src={AboutImg} className="about-img" alt="" />
      </div>
      <div className="about-left-section">
        <h2 className="about-heading">About</h2>
        <p>
          I am a UI/UX and Front-End Web Developer specializing in crafting
          interactive and visually appealing websites and web applications. I
          focus on delivering seamless, cohesive user experiences that engage
          and delight users. Leveraging HTML, CSS, and modern design tools, I
          create responsive, user-friendly interfaces that adapt flawlessly
          across devices and screen sizes.
        </p>
        <Buttons />
      </div>
    </div>
  );
};

export { AboutUs };
