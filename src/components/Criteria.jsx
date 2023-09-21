import React from "react";
import styled from "styled-components";
import criteria from "../assets/images/criteria.svg";
import { colors } from "../bits/colors";
import { criterialist } from "../bits/criteria";
import Button from "./Button";

const Criteria = () => {
  return (
    <Wrapper>
      <img src={criteria} alt="criteria_img" />
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
          width="170px"
          height="54px"
        />
      </div>
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
  img {
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
