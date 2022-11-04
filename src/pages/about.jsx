import React, { useEffect } from "react";
import "../assets/css/style.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Quotes from "./sections/quotes";
import Reviews from "./sections/reviews";

const About = () => {
  return (

    <div>
 <Header></Header>
 <Quotes></Quotes>
 <Reviews></Reviews>
 <Footer></Footer>
 </div>

  )
};

export default About;
