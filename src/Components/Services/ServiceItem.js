import React from "react";
import "./styles.css";

export default function ServiceItem(props) {
  const { logo, title, description } = props.details;
  return (
    <div id="service-item-wrapper">
      <img id="service-item-img" src={logo} alt={`${title} icon`} />
      <div id="service-item-title">{title}</div>
      <div id="service-item-description">{description}</div>
    </div>
  );
}
