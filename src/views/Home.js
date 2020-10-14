import React, { Component } from "react";
import "../App.scss";

import Image from "../image/mypicc233.jpg";
/* import Image2 from '../image/mypicc23344.jpg'; */
import { NavLink } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bodyOfHome">
          <main className="Home">
            <div className="myPic">
              {/* <img src={Image2} alt = 'Img2' width='380px' height='380px' className='bottom'/>*/}

              <img
                src={Image}
                alt="Img"
                width="350px"
                height="350px"
                className="IMG"
              />
            </div>
            <div className="AboutMe">
              <NavLink
                activeClassName="active"
                className="AboutMe-button1"
                exact
                to="/AboutMe"
              >
                <h1 className="__AboutMe">About</h1>
                <div className="triangle1"></div>
                <div className="triangle2"></div>
              </NavLink>
            </div>
          </main>
          <main className="Home2">
            <div className="Works">
              <NavLink
                activeClassName="active"
                className="link-button1"
                exact
                to="/Projects"
              >
                <div className="__Works">
                  <div className="WorksTitle">
                    <div className="W">
                      W<span className="orks">orks</span>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="contactMe">
              <NavLink
                activeClassName="active"
                className="link-button2"
                exact
                to="/ContactMe"
              >
                <div className="__contactMe">
                  <p>Interested?</p>
                  <h1 className="contactTitle">Contact</h1>
                </div>
              </NavLink>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
