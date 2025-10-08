import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../form/contact-form.css";
import ContactImg from "../../assets/form-img.webp";

const ContactForm = ({ id }) => {
  var [dataForm, setData] = useState({
    userName: "",
    userPhone: "",
    userMail: "",
    usermessage: "",
  });

  const { userName, userPhone, userMail, usermessage } = dataForm;

  const changeHandler = (e) => {
    setData({ ...dataForm, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Prepare template parameters
    const templateParams = {
      user_name: userName,
      user_phone: userPhone,
      user_email: userMail,
      message: usermessage,
    };

    emailjs
      .send(
        "service_anyjxvr", // Your Service ID
        "template_qkg6sbd", // Your Template ID
        templateParams,
        "b_sI_nVHFfRKt3yjc" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setData({
            userName: "",
            userPhone: "",
            userMail: "",
            usermessage: "",
          }); // Clear form
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="container">
      <div className="contact-container" id={id}>
        <div className="contact-form-section">
          <h2>
            GET IN <span className="highlight">TOUCH</span>
          </h2>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <input
                type="text"
                name="userName"
                placeholder="Enter Your Name"
                value={userName}
                onChange={changeHandler}
                required
              />
              <input
                type="number"
                name="userPhone"
                placeholder="Enter Your Phone Number"
                value={userPhone}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="userMail"
                placeholder="Enter Your Email - ID"
                value={userMail}
                onChange={changeHandler}
                required
              />
              <input
                type="text"
                name="usermessage"
                placeholder="Message"
                value={usermessage}
                onChange={changeHandler}
                required
              />
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
};

export default ContactForm;
