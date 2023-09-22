import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="logo">
        <Link to="/">
          get<span>linked</span>
        </Link>
      </div>
      <div className="navlinks">
        <div className="links">
          <a href="#" className="link">
            Timeline
          </a>
          <a href="#" className="link">
            Overview
          </a>
          <a href="#" className="link">
            FAQs
          </a>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            text="Register"
            background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
            width="150px"
            height="50px"
          />
        </Link>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 7rem 1.2rem;
  border-bottom: 1px solid #ffffff2e;
  position: relative;
  z-index: 10;
  height: 100px;

  .logo {
    a {
      color: #fff;
      font-family: "clash-display-bold", sans-serif;
      font-size: 2.2rem;
      text-decoration: none;
      span {
        color: ${colors.fourth};
        font-family: "clash-display-bold", sans-serif;
      }
    }
  }
  .navlinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    .links {
      .link {
        text-decoration: none;
        color: #fff;
        margin-right: 3.5rem;
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
      }
    }
  }
`;
