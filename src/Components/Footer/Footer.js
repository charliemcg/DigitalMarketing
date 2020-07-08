import React from "react";
import "./styles.css";
import strings from "./strings";
import logoImg from "../../Assets/UncutLogo.png";

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <div id="footer-left">
        <div id="footer-social-wrapper">
          <div id="footer-facebook">f</div>
          <div id="footer-linkedin">Li</div>
        </div>
        <div id="footer-phone">{strings.phone}</div>
        <div id="footer-copyright">
          © {new Date().getFullYear()} {strings.company}
        </div>
      </div>
      <div id="footer-plug">{strings.plug}</div>
      <div id="footer-right">
        <img id="footer-logo" src={logoImg} alt={strings.logoAlt} />
      </div>
    </div>
  );
}
