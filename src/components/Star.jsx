/* eslint-disable react/prop-types */
import star from "../assets/icon/star.svg";
import styled from "styled-components";

const Star = ({ top, left, right, bottom, opacity, width, height }) => {
  return (
    <Wrapper
      $top={top}
      $left={left}
      $right={right}
      $bottom={bottom}
      $opacity={opacity}
      $width={width}
      $height={height}
      src={star}
      alt="star_png"
    />
  );
};

export default Star;
const Wrapper = styled.img`
  position: absolute;
  z-index: 2;
  /* width: 10px; */
  top: ${(props) => (props.$top ? props.$top : "unset")};
  left: ${(props) => (props.$left ? props.$left : "unset")};
  right: ${(props) => (props.$right ? props.$right : "unset")};
  bottom: ${(props) => (props.$bottom ? props.$bottom : "unset")};
  opacity: ${(props) => (props.$opacity ? props.$opacity : "unset")};
  height: ${(props) => (props.$height ? props.$height : "unset")};
  width: ${(props) => (props.$width ? props.$width : "unset")};
`;
