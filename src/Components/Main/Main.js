import React from "react";
import "./styles.css";
import strings from "./strings";
import skylineImg from "../../Assets/Skyline.png";
import Typewriter from "typewriter-effect";

export default function Main() {
  return (
    <div id="main-wrapper">
      <img src={skylineImg} alt={strings.skylineAlt} id="main-img" />
      <div id="main-overlay-wrapper">
        <div id="main-quote">
          <Typewriter
            options={{
              strings: [strings.weMakePeople],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div id="main-btn-wrapper">
          <button
            id="main-contact-btn"
            onClick={() =>
              document
                .getElementById("contact-wrapper")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {strings.getInTouch}
          </button>
        </div>
      </div>
    </div>
  );
}
