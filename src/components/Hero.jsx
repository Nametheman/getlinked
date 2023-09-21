import React from "react";
import styled from "styled-components";
import FadeCirlcle from "./FadeCirlcle";
import Star from "./Star";
import chain from "../assets/images/chain.svg";
import light from "../assets/images/light.svg";
import flare from "../assets/images/flare.svg";
import boy from "../assets/images/boy.svg";
import globe from "../assets/images/globe.svg";
import bow from "../assets/images/bow.svg";
import countdown from "../assets/images/countdown.svg";
import Button from "./Button";
import { colors } from "../bits/colors";

const Hero = () => {
  return (
    <Wrapper>
      <FadeCirlcle
        width="800px"
        height="800px"
        top="-11rem"
        left="1rem"
        opacity="0.4"
      />
      <FadeCirlcle
        width="700px"
        height="700px"
        top="5rem"
        right="0"
        opacity="0.3"
      />
      <Star top="3rem" left="10rem" />
      <Star right="38rem" top="10rem" opacity="0.3" />
      <Star right="60rem" top="40rem" opacity="0.3" />
      <Content>
        <div className="topContent">
          <p>Igniting a Revolution in HR Innovation</p>
          <img src={bow} alt="bow_image" className="bow_image" />
        </div>
        <div className="base">
          <div className="leftPane">
            <img src={light} alt="" className="light_bulb" />
            <h2 className="getLinked">getlinked Tech</h2>
            <div className="hackathon">
              <h2 className="h22">
                Hackathon <span>1.0</span>
              </h2>
              <img src={chain} alt="chain_png" />
              <img src={flare} alt="chain_png" />
            </div>
            <p className="participate">
              Participate in getlinked tech Hackathon 2023 stand <br /> a chance
              to win a Big prize
            </p>
            <Button
              text="Register"
              background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
              width="170px"
              height="54px"
            />
            <div className="countdown">
              <img src={countdown} alt="" />
            </div>
          </div>
          <div className="rightPane">
            <img src={globe} alt="globe" className="globe" />
            <img src={boy} alt="boy_wearing_mask" className="boy" />
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  position: relative;
  border-bottom: 1px solid #ffffff2e;
`;

const Content = styled.div`
  padding: 2rem 0rem 0 5rem;
  position: relative;
  z-index: 3;
  .topContent {
    padding-right: 4rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    font-style: italic;
    font-size: 2.2rem;
    font-weight: 600;

    .bow_image {
      position: absolute;
      bottom: -1.2rem;
      right: 4rem;
      width: 230px;
      /* transform: rotate(1deg); */
    }
  }
  .base {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    margin-top: 6rem;

    .leftPane {
      flex: 1.3;
      position: relative;
      /* margin-top: 2rem; */

      .light_bulb {
        position: absolute;
        top: -3rem;
        right: 27%;
      }

      .participate {
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0.8rem 0 2.8rem;
        line-height: 1.4;
      }
      .countdown {
        margin: 2rem 0;
        display: flex;
        align-items: center;
        gap: 2rem;
        /* .count {
          border: 1px solid red;

          .number {
            color: #fff;
            font-size: 5.5rem;
            font-family: "Unica One", cursive;
            margin-block-start: 0em;
            margin-block-end: 0em;
            letter-spacing: -10px;
            sub {
              font-size: 1.5rem;
            }
          }
        } */
      }
      .getLinked {
        color: #fff;
        font-family: "clash-display-bold", sans-serif;
        font-size: 5rem;
      }
      .hackathon {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        .h22 {
          color: #fff;
          font-family: "clash-display-bold", sans-serif;
          font-size: 5rem;
          span {
            color: ${colors.fourth};
            font-family: "clash-display-bold", sans-serif;
          }
        }
      }
    }

    .rightPane {
      flex: 1;
      .globe,
      .boy {
        /* mix-blend-mode: screen; */
      }
      .globe {
        position: absolute;
        right: 8rem;
        top: 0rem;
        width: 500px;
        height: 700px;
        filter: hue-rotate(360deg);
        mix-blend-mode: color-burn;
      }
      .boy {
        position: absolute;
        bottom: 0;
        right: 2rem;
        filter: hue-rotate(230deg);
        width: 650px;
        mix-blend-mode: color-dodge;
      }
    }
  }
`;
