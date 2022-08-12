import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/alyanquddoos111/"
          className="contact linkedin"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin
            <span>Contact me on Linkedin</span>
          </h2>
        </a>
        
        <a
          href="https://api.whatsapp.com/send?phone=923144441061"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>Send me a message</span>
          </h2>
        </a>

        <a href="http://www.instagram.com/alyan_quddoos" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram 
            <span>Contact me on Instagram</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
