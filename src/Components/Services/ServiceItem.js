import React from "react";
import "./styles.css";
import strings from "./strings";

export default function ServiceItem(props) {
  const { title, description } = props.details;
  return (
    <div id="service-item-wrapper">
      <div id="service-item-title">{title}</div>
      <div id="service-item-description">{description}</div>
    </div>
  );
}
