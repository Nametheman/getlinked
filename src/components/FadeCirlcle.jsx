/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";

const FadeCirlcle = ({ width, height, top, left, opacity, right, bottom }) => {
  return (
    <Wrapper
      $width={width}
      $height={height}
      $top={top}
      $left={left}
      $opacity={opacity}
      $right={right}
      $bottom={bottom}
    ></Wrapper>
  );
};

export default FadeCirlcle;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: ${(props) => (props.$width ? props.$width : "900px")};
  height: ${(props) => (props.$height ? props.$height : "900px")};
  top: ${(props) => (props.$top ? props.$top : "unset")};
  left: ${(props) => (props.$left ? props.$left : "unset")};
  right: ${(props) => (props.$right ? props.$right : "unset")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "unset")};
  opacity: ${(props) => (props.$opacity ? props.$opacity : "1")};
  border-radius: 50%;
  background: rgb(117, 12, 255);
  background: -moz-radial-gradient(
    circle,
    rgba(115, 12, 250, 0.987) 0%,
    rgba(252, 70, 107, 0) 68%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(112, 8, 248, 0.932) 0%,
    rgba(252, 70, 107, 0) 68%
  );
  background: radial-gradient(
    circle,
    rgb(109, 0, 251) 0%,
    rgba(252, 70, 107, 0) 68%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#8f3aff",endColorstr="#fc466b",GradientType=1);
`;
