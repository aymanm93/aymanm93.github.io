import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;

  max-width: 100%;
  min-height: 10vh;
  display: flex;
  float: right;
  padding: 1.5rem;
  display: none;
  @media only screen and (max-width: 760px) {
    background-color: rgb(156, 201, 206);
    height: 100vh;
    max-width: 100%;
    display: flex;
    justify-content: center;
    float: none;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    transform-origin: right;
    transition: transform 0.2s ease-in;
    transform: ${({ open }) => (open ? "scaleX(1)" : "scaleX(0)")};
  }
  ul {
    list-style: none;
    display: flex;
    font-family: "Reem Kufi", sans-serif;

    @media only screen and (max-width: 760px) {
      display: flex;
      flex-flow: column nowrap;
      padding: 0rem;
      padding-top: 3.5rem;
    }

    li {
      margin-right: 2rem;
      padding: 18px 10px;
      @media only screen and (max-width: 760px) {
        margin-right: 0rem;
      }

      .link {
        font-size: 20px;
        font-weight: 700;
        text-decoration: none;
        color: rgb(51, 51, 51);
        @media screen and (max-width: 992px) {
          font-size: 16px;
        }
        @media only screen and (max-width: 760px) {
          font-size: 20px;
        }

        .spanNav {
          position: relative;
          display: block;

          &:before,
          &:after {
            content: "";
            position: absolute;
            width: 0%;
            height: 1px;
            top: 50%;
            margin-top: -0.5px;
            background: rgb(156, 201, 206);
          }

          &:before {
            left: -2.5px;
          }

          &:after {
            right: 2.5px;
            background: rgb(156, 201, 206);
            transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
          }

          &:hover:before {
            background: rgb(156, 201, 206);
            width: 100%;
            transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
            @media only screen and (max-width: 760px) {
              background: rgb(235, 235, 235);
            }
          }

          &:hover:after {
            background: transparent;
            width: 100%;
            transition: 0s;
          }
        }
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Header open={open}>
      <ul>
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
    </Header>
  );
};

export default RightNav;
