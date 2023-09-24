import { useState } from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import Button from "./Button";
import { Link } from "react-router-dom";
import menuBurger from "../assets/icon/menuBurger.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const showMenuHandler = () => {
    setShowNav(true);

    setTimeout(() => {
      setTranslateX(0);
    }, 10);
  };

  const [translateX, setTranslateX] = useState(0);
  const [showNav, setShowNav] = useState(false);

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <NavbarWrapper $navbar={navbar}>
        <div className="logo">
          <Link to="/">
            get<span>linked</span>
          </Link>
        </div>
        <div className="navlinks">
          <div className="links">
            <a href="./#timeline" className="link">
              Timeline
            </a>
            <a href="./#overview" className="link">
              Overview
            </a>
            <a href="./#faqs" className="link">
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
        <div className="mobileMenu">
          <img
            src={menuBurger}
            alt="menuBurger"
            className="menuBurger"
            onClick={showMenuHandler}
          />
        </div>
      </NavbarWrapper>
      {showNav && (
        <MobileMenu
          translateX={translateX}
          setTranslateX={setTranslateX}
          setShow={setShowNav}
        />
      )}
    </>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 7rem 1.2rem;
  border-bottom: ${(props) => (props.$navbar ? "none" : "1px solid #ffffff2e")};
  position: ${(props) => (props.$navbar ? "fixed" : "relative")};
  top: 0;
  z-index: 10;
  height: 100px;
  background: ${(props) => (props.$navbar ? colors.secondary : "transparent")};
  width: 100%;
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
  .mobileMenu {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .navlinks {
      display: none;
    }
    .mobileMenu {
      display: block;
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 3rem 3rem 1.2rem;
    .logo {
      a {
        font-size: 1.5rem;
      }
    }
    .navlinks {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 3rem 2rem 1.2rem;
    .logo {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;
