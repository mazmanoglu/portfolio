import React from "react";
import "../styles/AboutMe.css";
import LeftSide from "./LeftSide";
import banner from "../img/bluerainbow.jpg";

function AboutMe() {
  return (
    <div className="outerSide">
      <LeftSide />
      <div className="rightSide">
        {/*         <img className="rightSideBanner" src={banner} alt="banner" />
         */}
        <div className="titleContainer">
          <h1 className="nameTitle">
            Fatih{" "}
            <span
              className="nameTitle, 
brown"
            >
              Ozer
            </span>
          </h1>
          <h2>
            <span className="brown">FullStack </span>
            Developer
          </h2>
          <div className="hometext">
            Gemotiveerde Full Stack ontwikkelaar met een sterke analytisch
            denkvermogen, leergierig en ambitieus. Kennis van C# en ervaring met
            React. Mijn vorige carrière als diplomaat heeft me geleerd te
            luisteren, met aandacht voor details. Werkethiek en discipline vind
            ik belangrijk. Het staat u vrij om dit te checken via mijn
            instructeur Benedikt Lantsoght (0499 388 227). Ik sta open voor een
            verkennend gesprek om u verder van mijn kwaliteiten te overtuigen.{" "}
            <br />
            <span className="brown">Onmiddellijk beschikbaar.</span> <br />
            Rijbewijs B en eigen auto.
          </div>

          <div className="social-icons">
            <a
              className="social-icon"
              title="Mail to me"
              href="mailto:fatihozer246@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="social-icon"
              title="My LinkedIn"
              href="https://www.linkedin.com/in/
fatih-ozer-475a9913a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              title="My GitHub"
              href="https://github.com/mazmanoglu"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              title="Reach me via Whatsapp"
              href="https://wa.me/32492806376"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              className="social-icon"
              title="Home Sweet Home"
              href="https://goo.gl/maps/
PDTEtdJUEMaX7R8VA"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid 
fa-location-arrow"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
