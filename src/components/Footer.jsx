import styled from "styled-components";
import { colors } from "../bits/colors";
import cell from "../assets/images/cell.svg";
import location from "../assets/images/location.svg";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import star_pu from "../assets/images/star_pu.svg";
import Star from "./Star";

const Footer = () => {
  return (
    <Wrapper>
      <div className="first">
        <div className="firstChild">
          <div>
            <div className="logo">
              <Link to="/">
                get<span>linked</span>
              </Link>
            </div>
            <p className="desc">
              Getlinked Tech Hackathon is a technology innovation program <br />
              established by a group of organizations with the aim of showcasing{" "}
              <br />
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="fCLast">
            <p className="fCLFirst">Terms of Use</p>
            <p className="fCLSecond">Privacy Policy</p>
          </div>
        </div>
        <div className="secondChild">
          <h4 className="title">Useful Links</h4>
          <p className="useful">Overview</p>
          <p className="useful">Timeline</p>
          <p className="useful">FAQs</p>
          <Link
            className="useful"
            style={{ textDecoration: "none" }}
            to="/register"
          >
            Register
          </Link>
          <div className="fl">
            <p>Follow us</p>
            <Socials />
          </div>
        </div>
        <div className="thirdChild">
          <h4 className="title">Contact Us</h4>
          <div className="li">
            <img src={cell} alt="cell" className="cell" />
            <p>+234 6707653444</p>
          </div>
          <div className="li">
            <img src={location} alt="location" className="location" />
            <p>27, Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className="second">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
      <Star top="6rem" left="5%" width="15px" />
      <Star top="6rem" right="35%" width="15px" opacity="0.4" />
      <Star bottom="11rem" right="5%" width="15px" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 4rem 8rem;
  position: relative;

  .star_pu {
    position: absolute;
    bottom: 7rem;
    left: 48%;
    width: 14px;
  }
  .sata_gra {
    position: absolute;
    bottom: 27rem;
    left: 29%;
    opacity: 0.4;
  }
  .first {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    width: 100%;

    .firstChild {
      flex: 2;
      .logo {
        a {
          color: #fff;
          font-family: "clash-display-bold", sans-serif;
          font-size: 2.2rem;
          text-decoration: none;
          span {
            color: ${colors.fourth};
            font-family: "clash-display-bold", sans-serif;
          }
        }
      }
      .desc {
        color: #fff;
        font-size: 0.8rem;
        margin-top: 1rem;
        line-height: 1.8;
      }
      .fCLast {
        display: flex;
        margin-top: 6rem;
        p {
          color: #d6d6d6;
          font-size: 0.9rem;
        }
        .fCLFirst {
          padding-right: 1rem;
          border-right: 1px solid #d434fe;
        }
        .fCLSecond {
          padding-left: 1rem;
        }
      }
    }
    .secondChild {
      flex: 1;
      margin-top: 1rem;
      .fl {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        p {
          color: ${colors.fourth};
          font-size: 0.8rem;
        }
      }
      .title {
        font-weight: 600;
        color: ${colors.fourth};
        margin-bottom: 1.2rem;
      }
      .useful {
        color: #fff;
        margin-bottom: 0.8rem;
        font-size: 0.8rem;
      }
    }
    .thirdChild {
      flex: 1;
      margin-top: 1rem;

      .title {
        font-weight: 600;
        color: ${colors.fourth};
        margin-bottom: 1.2rem;
      }
      .li {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #fff;
        margin-bottom: 1.2rem;

        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  .second {
    p {
      text-align: center;
      color: #fff;
      /* line-height: 1.9; */
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 1250px) {
    padding: 4rem 4rem;
  }
  @media only screen and (max-width: 1000px) {
    .first {
      .firstChild {
        .desc {
          font-size: 0.7rem;
        }
        .fCLast {
          .fCLFirst,
          .fCLSecond {
            font-size: 0.8rem;
          }
        }
      }
      .secondChild {
        .title {
          font-size: 0.9rem;
        }
        .useful {
          font-size: 0.8rem;
        }
      }
      .thirdChild {
        .title {
          font-size: 0.9rem;
        }
        .li {
          p {
            font-size: 0.7rem;
          }
        }
      }
    }
    .second {
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    .first {
      flex-direction: column;
    }
  }
`;
