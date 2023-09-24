import styled from "styled-components";
import partners from "../assets/images/Partners.svg";
import partnersLens1 from "../assets/images/partnersLens1.svg";
import partnersLens2 from "../assets/images/partnersLens2.svg";
import Star from "./Star";
import star_pu from "../assets/images/star_pu.svg";

const Sponsors = () => {
  return (
    <Wrapper>
      <h2>Partner and Sponsors</h2>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major <br />{" "}
        companies as its partners and sponsors
      </p>
      <img src={partners} alt="partners" className="partners" />
      <img src={partnersLens1} alt="partnersLens1" className="partnersLens1" />
      <img src={partnersLens2} alt="partnersLens2" className="partnersLens2" />
      <Star bottom="20%" right="42%" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
    </Wrapper>
  );
};

export default Sponsors;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 7rem 9rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;

  .star_pu {
    position: absolute;
    top: 12rem;
    left: 12rem;
  }
  .partnersLens1 {
    position: absolute;
    left: 0;
    top: -25%;
    mix-blend-mode: hard-light;
  }
  .partnersLens2 {
    position: absolute;
    bottom: -28%;
    right: 0;
    mix-blend-mode: hard-light;
  }

  h2 {
    position: relative;
    z-index: 2;
    color: #fff;
    font-family: "clash-display-medium", sans-serif;
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  p {
    position: relative;
    z-index: 2;
    color: #fff;
    line-height: 1.4;
    font-size: 0.9rem;
    text-align: center;
  }
  .partners {
    margin-top: 5rem;
  }

  @media only screen and (max-width: 1350px) {
    .partners {
      width: 90%;
    }
  }
  @media only screen and (max-width: 1000px) {
    padding: 4rem 3rem 9rem;

    .partners {
      width: 98%;
    }
  }
  @media only screen and (max-width: 850px) {
    .partners {
      width: 100%;
    }
    .partnersLens1 {
      width: 500px;
    }
    .partnersLens2 {
      width: 500px;
    }
  }
  @media only screen and (max-width: 800px) {
    .partnersLens1 {
      width: 400px;
    }
    .partnersLens2 {
      width: 500px;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 2rem 2rem;
    .partnersLens1 {
      width: 200px;
    }
    .partnersLens2 {
      width: 200px;
    }
  }
`;
