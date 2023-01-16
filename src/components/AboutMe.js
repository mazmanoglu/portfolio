import React from "react";
import "../styles/AboutMe.css";
import LeftSide from "./LeftSide";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

function AboutMe() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <div className="outerSide">
      <LeftSide />
      <div className="rightSide">
        <div className="titleContainer">
          <div className="headTitle">
            <span className="brown">Hello, </span>
            My name is
          </div>
          <h1 className="nameTitle">
            Fatih
            <span className="nameTitle, brown"> Ozer</span>
          </h1>
          {/*  <h2>
            a Fullstack
            <span className="brown"> .Net </span>
            Developer
          </h2> */}
          <div className="hometext">
            <Typewriter
              options={{
                loop: true,
                stringSplitter,
                autoStart: true,
                cursor: "💻",
                delay: 50,
                deleteSpeed: 3,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("- highly motivated and detail-oriented.....")
                  .pauseFor(1500)
                  .deleteChars(44)
                  .typeString("- strong problem-solving skills, ")
                  .pauseFor(1500)
                  .typeString("with passion for learning")
                  .pauseFor(1500)
                  .deleteChars(61)
                  .typeString(
                    '<text class="subTitle">Fullstack <span class="brown">.Net </span>Developer...</text>'
                  )
                  .pauseFor(2500)
                  .start();
              }}
            />
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
