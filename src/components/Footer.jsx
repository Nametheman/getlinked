import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import cell from "../assets/images/cell.svg";
import location from "../assets/images/location.svg";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="first">
        <div className="firstChild">
          <div>
            <div className="logo">
              <Link to="/">
                get<span>linked</span>
              </Link>
            </div>
            <p className="desc">
              Getlinked Tech Hackathon is a technology innovation program <br />
              established by a group of organizations with the aim of showcasing{" "}
              <br />
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="fCLast">
            <p className="fCLFirst">Terms of Use</p>
            <p className="fCLSecond">Privacy Policy</p>
          </div>
        </div>
        <div className="secondChild">
          <h4 className="title">Useful Links</h4>
          <p className="useful">Overview</p>
          <p className="useful">Timeline</p>
          <p className="useful">FAQs</p>
          <Link
            className="useful"
            style={{ textDecoration: "none" }}
            to="/register"
          >
            Register
          </Link>
          <div className="fl">
            <p>Follow us</p>
            <Socials />
          </div>
        </div>
        <div className="thirdChild">
          <h4 className="title">Contact Us</h4>
          <div className="li">
            <img src={cell} alt="cell" className="cell" />
            <p>+234 6707653444</p>
          </div>
          <div className="li">
            <img src={location} alt="location" className="location" />
            <p>27, Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className="second">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 7rem;
  position: relative;
  .first {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    width: 100%;

    .firstChild {
      flex: 2;
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
      .desc {
        color: #fff;
        font-size: 0.8rem;
        margin-top: 1rem;
        line-height: 1.8;
      }
      .fCLast {
        display: flex;
        margin-top: 6rem;
        p {
          color: #d6d6d6;
          font-size: 0.9rem;
        }
        .fCLFirst {
          padding-right: 1rem;
          border-right: 1px solid #d434fe;
        }
        .fCLSecond {
          padding-left: 1rem;
        }
      }
    }
    .secondChild {
      flex: 1;
      margin-top: 1rem;
      .fl {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        p {
          color: ${colors.fourth};
          font-size: 0.8rem;
        }
      }
      .title {
        font-weight: 600;
        color: ${colors.fourth};
        margin-bottom: 1.2rem;
      }
      .useful {
        color: #fff;
        margin-bottom: 0.8rem;
        font-size: 0.8rem;
      }
    }
    .thirdChild {
      flex: 1;
      margin-top: 1rem;

      .title {
        font-weight: 600;
        color: ${colors.fourth};
        margin-bottom: 1.2rem;
      }
      .li {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #fff;
        margin-bottom: 1.2rem;

        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  .second {
    p {
      text-align: center;
      color: #fff;
      /* line-height: 1.9; */
      font-size: 0.9rem;
    }
  }
`;
