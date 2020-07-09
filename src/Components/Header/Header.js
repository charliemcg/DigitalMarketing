import React from "react";
import strings from "./strings";
import "./styles.css";
import logoImg from "../../Assets/UncutLogo.png";

export default function Header() {
  return (
    <div id="header-wrapper">
      <img src={logoImg} alt="Company Logo" />
      <div id="header-right">
        <div id="header-phone">{strings.phone}</div>
        <div id="header-navbar">
          {strings.links.map((string) => (
            <div className="header-link">{string}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
