import React, { useState, useRef } from "react";
import strings from "./strings";
import "./styles.css";
import validator from "validator";

export default function Contact() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const [formErrors, updateErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null,
  });

  const onSubmit = () => {
    const { errors } = strings;
    let newErrors = {};
    // first name
    validator.isEmpty(firstnameRef.current.value, {
      ignore_whitespace: true,
    }) && (newErrors = { ...newErrors, firstName: errors.firstNameRequired });
    // last name
    validator.isEmpty(lastnameRef.current.value, {
      ignore_whitespace: true,
    }) && (newErrors = { ...newErrors, lastName: errors.lastNameRequired });
    // email
    validator.isEmpty(emailRef.current.value, {
      ignore_whitespace: true,
    })
      ? (newErrors = { ...newErrors, email: errors.emailRequired })
      : !validator.isEmail(emailRef.current.value) &&
        (newErrors = { ...newErrors, email: errors.emailInvalid });
    // phone
    validator.isAlpha(phoneRef.current.value) &&
      (newErrors = { ...newErrors, phone: errors.phoneInvalid });
    // message
    validator.isEmpty(messageRef.current.value, {
      ignore_whitespace: true,
    }) && (newErrors = { ...newErrors, message: errors.messageRequired });
    updateErrors(newErrors);
  };

  // an individual form input
  const getInput = (contactDetails) => {
    const { label, type, ref, error } = contactDetails;
    return (
      <div id="contact-input-wrapper">
        <label>{label}</label>
        <input type={type} id="contact-input" ref={ref} maxLength="25" />
        <div id="contact-error">{formErrors[error]}</div>
      </div>
    );
  };

  // a row of the contact form
  const getContactRow = (contactDetails) => {
    return <div id="contact-row">{contactDetails.map((e) => getInput(e))}</div>;
  };

  return (
    <div id="contact-wrapper">
      <div id="contact-ready">{strings.readyToGo}</div>
      <div id="contact-promo">{strings.getAFree}</div>
      <div id="contact-divider" />
      <div id="contact-form-wrapper">
        <div id="contact-title-wrapper">{strings.getInTouch}</div>
        {getContactRow([
          {
            label: strings.firstName,
            type: "text",
            ref: firstnameRef,
            error: "firstName",
          },
          {
            label: strings.lastName,
            type: "text",
            ref: lastnameRef,
            error: "lastName",
          },
        ])}
        {getContactRow([
          {
            label: strings.email,
            type: "email",
            ref: emailRef,
            error: "email",
          },
          {
            label: strings.phone,
            type: "phone",
            ref: phoneRef,
            error: "phone",
          },
        ])}
        <div id="contact-row">
          <div id="contact-input-wrapper">
            <label>{strings.message}</label>
            <textarea id="contact-textarea" ref={messageRef} maxLength="2500" />
            <div id="contact-error">{formErrors.message}</div>
          </div>
        </div>
      </div>
      <div id="contact-submit-wrapper">
        <button id="contact-submit-btn" onClick={onSubmit}>
          {strings.submit}
        </button>
      </div>
    </div>
  );
}
