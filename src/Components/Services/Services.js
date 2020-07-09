import React from "react";
import "./styles.css";
import strings from "./strings";
import Carousel from "./Carousel";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <div id="services-wrapper">
      <div id="services-first-paragraph">{strings.nobodyKnowsYourBusiness}</div>
      <div id="services-second-paragraph">{strings.thatsWhatWeDo}</div>
      <div id="services-third-paragraph">{strings.weCreateCompletely}</div>
      <Carousel />
      <div id="service-items-wrapper">
        {strings.serviceItemArr.map((service) => (
          <ServiceItem details={service} />
        ))}
      </div>
    </div>
  );
}