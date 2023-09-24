import styled from "styled-components";
import trophy from "../assets/images/trophy.svg";
import rewards from "../assets/images/rewards.svg";
import { colors } from "../bits/colors";
// import FadeCirlcle from "./FadeCirlcle";
import prizesLens1 from "../assets/images/prizesLens1.svg";
import prizesLens2 from "../assets/images/prizesLens2.svg";
import star_pu from "../assets/images/star_pu.svg";
import sata_gra from "../assets/images/sata_gra.svg";
import Star from "./Star";

const Prizes = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={trophy} alt="trophy" className="trophy" />
      </div>
      <div className="right">
        <div className="top">
          <h2>
            Prizes and <br /> <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and <br /> for
            participants.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={rewards} alt="rewards" className="rewards" />
        </div>
      </div>
      <img src={prizesLens1} alt="prizesLens1" className="prizesLens1" />
      <img src={prizesLens2} alt="prizesLens2" className="prizesLens2" />
      <Star bottom="50%" right="2%" width="20px" />
      <Star bottom="65%" right="40%" width="20px" />
      <Star bottom="65%" right="40%" width="20px" />
      <Star bottom="8rem" left="12rem" width="15px" />
      <Star bottom="7rem" right="16rem" width="25px" opacity="0.4" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
      <img src={sata_gra} alt="sata_gra" className="sata_gra" />
    </Wrapper>
  );
};

export default Prizes;
const Wrapper = styled.section`
  padding: 5rem 7rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;

  .star_pu {
    position: absolute;
    top: 5rem;
    left: 12rem;
    width: 15px;
  }
  .sata_gra {
    position: absolute;
    bottom: 27rem;
    left: 29%;
    opacity: 0.4;
  }

  .prizesLens1 {
    position: absolute;
    mix-blend-mode: hard-light;
    left: 0;
    top: -7rem;
  }
  .prizesLens2 {
    position: absolute;
    right: 0;
    bottom: -16rem;
    mix-blend-mode: hard-light;
  }

  .right {
    .top {
      margin: 0 0 3rem 5rem;

      h2 {
        color: #fff;
        font-family: "clash-display-bold", sans-serif;
        font-size: 1.8rem;
        line-height: 1.4;
        margin-bottom: 1rem;

        span {
          color: ${colors.fourth};
          font-family: "clash-display-bold", sans-serif;
        }
      }
      p {
        color: #fff;
        line-height: 1.9;
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    .right {
      .rewards {
        width: 550px;
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    .right {
      .rewards {
        width: 450px;
      }
    }
    .left {
      .trophy {
        width: 450px;
      }
    }
  }
  @media only screen and (max-width: 1250px) {
    .prizesLens1 {
      position: absolute;
      mix-blend-mode: hard-light;
      left: 0;
      top: -7rem;
      width: 600px;
    }
    .prizesLens2 {
      position: absolute;
      right: 0;
      bottom: -16rem;
      mix-blend-mode: hard-light;
      width: 600px;
    }
  }
  @media only screen and (max-width: 1000px) {
    /* display: block; */
    flex-direction: column-reverse;
    .right {
      .top {
        margin: 0;
        position: relative;
        z-index: 2;
        text-align: center;
        .rewards {
          width: 600px;
        }
      }
    }
    .left {
      .trophy {
        width: 600px;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .right {
      .top {
        .rewards {
          width: 400px;
        }
      }
    }
    .left {
      .trophy {
        width: 400px;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 2rem 3rem;

    .prizesLens1,
    .prizesLens2 {
      width: 250px;
    }
    .right {
      .rewards {
        margin-top: 3rem;
        width: 300px;
      }
    }
    .left {
      .trophy {
        width: 200px;
      }
    }
  }
`;
