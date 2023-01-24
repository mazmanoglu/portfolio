import React from "react";
import "../styles/LeftSide.css";
import { Link } from "react-scroll";
import profilePhoto from "../img/profile.jpg";
import cv from "../img/CV.pdf";
import banner from "../img/sidebar2.jpg";

function LeftSide() {
  return (
    <nav className="leftSide">
      <div className="leftSideBanner" id="image"></div>
      <div className="leftSideBar">
        <Link to="about" smooth={true} duration={1000}>
          <img src={profilePhoto} alt="profile" className="circlePhoto" />
        </Link>
        <div>
          <ul className="nav-link">
            <li className="nav-item">
              <a className="nav-link" href="#x">
                <button data-text="Awesome" class="button">
                  <span class="actual-text">&nbsp;about&nbsp;me&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">
                    &nbsp;about&nbsp;me&nbsp;
                  </span>
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Experience">
                <button data-text="Awesome" class="button">
                  <span class="actual-text">&nbsp;experience&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">
                    &nbsp;experience&nbsp;
                  </span>
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Education">
                <button data-text="Awesome" class="button">
                  <span class="actual-text">&nbsp;education&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">
                    &nbsp;education&nbsp;
                  </span>
                </button>
              </a>
            </li>
            <Link to="/Experience">
              <li className="nav-item">
                <a className="nav-link" href="#Projects">
                  <button data-text="Awesome" class="button">
                    <span class="actual-text">&nbsp;projects&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">
                      &nbsp;projects&nbsp;
                    </span>
                  </button>
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href={cv} download>
                <button data-text="Awesome" class="button">
                  <span class="actual-text">&nbsp;download&nbsp;cv&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">
                    &nbsp;download&nbsp;cv&nbsp;
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LeftSide;
