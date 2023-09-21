import React from "react";
import star from "../assets/icon/star.svg";
import styled from "styled-components";

const Star = ({ top, left, right, bottom, opacity }) => {
  return (
    <Wrapper
      $top={top}
      $left={left}
      $right={right}
      $bottom={bottom}
      $opacity={opacity}
      src={star}
      alt="star_png"
    />
  );
};

export default Star;
const Wrapper = styled.img`
  position: absolute;
  z-index: 2;
  top: ${(props) => (props.$top ? props.$top : "unset")};
  left: ${(props) => (props.$left ? props.$left : "unset")};
  right: ${(props) => (props.$right ? props.$right : "unset")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "unset")};
  opacity: ${(props) => (props.$opacity ? props.$opacity : "unset")};
`;
