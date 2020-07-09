import React from "react";
import "./styles.css";
import strings from "./strings";
import LogoImg from "../../Assets/Logo.png";

export default function Testimonials() {
  return (
    <div id="testimonials-wrapper">
      {strings.testimonials.map((testimonial) => {
        return (
          <div id="testimonial-item">
            <div id="testimonial-logo-wrapper">
              <img id="testimonial-logo" src={LogoImg} alt={strings.logoAlt} />
            </div>
            <div id="testimonial-company">{testimonial.company}</div>
            <div id="testimonial-description">{testimonial.description}</div>
          </div>
        );
      })}
    </div>
  );
}
