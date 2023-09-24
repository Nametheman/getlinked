/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import closeMenu from "../assets/icon/closeIcon.svg";
import Button from "./Button";

const MobileMenu = ({ translateX, setTranslateX, setShow }) => {
  const closeMenuHandler = () => {
    setTranslateX(400);

    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  return (
    <Wrapper $translateX={translateX}>
      <div className="closeWrapper">
        <img src={closeMenu} alt="" onClick={closeMenuHandler} />
      </div>
      <div className="linksWrapper">
        <div className="linksWrao">
          <a href="./#timeline" className="link" onClick={closeMenuHandler}>
            Timeline
          </a>
          <a href="./#overview" className="link" onClick={closeMenuHandler}>
            Overview
          </a>
          <a href="./#faqs" className="link" onClick={closeMenuHandler}>
            FAQs
          </a>
          <Link to="/contact" className="link" onClick={closeMenuHandler}>
            Contact
          </Link>

          <Link
            to="/register"
            style={{ textDecoration: "none" }}
            onClick={closeMenuHandler}
          >
            <Button
              text="Register"
              background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
              width="150px"
              height="50px"
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.nav`
  @media only screen and (max-width: 1100px) {
    display: block;
    padding: 2rem;
    position: fixed;
    width: 300px;
    right: 0;
    top: 0;
    min-height: 100vh;
    z-index: 355;
    background: #150e28;
    transform: translateX(${(props) => props.$translateX}px);
    transition: all 0.3s ease;

    .closeWrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 3rem;
      img {
        cursor: pointer;
      }
    }
    .linksWrapper {
      margin-bottom: 4rem;
      .linksWrao {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
        .link {
          text-decoration: none;
          color: #fff;
          margin-right: 3.5rem;
          font-family: "Montserrat", sans-serif;
          font-size: 1rem;
        }
      }
    }
  }
`;
