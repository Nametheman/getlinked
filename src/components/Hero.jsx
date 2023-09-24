import styled from "styled-components";
// import FadeCirlcle from "./FadeCirlcle";
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
import { Link } from "react-router-dom";
import heroLens1 from "../assets/images/heroLens1.svg";
import heroLens2 from "../assets/images/heroLens2.svg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <Wrapper>
      <img src={heroLens1} alt="heroLens1" className="heroLens1" />
      <img src={heroLens2} alt="heroLens2" className="heroLens2" />
      <Star top="3rem" left="10rem" />
      <Star right="38rem" top="10rem" opacity="0.3" />
      <Star right="60rem" top="40rem" opacity="0.3" />
      <Content>
        <div>
          <div className="topContent">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
                "Igniting a Revolution in HR Innovation",
                1000,
              ]}
              wrapper="p"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              cursor={false}
            />

            <img src={bow} alt="bow_image" className="bow_image" />
          </div>
        </div>
        <div className="base">
          <div>
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
                Participate in getlinked tech Hackathon 2023 stand <br /> a
                chance to win a Big prize
              </p>
              <div className="btnWrapper">
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    text="Register"
                    background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
                    width="170px"
                    height="54px"
                  />
                </Link>
              </div>
              <div className="countdown">
                <img src={countdown} alt="" />
              </div>
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

  .heroLens1 {
    position: absolute;
    top: -6rem;
    mix-blend-mode: hard-light;
  }
  .heroLens2 {
    position: absolute;
    right: 0;
    mix-blend-mode: hard-light;
  }
  @media only screen and (max-width: 1080px) {
    .heroLens1 {
      width: 700px;
    }
    .heroLens2 {
      width: 700px;
    }
  }
  @media only screen and (max-width: 700px) {
    .heroLens1 {
      width: 500px;
    }
  }
  @media only screen and (max-width: 450px) {
    .heroLens1,
    .heroLens2 {
      width: 300px;
    }
  }
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
    }
  }
  .base {
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;

    .leftPane {
      flex: 1.3;
      position: relative;

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

  @media only screen and (max-width: 1350px) {
    .topContent {
      font-size: 1.9rem;
    }

    .base {
      .rightPane {
        .globe {
          width: 450px;
          height: 600px;
          right: 8rem;
        }
        .boy {
          width: 600px;
        }
      }
      .leftPane {
        .light_bulb {
          right: 35%;
        }

        .getLinked {
          font-size: 4rem;
        }
        .hackathon {
          .h22 {
            font-size: 4rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    .base {
      .rightPane {
        .globe {
          width: 400px;
          height: 500px;
          right: 10rem;
        }
        .boy {
          width: 560px;
        }
      }
      .leftPane {
        .light_bulb {
          right: 40%;
          width: 45px;
        }
        .getLinked {
          font-size: 3.5rem;
        }
        .hackathon {
          .h22 {
            font-size: 3.5rem;
          }
          img {
            width: 50px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .topContent {
      font-size: 1.5rem;

      .bow_image {
        bottom: -0.9rem;
        right: 4rem;
        width: 180px;
      }
    }
    .base {
      .rightPane {
        .globe {
          width: 400px;
          height: 500px;
          right: 8rem;
        }
        .boy {
          width: 560px;
        }
      }
      .leftPane {
        .light_bulb {
          right: 35%;
          width: 40px;
        }
        .getLinked {
          font-size: 3rem;
        }
        .hackathon {
          gap: 0.8rem;

          .h22 {
            font-size: 3rem;
          }
          img {
            width: 40px;
          }
        }
        .participate {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 1rem 0rem 0 0rem;
    .topContent {
      justify-content: center;
      padding-right: 0;
      .bow_image {
        position: absolute;
        bottom: -1.2rem;
        right: 19%;
        width: 180px;
      }
    }
    .base {
      flex-direction: column;
      .leftPane {
        .light_bulb {
          position: absolute;
          top: -2rem;
          right: 30%;
          width: 30px;
        }
        .getLinked {
          text-align: center;
        }
        .participate {
          text-align: center;
          font-size: 1.1rem;
        }
        .btnWrapper {
          display: flex;
          justify-content: center;
        }
        .countdown {
          justify-content: center;
        }
        .hackathon {
          justify-content: center;

          .h22 {
            text-align: center;
          }
        }
      }
      .rightPane {
        height: 700px;
        display: flex;
        justify-content: center;

        .boy {
          margin: 0 auto;
          position: relative;
          right: unset;
          top: unset;
        }
        .globe {
          bottom: 0;
          right: unset;
          width: 500px;

          top: unset;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    .base {
      .rightPane {
        .globe {
          width: 350px;
          height: 500px;
          right: 14rem;
        }
        .boy {
          width: 460px;
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 0rem 0 1rem;
    .topContent {
      justify-content: center;
      padding-right: 0;
      font-size: 1.2rem;

      .bow_image {
        position: absolute;
        bottom: -1.2rem;
        right: 10%;
        width: 130px;
      }
    }
    .base {
      .leftPane {
        margin-bottom: 6rem;
        .getLinked {
          font-size: 2rem;
        }
        .hackathon {
          gap: 0.8rem;

          .h22 {
            font-size: 2rem;
          }
          img {
            width: 30px;
          }
        }
        .participate {
          font-size: 0.7rem;
        }
      }
      .rightPane {
        .globe {
          width: 250px;
          height: 500px;
          right: 8rem;
          top: 27rem;
        }
        .boy {
          width: 300px;
        }
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .base {
      .leftPane {
        margin-bottom: 1rem;
        .getLinked {
          font-size: 2rem;
        }
        .hackathon {
          gap: 0.8rem;

          .h22 {
            font-size: 2rem;
          }
          img {
            width: 30px;
          }
        }
        .participate {
          font-size: 0.7rem;
        }
      }
      .rightPane {
        .globe {
          width: 250px;
          height: 500px;
          top: 24rem;
          right: 7rem;
        }
        .boy {
          width: 300px;
        }
      }
    }
  }
`;
