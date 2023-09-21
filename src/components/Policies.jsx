import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import list from "../assets/images/list.svg";
import guard from "../assets/images/guard.svg";
import guard2 from "../assets/images/guard2.svg";
import Button from "./Button";

const Policies = () => {
  return (
    <Wrapper>
      <div className="left">
        <h2>
          Privacy Policy and <br />
          <span>Terms</span>
        </h2>
        <p className="about">Last updated on September 12, 2023</p>
        <p className="about2">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="policies">
          <p className="polTitle">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className="lic">Licensing Policy</p>
          <p className="some">Here are terms of our Standard License:</p>
          <div className="policy">
            <img src={list} alt="" />
            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className="policy">
            <img src={list} alt="" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button
              text="Read More"
              background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
              width="150px"
              height="50px"
              fontSize=".8rem"
            />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={guard} alt="guard" className="guard" />
        <img src={guard2} alt="guard2" className="guard2" />
      </div>
    </Wrapper>
  );
};

export default Policies;
const Wrapper = styled.section`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 8rem;
  padding: 10rem 7rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;

  .left {
    h2 {
      color: #fff;
      font-family: "clash-display-semibold", sans-serif;
      font-size: 1.6rem;
      line-height: 1.4;
      margin-bottom: 1.4rem;

      span {
        color: ${colors.fourth};
        font-family: "clash-display-semibold", sans-serif;
      }
    }
    .about {
      color: #ffffffbf;
      font-size: 0.8rem;
      margin-bottom: 1.7rem;
    }
    .about2 {
      color: #ffffff;
      font-size: 0.8rem;
      margin-bottom: 1.7rem;
    }
    .policies {
      border: 1px solid #d434fe;
      border-radius: 10px;
      padding: 4rem 4.6rem;
      background: #ffffff8;
      .polTitle {
        color: #ffffff;
        font-size: 0.8rem;
        margin-bottom: 1.7rem;
        line-height: 2;
      }
      .lic {
        color: ${colors.fourth};
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 1rem;
      }
      .some {
        color: #ffffff;
        font-weight: 600;
        font-size: 0.9rem;
      }
      .policy {
        margin-top: 2rem;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        color: #ffffff;
        line-height: 2;

        img {
          width: 25px;
        }
        p {
          font-weight: 300;
          color: #ffffffda;
          font-size: 0.9rem;
        }
      }
    }
  }
  .right {
    position: relative;
    .guard {
      position: absolute;
      top: -5rem;
      width: 400px;
    }
    .guard2 {
      position: relative;
      z-index: 2;
    }
  }
`;
