/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = ({
  height,
  width,
  border,
  background,
  text,
  icon,
  isTransparent,
  iconType,
  color,
  svgSize,
  svgWeight,
  marginBottom,
  fontWeight,
  fontSize,
  shouldDisable,
  disableProp,
  onClick,
}) => {
  return (
    <ButtonWrapper
      $border={border}
      $height={height}
      $width={width}
      $background={background}
      $isTransparent={isTransparent}
      $color={color}
      $svgWeight={svgWeight}
      $svgSize={svgSize}
      $marginBottom={marginBottom}
      $fontWeight={fontWeight}
      $fontSize={fontSize}
      onClick={onClick}
      disabled={disableProp ? !shouldDisable : false}
    >
      {iconType === "img" ? <img src={icon} alt="icon_png" /> : icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border: ${(props) => (props.$border ? props.$border : "none")};
  height: 50px;
  width: 150px;
  background: ${(props) =>
    props.$isTransparent ? "transparent" : props.$background};
  display: ${(props) => (props.$icon ? "flex" : "flex")};
  justify-content: ${(props) => (props.$icon ? "center" : "center")};
  align-items: ${(props) => (props.$icon ? "center" : "center")};
  gap: ${(props) => (props.$icon ? "1rem" : "0.5rem")};
  border-radius: 5px;
  outline: none;
  color: ${(props) => (props.$color ? props.$color : "#fff")};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : "0px"};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "normal")};
  font-size: 0.8rem;
  &:disabled {
    background: #3d3d3d;
  }
  svg {
    font-size: ${(props) => (props.$svgSize ? props.$svgSize : "unset")};
    font-weight: ${(props) => (props.$svgWeight ? props.$svgWeight : "unset")};
  }
  @media only screen and (max-width: 420px) {
    height: 35px;
    width: 120px;
    font-size: 0.6rem;
  }
`;
