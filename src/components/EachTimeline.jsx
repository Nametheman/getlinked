import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import timeLine from "../assets/images/timeLine.svg";

const EachTimeline = ({ id, direction, text, title, index }) => {
  return (
    <Wrapper $direction={direction}>
      <div className="left">
        <p className="title">{title}</p>
        <p className="text">{text}</p>
      </div>
      <div className="middle">
        <img src={timeLine} alt="timeLine" className="timeLine" />
        <div className="number">
          <p>{index + 1}</p>
        </div>
      </div>
      <div className="right">
        <p>November 18, 2023</p>
      </div>
    </Wrapper>
  );
};

export default EachTimeline;
const Wrapper = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: ${(props) =>
    props.$direction === "left" ? "row" : "row-reverse"};
  justify-content: center;
  gap: 3rem;
  .left {
    flex: 1;
    .title {
      font-weight: 600;
      color: ${colors.fourth};
      font-size: 1.1rem;
      text-align: ${(props) =>
        props.$direction === "left" ? "right" : "left"};
      margin-bottom: 0rem;
    }
    .text {
      color: #fff;
      text-align: ${(props) =>
        props.$direction === "left" ? "right" : "left"};
      /* width: 60%; */
      font-size: 0.8rem;

      margin-bottom: 0rem;
    }
  }
  .right {
    flex: 1;

    p {
      font-weight: 600;
      color: ${colors.fourth};
      font-size: 1.1rem;
      margin-bottom: 0rem;
      text-align: ${(props) =>
        props.$direction === "right" ? "right" : "left"};
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    .timeLine {
      height: 80px;
    }
    .number {
      background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: #fff;
        font-size: 1.2rem;
        margin-bottom: 0rem;
        line-height: 1.6;
        font-weight: 600;
      }
    }
  }
`;
