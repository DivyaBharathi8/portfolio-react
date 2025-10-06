import React from "react";
import "../form/contact-form.css";
import ContactImg from "../../assets/form-img.webp";

const ContactForm = ({ id }) => (
  <div className="container">
    <div className="contact-container" id={id}>
      <div className="contact-form-section">
        <h2>
          GET IN <span className="highlight">TOUCH</span>
        </h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Phone Number" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Enter Your Email - ID" />
            <input type="text" placeholder="Message" />
          </div>
          <button type="submit" className="send-btn">
            SEND
          </button>
        </form>
      </div>
      <div className="contact-image-section">
        <img src={ContactImg} alt="Contact illustration" />
      </div>
    </div>
  </div>
);

export default ContactForm;
