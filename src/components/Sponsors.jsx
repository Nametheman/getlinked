import React from "react";
import styled from "styled-components";
import partners from "../assets/images/partners.svg";

const Sponsors = () => {
  return (
    <Wrapper>
      <h2>Partner and Sponsors</h2>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major <br />{" "}
        companies as its partners and sponsors
      </p>
      <img src={partners} alt="partners" className="partners" />
    </Wrapper>
  );
};

export default Sponsors;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* gap: 2rem; */
  padding: 4rem 7rem 7rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;

  h2 {
    color: #fff;
    font-family: "clash-display-medium", sans-serif;
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  p {
    color: #fff;
    line-height: 1.4;
    font-size: 0.9rem;
    text-align: center;
  }
  .partners {
    margin-top: 5rem;
  }
`;
