import React, { useRef } from "react";
import Navigation from "../components/Navigation";
import "../scss/AboutMe.scss";

import { useIntersection } from "react-use";
import gsap from "gsap";

import {
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IFZ from "../image/meInIFZ2.jpg";

/* import front from "../image/front.png";
import front1 from "../image/front1.png";
import front2 from "../image/front2.png";
import front3 from "../image/front3.png";
import front4 from "../image/front4.png";
import front5 from "../image/front5.png";
import front6 from "../image/front6.png"; */

const AboutMe = () => {
  //Ref for our element
  const sectionRef = useRef(null);

  //All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      x: 10,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      x: -80,
      ease: "power4.out",
    });
  };

  // Checking to see when the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.8
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <React.Fragment>
      <main className="About">
        <Navigation />
        <section className="container-about">
          <div className="content-About">
            <div className="about-pic">
              <img
                src={IFZ}
                alt="IFZ"
                width="341px"
                height="536px"
                className="IFZ"
              />

              <div className="pic-cover"></div>
            </div>

            <div className="about-title">
              <h1 className="text">
                Hello,
                <br />
                I'm Ayman,
                <br />
                Web Develober Based in Leipzig, Germany.
                <br />
                <span className="small-Letter">
                  {" "}
                  Front-End Developer | React.js | HTML, CSS.
                </span>
              </h1>
            </div>
          </div>

          <div ref={sectionRef} className="content-about2">
            <div className="contentCover-about2"></div>
            <div className="aboutText1">
              <p className="fadeIn">
                I'm Ayman, Web Develober based in Germany. I'm from Syria, was
                born in Qatar and live in Leipzig since five years.
                <br />
                I'm interested in Sport, Music, Decoration and Cooking.
                <br />
                When I'm not coding, you'll find me doing Sport or at a Techno
                Party.
              </p>
            </div>
            <div className="main">
              <div className="d1"></div>
              <div className="d2">
                <div className="contentCover-about2"></div>
                <div className="aboutText2">
                  <p className="fadeIn">
                    I'm Ayman, Web Develober based in Germany. I'm from Syria,
                    was born in Qatar and live in Leipzig since five years.
                    <br />
                    I'm interested in Sport, Music, Decoration and Cooking.
                    <br />
                    When I'm not coding, you'll find me doing Sport or at a
                    Techno Party.
                  </p>
                </div>
              </div>

              <div className="d3"></div>
            </div>
          </div>

          <div className="content-about3"></div>
        </section>

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

      {/* <div className="FrontPage">
        <img src={front6} alt="front6" width="30%" className="imgFront6" />
        <img src={front5} alt="front5" width="30%" className="imgFront5" />
        <img src={front4} alt="front4" width="30%" className="imgFront4" />
        <img src={front3} alt="front3" width="30%" className="imgFront3" />
        <img src={front2} alt="front2" width="30%" className="imgFront2" />
        <img src={front1} alt="front1" width="30%" className="imgFront1" />
        <img src={front} alt="front" width="30%" className="imgFront" />
      </div> */}
    </React.Fragment>
  );
};

export default AboutMe;
