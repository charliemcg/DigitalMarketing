import React from "react";
import strings from "./strings";
import "./styles.css";

// an individual form input
const getInput = (contactDetails) => {
  return (
    <div id="contact-input-wrapper">
      <label>{contactDetails.label}</label>
      <input type={contactDetails.type} id="contact-input" />
    </div>
  );
};

// a row of the contact form
const getContactRow = (contactDetails) => {
  return <div id="contact-row">{contactDetails.map((e) => getInput(e))}</div>;
};

export default function Contact() {
  return (
    <div id="contact-wrapper">
      <div id="contact-ready">{strings.readyToGo}</div>
      <div id="contact-promo">{strings.getAFree}</div>
      <div id="contact-divider" />
      <div id="contact-form-wrapper">
        <div id="contact-title-wrapper">{strings.getInTouch}</div>
        {getContactRow([
          { label: strings.firstName, type: "text" },
          { label: strings.lastName, type: "text" },
        ])}
        {getContactRow([
          { label: strings.email, type: "email" },
          { label: strings.phone, type: "phone" },
        ])}
        <div id="contact-row">
          <div id="contact-input-wrapper">
            <label>{strings.message}</label>
            <textarea id="contact-textarea" />
          </div>
        </div>
      </div>
      <div id="contact-submit-wrapper">
        <button id="contact-submit-btn">{strings.submit}</button>
      </div>
    </div>
  );
}
