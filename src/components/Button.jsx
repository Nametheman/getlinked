/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = ({
  height,
  width,
  border,
  background,
  text,
  icon,
  action,
  isTransparent,
  iconType,
  color,
  svgSize,
  svgWeight,
  marginBottom,
  fontWeight,
}) => {
  const btnOnClickHandler = () => {
    action();
  };
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
      onClick={btnOnClickHandler}
    >
      {iconType === "img" ? <img src={icon} alt="icon_png" /> : icon}
      {text}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border: ${(props) => (props.$border ? props.$border : "none")};
  height: ${(props) => (props.$height ? props.$height : "35px")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
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
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};
  svg {
    font-size: ${(props) => (props.$svgSize ? props.$svgSize : "unset")};
    font-weight: ${(props) => (props.$svgWeight ? props.$svgWeight : "unset")};
  }
`;
