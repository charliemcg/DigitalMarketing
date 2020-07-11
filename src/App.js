import React from "react";

import Header from "./Components/Header/";
import Main from "./Components/Main/";
import Services from "./Components/Services/";
import Quote from "./Components/Quote/";
import Testimonials from "./Components/Testimonials/";
import Contact from "./Components/Contact/";
import Footer from "./Components/Footer/";

function App() {
  return (
    <div style={textStyling}>
      <Header />
      {/* <Main />
      <Services />
      <Quote />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
}

const textStyling = {
  fontFamily: "Arial, Helvetica, sans-serif",
  minWidth: 800,
};

export default App;
