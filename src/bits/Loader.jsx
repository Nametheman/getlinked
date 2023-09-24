import styled from "styled-components";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <LoaderSection>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#d434fe"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />{" "}
    </LoaderSection>
  );
};

export default Loader;

const LoaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    opacity: 0.5;
    animation: bounce2 5s infinite;
  }
  @keyframes bounce2 {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    25% {
      transform: translateY(-10px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    75% {
      transform: translateY(10px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;
