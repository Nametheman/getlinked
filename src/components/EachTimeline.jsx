/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import timeLine from "../assets/images/timeLine.svg";

const EachTimeline = ({ id, direction, text, title, index }) => {
  return (
    <>
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
      <Wrapper2>
        <div className="left">
          <img src={timeLine} alt="timeLine" className="timeLine" />
          <div className="number">
            <p>{index + 1}</p>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <p className="title">{title}</p>
            <p className="text">{text}</p>
          </div>
          <div className="date">
            <p>November 18, 2023</p>
          </div>
        </div>
      </Wrapper2>
    </>
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
  @media only screen and (max-width: 1250px) {
    gap: 2rem;
    .left {
      .title {
        font-size: 0.9rem;
      }
      .text {
        font-size: 0.7rem;
      }
    }
    .right {
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

const Wrapper2 = styled.section`
  display: none;
  @media only screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    /* border: 1px solid red; */
    /* text-align: left; */
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      .timeLine {
        height: 80px;
      }
      .number {
        background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          color: #fff;
          font-size: 0.6rem;
          margin-bottom: 0rem;
          line-height: 1.6;
          font-weight: 600;
        }
      }
    }
    .right {
      .content {
        flex: 1;
        .title {
          font-weight: 600;
          color: ${colors.fourth};
          font-size: 0.8rem;
          text-align: left;

          margin-bottom: 0rem;
        }
        .text {
          color: #fff;
          text-align: left;

          /* width: 60%; */
          font-size: 0.6rem;

          margin-bottom: 0rem;
        }
      }
      .date {
        flex: 1;

        p {
          font-weight: 600;
          color: ${colors.fourth};
          font-size: 0.8rem;
          margin-bottom: 0rem;
          text-align: left;
        }
      }
    }
  }
`;
