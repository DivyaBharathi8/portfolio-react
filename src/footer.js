import "./assets/style.css";
import LinkedInImg from "./assets/images/linkedin.png";
import InstaImg from "./assets/images/insta.png";
import WhatsAppInImg from "./assets/images/whatsapp.png";

const Footer = () => {
  const footerData = [
    { img: LinkedInImg, link: "https://www.linkedin.com/in/divya-bharathi-p/" },
    { img: InstaImg, link: "https://insta.com/" },
    { img: WhatsAppInImg, link: "https://whatsapp.com/" },
  ];
  return (
    <section className="footer-sec">
      <div className="footer-container">
        <div className="footer-box">
          {footerData.map((lists, index) => (
            <div key={index} className="footer-item">
              <a href={lists.link} key={index} target="_blank" rel="noreferrer">
                <img src={lists.img} alt="Images" />
              </a>
            </div>
          ))}
        </div>
        <div className="heading">
          Want to know more about me, tell me about your project or just to say
          hello? Drop me a line and I'll get back as soon as possible.
        </div>
      </div>
    </section>
  );
};

export default Footer;
