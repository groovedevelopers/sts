import React, { useEffect } from "react";
import { Button } from "@mui/material";
import "../../assets/css/style.css";

const BackDrop = () => {
  return (
    <section className="backdrop">
      <div className="hero_text">
        <h2>GLOW OF LIFE</h2>
        <p>Feel The Scent</p>

        
      </div>
      <div className="hero_button">
          <Button variant="outlined">Shop Now</Button>
        </div>
    </section>
  );
};

export default BackDrop;
