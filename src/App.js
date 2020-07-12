import React from "react";
import "./styles.css";

import Header from "./Components/Header/";
import Main from "./Components/Main/";
import Services from "./Components/Services/";
import Quote from "./Components/Quote/";
import Testimonials from "./Components/Testimonials/";
import Contact from "./Components/Contact/";
import Footer from "./Components/Footer/";

function App() {
  return (
    <div id="universal-styles">
      <Header />
      <Main />
      <Services />
      <Quote />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
