import React from "react";
import "../styles/LeftSide.css";
import { Link } from "react-router-dom";
import profilePhoto from "../img/profile.jpg";
import cv from "../img/FatihOzerCVUpdated.pdf";
import banner from "../img/sidebar2.jpg";

function LeftSide() {
  return (
    <nav className="leftSide">
      <img className="leftSideBanner" src={banner} alt="banner" />
      <div className="leftSideBar">
        <Link to="/">
          <img src={profilePhoto} alt="profile" className="circlePhoto" />
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              {/*  <a className="nav-link" href="#AboutMe">
                About Me
              </a> */}
              <button>
                <span>About me</span>
                <i></i>
              </button>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#Experience">
                Experience
              </a> */}
              <button>
                <span>Experience</span>
              </button>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#education">
                Education
              </a> */}
              <button>
                <span>Education</span>
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#personalia">
                Personalia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={cv} download>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LeftSide;
