import React from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import LeftSide from "./components/LeftSide";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LeftSide />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
