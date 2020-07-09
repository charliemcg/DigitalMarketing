import React from "react";
import "./styles.css";
import strings from "./strings";
import logoImg from "../../Assets/UncutLogo.png";
import facebookLogo from "../../Assets/Facebook.png";
import linkedinLogo from "../../Assets/Linkedin.png";

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <div id="footer-left">
        <div id="footer-social-wrapper">
          <img
            id="footer-facebook"
            src={facebookLogo}
            alt={strings.facebookAlt}
          />
          <img
            id="footer-linkedin"
            src={linkedinLogo}
            alt={strings.linkedinAlt}
          />
        </div>
        <div id="footer-details">
          <div id="footer-phone">{strings.phone}</div>
          <div id="footer-copyright">
            © {new Date().getFullYear()} {strings.company}
          </div>
        </div>
      </div>
      <div id="footer-plug">
        {strings.websiteBy}
        {"\u2004"}
        <span style={{ fontWeight: "bold" }}>{strings.myName}</span>
      </div>
      <div id="footer-right">
        <img id="footer-logo" src={logoImg} alt={strings.logoAlt} />
      </div>
    </div>
  );
}
