import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./Burger";
/* import RightNav from "./RightNav"; */

export class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div className="header">
          {/*  <RightNav /> */}
          <ul className="nav">
            <li>
              <NavLink activeClassName="active" className="link" exact to="/">
                <span className="spanNav">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="link"
                exact
                to="/AboutMe"
              >
                <span className="spanNav">AboutMe</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="link"
                exact
                to="/Projects"
              >
                <span className="spanNav">Works</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="link"
                exact
                to="/ContactMe"
              >
                <span className="spanNav">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
