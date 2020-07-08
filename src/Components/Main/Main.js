import React from "react";
import "./styles.css";
import strings from "./strings";
import skylineImg from "../../Assets/Skyline.png";

export default function Main() {
  return (
    <div id="main-wrapper">
      <img src={skylineImg} alt={strings.skylineAlt} id="main-img" />
      <div id="main-overlay-wrapper">
        <div id="main-quote">"{strings.weMakePeople}"</div>
        <button id="main-contact-btn">{strings.getInTouch}</button>
      </div>
    </div>
  );
}
