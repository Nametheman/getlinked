import React from "react";
import styled from "styled-components";
import instagram from "../assets/images/instagram.svg";
import x from "../assets/images/x.svg";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";

const Socials = () => {
  return (
    <Wrapper>
      <a href="#">
        <img src={instagram} alt="" />
      </a>
      <a href="#">
        <img src={x} alt="" />
      </a>
      <a href="#">
        <img src={facebook} alt="" />
      </a>
      <a href="#">
        <img src={linkedin} alt="" />
      </a>
    </Wrapper>
  );
};

export default Socials;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
