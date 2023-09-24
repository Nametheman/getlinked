import styled from "styled-components";
import criteria from "../assets/images/criteria.svg";
import { colors } from "../bits/colors";
import { criterialist } from "../bits/criteria";
import Button from "./Button";
// import FadeCirlcle from "./FadeCirlcle";
import star_pu from "../assets/images/star_pu.svg";
import sata_gra from "../assets/images/sata_gra.svg";
import Star from "./Star";
import criteriaLens1 from "../assets/images/criteriaLens1.svg";
import criteriaLens2 from "../assets/images/criteriaLens2.svg";

const Criteria = () => {
  return (
    <Wrapper>
      <img
        src={criteria}
        alt="criteria_img"
        className="criteria_img"
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      />
      <div className="right">
        <h2 data-aos="fade-down">
          Judging Criteria <br /> <span>Key attributes</span>
        </h2>
        {criterialist.map((criteria, idx) => {
          return (
            <div
              key={idx}
              // data-aos="fade-down"
              // data-aos-duration="1000"
              // data-aos-delay={idx + 1 * 1000}
            >
              <p>
                <span>{criteria.key}</span> {criteria.value}
              </p>
            </div>
          );
        })}
        <div className="btnWrapper">
          <Button
            text="Read More"
            background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
            width="150px"
            height="50px"
            fontSize="0.6rem"
          />
        </div>
      </div>
      {/* <FadeCirlcle
        width="600px"
        height="600px"
        bottom="-20rem"
        right="0px"
        opacity="0.4"
      />
      <FadeCirlcle
        width="600px"
        height="600px"
        bottom="3rem"
        left="0rem"
        opacity="0.6"
      /> */}
      <img src={criteriaLens1} alt="criteriaLens1" className="criteriaLens1" />
      <img src={criteriaLens2} alt="criteriaLens2" className="criteriaLens2" />
      <Star bottom="10rem" left="42%" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
      <img src={sata_gra} alt="sata_gra" className="sata_gra" />
    </Wrapper>
  );
};

export default Criteria;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  border-bottom: 1px solid #ffffff2e;
  padding: 10rem 5rem;
  position: relative;

  .criteriaLens1 {
    position: absolute;
    bottom: -10rem;
    left: 0;
    mix-blend-mode: hard-light;
  }
  .criteriaLens2 {
    position: absolute;
    right: 0;
    bottom: -28rem;
    mix-blend-mode: hard-light;
  }
  .star_pu {
    position: absolute;
    top: 9rem;
    left: 12rem;
  }
  .sata_gra {
    position: absolute;
    bottom: 27rem;
    left: 29%;
    opacity: 0.4;
  }
  .criteria_img {
    width: 600px;
  }
  .right {
    flex: 1;

    h2 {
      color: #fff;
      font-family: "clash-display-semibold", sans-serif;
      font-size: 1.8rem;
      line-height: 1.4;
      margin-bottom: 1rem;

      span {
        color: ${colors.fourth};
        font-family: "clash-display-semibold", sans-serif;
      }
    }

    p {
      color: #fff;
      line-height: 1.5;
      margin-bottom: 2rem;

      span {
        color: #ff26b9;
        font-weight: 600;
        font-size: 1.1rem;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    .criteria_img {
      width: 500px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .criteria_img {
      width: 400px;
    }
    .right {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
        span {
          font-size: 0.9rem;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    text-align: center;
    .right {
      .btnWrapper {
        display: flex;
        justify-content: center;
      }
    }
    .criteriaLens1 {
      width: 600px;
    }
    .criteriaLens2 {
      width: 500px;
    }
  }
  @media only screen and (max-width: 700px) {
    display: block;
    text-align: center;
    .right {
      .btnWrapper {
        display: flex;
        justify-content: center;
      }
    }
    .criteriaLens1 {
      width: 500px;
    }
    .criteriaLens2 {
      width: 400px;
    }
  }
  @media only screen and (max-width: 450px) {
    .criteriaLens1 {
      width: 250px;
    }
    .criteria_img {
      width: 200px;
    }
  }
`;
