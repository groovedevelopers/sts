import React, { useEffect } from "react";
import "../assets/css/style.css";
import Footer from "./components/footer";
import Header from "./components/header";
import BackDrop from "./sections/backdrop";
import Product from "./sections/product";
import Quotes from "./sections/quotes";
import Reviews from "./sections/reviews";

const Home = () => {
  return (

    <div>
 <Header></Header>
 <BackDrop></BackDrop>
 <Product></Product>
 <Quotes></Quotes>
 <Reviews></Reviews>
 <Footer></Footer>
 </div>

  )
};

export default Home;
