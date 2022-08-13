import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="http://www.instagram.com/alyan_quddoos">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/alyanquddoos111">
          {" "}
          <FaFacebookF className="social" />
        </a>

        <a href="https://www.linkedin.com/in/alyanquddoos111/">
          <TiSocialLinkedin className="social" />
        </a>

        <a href="https://api.whatsapp.com/send?phone=923144441061">
          <BsWhatsapp className="social" />
        </a>
        
        <a href="https://github.com/alyanquddoos111">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
