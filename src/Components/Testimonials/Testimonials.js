import React from "react";
import "./styles.css";
import strings from "./strings";

export default function Testimonials() {
  return (
    <div id="testimonials-wrapper">
      {strings.map((testimonial) => {
        return (
          <div id="testimonial-item">
            <div id="testimonial-company">{testimonial.company}</div>
            <div id="testimonial-description">{testimonial.description}</div>
          </div>
        );
      })}
    </div>
  );
}
