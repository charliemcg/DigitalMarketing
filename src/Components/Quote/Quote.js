import React from "react";
import "./styles.css";
import strings from "./strings";
import CEOImage from "../../Assets/CEOImage.png";
import Desk from "../../Assets/Desk.png";

export default function Quote() {
  return (
    <div id="quote-relativity-wrapper">
      <img src={Desk} id="quote-background-img" />
      <div id="quote-wrapper">
        <div id="quote-left">
          <div id="quote-top">{strings.quote}</div>
          <div id="quote-bottom">{strings.ceo}</div>
        </div>
        <div id="quote-right">
          <img src={CEOImage} alt={strings.ceoImageAlt} />
        </div>
      </div>
    </div>
  );
}
