import styled from "styled-components";
import { colors } from "../bits/colors";
import list from "../assets/images/list.svg";
import guard from "../assets/images/guard.svg";
import guard2 from "../assets/images/guard2.svg";
import Button from "./Button";
import privacyLens from "../assets/images/privacyLens.svg";
import star_pu from "../assets/images/star_pu.svg";
import Star from "./Star";

const Policies = () => {
  return (
    <Wrapper>
      <div className="left">
        <h2>
          Privacy Policy and <br />
          <span>Terms</span>
        </h2>
        <p className="about">Last updated on September 12, 2023</p>
        <p className="about2">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="policies">
          <p className="polTitle">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className="lic">Licensing Policy</p>
          <p className="some">Here are terms of our Standard License:</p>
          <div className="policy">
            <img src={list} alt="" />
            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className="policy">
            <img src={list} alt="" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button
              text="Read More"
              background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
              width="150px"
              height="50px"
              fontSize=".8rem"
            />
            ``
          </div>
        </div>
      </div>
      <div className="right">
        <img src={guard} alt="guard" className="guard" />
        <img src={guard2} alt="guard2" className="guard2" />
      </div>
      <img src={privacyLens} alt="privacyLens" className="privacyLens" />
      <Star top="13rem" right="16%" width="15px" />
      <Star bottom="39%" right="40%" width="15px" />
      <Star top="9rem" left="28%" opacity="0.4" width="24px" />
      <Star bottom="37%" right="5%" opacity="0.4" width="20px" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
      <img src={star_pu} alt="star_pu" className="star_pu2" />
      <img src={star_pu} alt="star_pu" className="star_pu3" />
      {/* <img src={sata_gra} alt="sata_gra" className="sata_gra" /> */}
    </Wrapper>
  );
};

export default Policies;
const Wrapper = styled.section`
  display: flex;
  gap: 5rem;
  padding: 10rem 8rem 7rem;
  position: relative;
  border-bottom: 1px solid #ffffff2e;
  .star_pu {
    position: absolute;
    top: 15rem;
    left: 45%;
    width: 22px;
  }
  .star_pu2 {
    position: absolute;
    bottom: 35%;
    left: 5%;
    width: 28px;
  }
  .star_pu3 {
    position: absolute;
    bottom: 47%;
    right: 34%;
    width: 16px;

    /* opacity: 0.4; */
  }

  .privacyLens {
    position: absolute;
    left: 0;
    bottom: -17%;
    mix-blend-mode: hard-light;
  }

  .left {
    position: relative;
    z-index: 3;
    h2 {
      color: #fff;
      font-family: "clash-display-semibold", sans-serif;
      font-size: 1.6rem;
      line-height: 1.4;
      margin-bottom: 1.4rem;

      span {
        color: ${colors.fourth};
        font-family: "clash-display-semibold", sans-serif;
      }
    }
    .about {
      color: #ffffffbf;
      font-size: 0.8rem;
      margin-bottom: 1.7rem;
    }
    .about2 {
      color: #ffffff;
      font-size: 0.8rem;
      margin-bottom: 1.7rem;
    }
    .policies {
      border: 1px solid #d434fe;
      border-radius: 10px;
      padding: 3rem 4.6rem;
      background: #ffffff8;
      .polTitle {
        color: #ffffff;
        font-size: 0.8rem;
        margin-bottom: 1.7rem;
        line-height: 2;
      }
      .lic {
        color: ${colors.fourth};
        font-weight: 700;
        font-size: 1rem;
        margin-bottom: 1rem;
      }
      .some {
        color: #ffffff;
        font-weight: 600;
        font-size: 0.9rem;
      }
      .policy {
        margin-top: 2rem;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        color: #ffffff;
        line-height: 2;

        img {
          width: 25px;
        }
        p {
          font-weight: 300;
          color: #ffffffda;
          font-size: 0.9rem;
        }
      }
    }
  }
  .right {
    position: relative;
    .guard {
      position: absolute;
      top: -5rem;
      right: 2%;
      width: 430px;
    }
    .guard2 {
      position: relative;
      z-index: 2;
      /* width: 550px; */
    }
  }

  @media only screen and (max-width: 1350px) {
    gap: 4rem;

    .right {
      .guard2 {
        width: 500px;
      }
      .guard {
        width: 380px;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    gap: 4rem;

    .right {
      .guard2 {
        width: 400px;
      }
      .guard {
        width: 300px;
      }
    }
    .left {
      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      .about {
        margin-bottom: 1rem;
      }
      .policies {
        padding: 2.4rem 3rem;

        .polTitle {
          font-size: 0.7rem;
          margin-bottom: 1.3rem;
        }
        .lic {
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
        }
        .policy {
          margin-top: 1.5rem;
          p {
            font-size: 0.8rem;
          }
          img {
            width: 20px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 700px) {
    .privacyLens {
      width: 500px;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 5rem 2rem 2rem;
    .privacyLens {
      width: 300px;
    }
    .right {
      .guard2 {
        width: 200px;
      }
      .guard {
        width: 200px;
      }
    }
  }
`;
