import React from "react";
import styled from "styled-components";
import criteria from "../assets/images/criteria.svg";
import { colors } from "../bits/colors";
import { criterialist } from "../bits/criteria";
import Button from "./Button";
import FadeCirlcle from "./FadeCirlcle";
import star_pu from "../assets/images/star_pu.svg";
import sata_gra from "../assets/images/sata_gra.svg";
import Star from "./Star";

const Criteria = () => {
  return (
    <Wrapper>
      <img src={criteria} alt="criteria_img" className="criteria_img" />
      <div className="right">
        <h2>
          Judging Criteria <br /> <span>Key attributes</span>
        </h2>
        {criterialist.map((criteria, idx) => {
          return (
            <>
              <p key={idx}>
                <span>{criteria.key}</span> {criteria.value}
              </p>
            </>
          );
        })}
        <Button
          text="Read More"
          background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
          width="150px"
          height="50px"
          fontSize="0.6rem"
        />
      </div>
      <FadeCirlcle
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
      />
      {/* <img src={star} alt="" className="star" /> */}
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
`;
