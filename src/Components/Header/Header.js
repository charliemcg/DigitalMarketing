import React from "react";
import strings from "./strings";
import "./styles.css";
import logoImg from "../../Assets/UncutLogo.png";

export default function Header() {
  return (
    <div id="header-wrapper">
      <img src={logoImg} alt="Company Logo" />
      <div id="header-nav-bar">
        {strings.links.map((string) => (
          <div className="header-link">{string}</div>
        ))}
      </div>
    </div>
  );
}
