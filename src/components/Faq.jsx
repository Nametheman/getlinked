import React, { useState } from "react";
import styled from "styled-components";
import faq from "../assets/images/faq.svg";
import { colors } from "../bits/colors";
import OneFaq from "./OneFaq";
import star_pu from "../assets/images/star_pu.svg";
import sata_gra from "../assets/images/sata_gra.svg";
import Star from "./Star";
import questionBold from "../assets/images/questionBold.svg";
import brightStar from "../assets/images/brightStar.svg";
import question from "../assets/images/question.svg";
const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: true,
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <Wrapper>
      <div className="left">
        <h2>
          Frequently Asked
          <br />
          <span> Question</span>
        </h2>
        <p>
          We got answers to the questions that you might <br /> want to ask
          about getlinked Hackathon 1.0
        </p>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <OneFaq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <div className="right">
        <img src={faq} alt="faq" className="faq" />
      </div>
      <Star bottom="4rem" right="25%" />
      <Star bottom="25rem" left="45%" opacity="0.3" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
      {/* <img src={sata_gra} alt="sata_gra" className="sata_gra" /> */}
      <img src={question} alt="question" className="question" />
      <img src={brightStar} alt="brightStar" className="brightStar" />
      <img src={brightStar} alt="brightStar" className="brightStar2" />
      <img src={question} alt="question" className="question2" />
      <img src={question} alt="question" className="question2" />
      <img src={questionBold} alt="questionBold" className="questionBold" />
    </Wrapper>
  );
};

export default Faq;

const Wrapper = styled.section`
  padding: 7rem 8rem;
  border-bottom: 1px solid #ffffff2e;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  .question {
    position: absolute;
    top: 6rem;
    right: 50%;
    width: 40px;
  }
  .question2 {
    position: absolute;
    top: 6rem;
    right: 27%;
    width: 40px;
  }
  .brightStar {
    position: absolute;
    top: 16rem;
    right: 48%;
    width: 20px;
  }
  .brightStar2 {
    position: absolute;
    top: 6rem;
    right: 33%;
    width: 20px;
  }
  .questionBold {
    position: absolute;
    top: 3rem;
    right: 38%;
    width: 50px;
  }
  .star_pu {
    position: absolute;
    top: 5rem;
    left: 5rem;
  }
  .sata_gra {
    position: absolute;
    bottom: 27rem;
    left: 29%;
    opacity: 0.4;
  }
  .left {
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
      font-size: 15px;
    }
  }
  .right {
    .faq {
      width: 700px;
    }
  }
`;
