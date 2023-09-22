import React from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";

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
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  display: flex;
  padding: 6rem 7rem;
  gap: 10rem;

  .left {
    flex: 0.9;
    margin-top: 3rem;

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
`;
