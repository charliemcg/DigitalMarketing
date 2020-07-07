import React from "react";
import strings from "./strings";
import "./styles.css";
import logoImg from "../../Assets/UncutLogo.png";

export default function Header() {
  return (
    <div id="header-wrapper">
      <img src={logoImg} alt="Company Logo" />
      <div id="header-nav-bar">
        <div className="header-link">{strings.home}</div>
        <div className="header-link">{strings.services}</div>
        <div className="header-link">{strings.caseStudies}</div>
        <div className="header-link">{strings.testimonials}</div>
        <div className="header-link">{strings.contact}</div>
      </div>
    </div>
  );
}
