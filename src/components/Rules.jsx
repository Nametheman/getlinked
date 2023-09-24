/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import rules from "../assets/images/rules.svg";
import { colors } from "../bits/colors";
import Star from "./Star";
import rulesLens1 from "../assets/images/rulesLens1.svg";
import rulesLens2 from "../assets/images/rulesLens2.svg";
// import FadeCirlcle from "./FadeCirlcle";

const Rules = () => {
  return (
    <Wrapper>
      <div
        className="left"
        // data-aos="fade-left"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        <img src={rules} alt="bigidea.png" />
      </div>
      <div
        className="right"
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        <h2>
          Rules and <br /> <span>Guidelines</span>
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <Star top="25%" left="30%" opacity="0.3" />
      <Star top="69%" left="44%" />
      {/* <FadeCirlcle
        width="700px"
        height="700px"
        top="-12rem"
        left="3rem"
        opacity="0.4"
      />
      <FadeCirlcle
        width="400px"
        height="400px"
        bottom="-16rem"
        right="0px"
        opacity="0.3"
      /> */}
      <img src={rulesLens1} alt="rulesLens1" className="rulesLens1" />
      <img src={rulesLens2} alt="rulesLens2" className="rulesLens2" />
    </Wrapper>
  );
};

export default Rules;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 7rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;
  .rulesLens1 {
    position: absolute;
    left: 1%;
    top: -19rem;
    mix-blend-mode: hard-light;
  }
  .rulesLens2 {
    position: absolute;
    right: 0;
    bottom: -25rem;
    mix-blend-mode: hard-light;
  }

  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right {
    flex: 1;
    position: relative;
    z-index: 1;

    h2 {
      color: #fff;
      font-family: "clash-display-bold", sans-serif;
      font-size: 1.8rem;
      line-height: 1.4;
      margin-bottom: 1rem;

      span {
        color: ${colors.fourth};
        font-family: "clash-display-bold", sans-serif;
      }
    }
    p {
      color: #fff;
      line-height: 1.9;
      font-size: 0.9rem;
    }
  }
  .arrow_png {
    position: absolute;
    bottom: 5rem;
    left: 43%;
  }
  .star_gra {
    position: absolute;
    top: 37%;
    left: 5%;
  }
  .star_pu {
    position: absolute;
    top: 30%;
    right: 10%;
  }
  @media only screen and (max-width: 1350px) {
    .left {
      img {
        width: 600px;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .left {
      img {
        width: 500px;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .left {
      img {
        width: 450px;
      }
    }
    .right {
      h2 {
        font-size: 1.8rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    text-align: center;
    .rulesLens1 {
      width: 600px;
    }
    .rulesLens2 {
      width: 300px;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 1rem 2rem;
    .rulesLens1 {
      width: 200px;
    }
    .rulesLens2 {
      width: 200px;
    }
  }
  @media only screen and (max-width: 420px) {
    .left {
      img {
        width: 300px;
      }
    }
  }
`;
