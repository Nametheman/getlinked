/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import big_idea from "../assets/images/big_idea.svg";
import arrow from "../assets/images/arrow.svg";
import star_pu from "../assets/images/star_pu.svg";
import sata_gra from "../assets/images/sata_gra.svg";
import { colors } from "../bits/colors";

const Introduction = () => {
  return (
    <Wrapper>
      <div
        className="left"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={big_idea} alt="bigidea.png" />
      </div>
      <div
        className="right"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2>
          Introduction to getlinked <br /> <span>tech Hackathon 1.0</span>
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
      <img src={arrow} alt="arrow_png" className="arrow_png" />
      <img src={star_pu} alt="arrow_png" className="star_pu" />
      <img src={sata_gra} alt="arrow_png" className="star_gra" />
    </Wrapper>
  );
};

export default Introduction;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 6rem 7rem;
  border-bottom: 1px solid #ffffff2e;
  position: relative;

  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .right {
    flex: 1;

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
  @media only screen and (max-width: 1100px) {
    .left {
      img {
        width: 400px;
      }
    }
    .right {
      h2 {
        font-size: 1.6rem;
      }
      P {
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    text-align: center;
    .left {
      img {
        width: 400px;
      }
    }
    .right {
      position: relative;
      z-index: 2;
      margin-top: 7rem;

      h2 {
        font-size: 1.6rem;
      }
      P {
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 1rem 2rem;
    .left {
      img {
        width: 300px;
      }
    }
  }
`;
