import React from "react";
import styled from "styled-components";
import trophy from "../assets/images/trophy.svg";
import rewards from "../assets/images/rewards.svg";
import { colors } from "../bits/colors";
const Prizes = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={trophy} alt="trophy" className="trophy" />
      </div>
      <div className="right">
        <div className="top">
          <h2>
            Prizes and <br /> <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and <br /> for
            participants.
          </p>
        </div>{" "}
        <img src={rewards} alt="rewards" className="rewards" />
      </div>
    </Wrapper>
  );
};

export default Prizes;
const Wrapper = styled.section`
  padding: 5rem 7rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;

  .right {
    .top {
      margin: 0 0 3rem 5rem;

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
  }
`;
