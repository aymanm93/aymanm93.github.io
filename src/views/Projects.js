import React, { Component } from "react";
import Navigation from "../components/Navigation";
import "../scss/Projects.scss";

import {
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export class Projects extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main className="projects">
          <div className="main-title">
            <h1>Most recent Work</h1>
          </div>

          <div>
            <div className="portfolio-list">
              <li className="portfolio-item portfolio-item1">
                <div className="container">
                  <div className="item-name">Abf</div>
                  <div className="item-type">Frontend</div>
                  <div className="item-year">2018</div>
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </li>
              <li className="portfolio-item portfolio-item2">
                <div className="container">
                  <div className="item-name">Blk</div>
                  <div className="item-type">Frontend</div>
                  <div className="item-year">2016</div>
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </li>
              <li className="portfolio-item portfolio-item3">
                <div className="container">
                  <div className="item-name">Crh</div>
                  <div className="item-type">Frontend</div>
                  <div className="item-year">2015</div>
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </li>
              <li className="portfolio-item portfolio-item-bottom">
                <div className="container">
                  <div className="item-name">Dyn</div>
                  <div className="item-type">Frontend</div>
                  <div className="item-year">2020</div>
                  <div className="item-icon">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>
              </li>
            </div>
          </div>

          <footer>
            <a
              href="https://www.facebook.com/ayman.saab.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebookF} className="fab" />
            </a>
            <a
              href="https://www.instagram.com/ayman.saab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="fab" />
            </a>
            <a
              href="https://github.com/aymanm93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="fab" />
            </a>
          </footer>
        </main>
      </>
    );
  }
}

export default Projects;
