import React from "react";
import "./styles.css";
import strings from "./strings";
import logoImg from "../../Assets/UncutLogo.png";
import facebookLogo from "../../Assets/Facebook.png";
import linkedinLogo from "../../Assets/Linkedin.png";

export default function Footer() {
  const socialArr = [
    { id: "footer-social", src: facebookLogo, alt: strings.facebookAlt },
    { id: "footer-social", src: linkedinLogo, alt: strings.linkedinAlt },
  ];

  return (
    <div id="footer-wrapper">
      <div id="footer-left">
        <div id="footer-social-wrapper">
          {socialArr.map((icon, i) => {
            const { id, src, alt } = icon;
            return (
              <a key={i} href="#">
                <img id={id} src={src} alt={alt} />
              </a>
            );
          })}
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
