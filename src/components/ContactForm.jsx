import { useState } from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import Button from "./Button";
import { emailPattern } from "../helpers/verifiers";
import { Base_Url } from "../config/config";
import toast from "react-hot-toast";
import { Rings } from "react-loader-spinner";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    first_name: "",
    email: "",
    message: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const checkBtnReady = () => {
    if (
      contactData.first_name &&
      contactData.email &&
      contactData.message &&
      isValidEmail
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => {
      return { ...prev, [name]: value };
    });

    if (emailPattern.test(contactData.email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
    checkBtnReady();
  };

  const contactHandler = async () => {
    try {
      setSubmitLoading(true);
      const response = await fetch(`${Base_Url}/hackathon/contact-form`, {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSubmitLoading(false);
      if (response.status === 201) {
        toast(
          "Your Message have been received! We will get back to you shortly."
        );
      } else {
        toast("Something went wrong, please try again.");
      }
      console.log(data);
    } catch (error) {
      setSubmitLoading(false);
      toast("Something went wrong, please try again.");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    contactHandler();
  };
  return (
    <Wrapper>
      <h3>Questions or need assistance?</h3>
      <h3>Let us know about it!</h3>
      <p className="info">
        Email us below to any question related to our event
      </p>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="First Name"
          required
          name="first_name"
          value={contactData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Mail"
          required
          name="email"
          value={contactData.email}
          onChange={handleInputChange}
        />
        <textarea
          id="message"
          cols="30"
          rows="10"
          className="message"
          placeholder="Message"
          required
          name="message"
          value={contactData.message}
          onChange={handleInputChange}
        ></textarea>
        <div className="btnWrapper">
          <Button
            text={
              submitLoading ? (
                <Rings
                  height="50"
                  width="80"
                  color={colors.secondary}
                  radius="6"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="rings-loading"
                />
              ) : (
                "Submit"
              )
            }
            background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
            width="150px"
            height="45px"
            fontSize="15px"
            shouldDisable={checkBtnReady() && !submitLoading}
            disableProp={true}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default ContactForm;
const Wrapper = styled.div`
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff08;
  padding: 5rem 5rem;
  flex: 1;
  border-radius: 15px;
  h3 {
    margin-bottom: 0.5rem;
    color: ${colors.fourth};
    font-size: 1.3rem;
    font-family: "clash-display-bold", sans-serif;
  }
  .info {
    display: none;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    /* align-items: center; */

    input,
    textarea {
      background: transparent;
      padding: 0.8rem 1.4rem;
      resize: none;
      border-radius: 3px;
      border: 1px solid #b5b5b5;
      margin-bottom: 2rem;
      outline: none;
      color: #fff;

      &:active,
      &:focus {
        border: ${`1px solid ${colors.fourth}`};
      }
      &::placeholder {
        color: #fff;
      }
    }
    textarea {
      height: 150px;
    }
    input {
      height: 50px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #ffffff;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: inset 0 0 20px 20px #23232329;
    }
    .btnWrapper {
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 450px) {
    box-shadow: unset;
    background: transparent;
    padding: 1rem 1rem;
    h3 {
      width: 70%;
      font-size: 1.4rem;
    }
    .info {
      display: block;
      margin-top: 2rem;
      width: 100%;
      color: #fff;
    }
  }
`;
