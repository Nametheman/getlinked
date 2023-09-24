import styled from "styled-components";
import { colors } from "../bits/colors";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
import contactLens from "../assets/images/contactLens1.svg";
import contactLens2 from "../assets/images/contactLens2.svg";
import star_pu from "../assets/images/star_pu.svg";
import Star from "../components/Star";
// import contactLens1 from "../assets/images/contactLens1.svg";

const Contact = () => {
  return (
    <Wrapper>
      <div className="left">
        <h2>Get in touch</h2>
        <p>
          Contact <br /> Information
        </p>
        <p>
          27,Alara Street <br /> Yaba 100012 <br /> Lagos State
        </p>
        <p>Call Us : 07067981819</p>
        <p>
          we are open from Monday-Friday <br /> 08:00am - 05:00pm
        </p>
        <p className="share">Share on</p>
        <Socials />
      </div>
      <ContactForm />
      <img src={contactLens} alt="contactLens" className="contactLens" />
      <img src={contactLens2} alt="contactLens2" className="contactLens2" />
      <Star bottom="7rem" right="7rem" width="20px" />
      <Star top="3rem" right="17rem" width="25px" opacity="0.4" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  display: flex;
  padding: 6rem 10rem;
  gap: 10rem;
  position: relative;

  .star_pu {
    position: absolute;
    top: 5rem;
    left: 12rem;
    width: 15px;
  }

  .contactLens {
    position: absolute;
    left: 0;
    top: 0;
    mix-blend-mode: hard-light;
  }
  .contactLens2 {
    position: absolute;
    bottom: 0;
    right: 0;
    mix-blend-mode: hard-light;
  }

  .left {
    flex: 0.9;
    margin-top: 3rem;
    position: relative;
    z-index: 2;

    h2 {
      color: ${colors.fourth};
      font-family: "clash-display-bold", sans-serif;
      font-size: 1.8rem;
      line-height: 1.4;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
      color: #fff;
      line-height: 1.9;
      font-size: 1rem;
    }
    .share {
      margin-top: 3rem;
      margin-bottom: 0.6rem;
      color: ${colors.fourth};
    }
  }
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    padding: 2rem 2rem;
    .contactLens {
      width: 200px;
    }
    .contactLens2 {
      width: 200px;
    }

    .left {
      display: none;
    }
    .logo {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;
