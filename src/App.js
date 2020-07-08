import React from "react";

import Header from "./Components/Header/";
import Main from "./Components/Main/";
import Services from "./Components/Services/";
import CaseStudies from "./Components/CaseStudies";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact/";
import Footer from "./Components/Footer/";

function App() {
  return (
    <div style={textStyling}>
      <Header />
      <Main />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

const textStyling = { fontFamily: "Arial, Helvetica, sans-serif" };

export default App;
