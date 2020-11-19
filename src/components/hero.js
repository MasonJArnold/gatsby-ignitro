import React from 'react';
import '../css/hero.css';
// import Img from "gatsby-image"

function Hero(props) {
  const {hero_h1_title, hero_copy, hero_background, hero_cta, hero_cta_link} = props;

    const heroH1 = {
      color: "white",
      fontSize: 60,
      margin: 0,
      padding: 0,
    };
    const heroP = {
      color: "white",
      fontSize: 18,
      margin: 0,
      padding: 0,
    };
    const homeHero = {
      backgroundImage: "url('"+hero_background+"')",
      padding: "50px 0px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textAlign: "right",
      position: "relative",
    }; 
    const heroCTA = {
      color: "white",
      margin: "20px 0px 0px 0px",
      padding: "10px 30px",
      backgroundColor: "#e25641",
      display: "inline-block",
      textDecoration: "none",
      textTransform: "uppercase",
      fontSize: 18,
      fontWeight: "bold",
    };
    const heroOverlay = {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position:"absolute",
      top: 0,
      bottom: 0,
      width: "50%",
      right: 0,
      // left: 0
    };
  return (
      <div className="homeHero" style={homeHero}>
      <div style={heroOverlay}></div>
        <div className="container">
          <div className="grid">
             <div className="col-sm-12">
              <h1 style={heroH1}>{hero_h1_title}</h1>
              <p style={heroP}>{hero_copy}</p>
              <a style={heroCTA} href={hero_cta_link}>{hero_cta}</a>
             </div>
          </div>
        </div>
      </div>
  )
}
export default Hero


