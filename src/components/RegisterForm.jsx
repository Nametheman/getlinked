import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../bits/colors";
import girl from "../assets/icon/girl.svg";
import boy from "../assets/icon/boy.svg";
import Select from "react-select";
import Button from "./Button";

const RegisterForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGroupSize, setSelectedGroupSize] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [isChecked, setIsChecked] = useState(false);

  const [registerData, setRegisterData] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: selectedCategory,
    group_size: selectedGroupSize,
    privacy_poclicy_accepted: false,
  });

  const categoryOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const groupOptions = [
    { value: "5", label: "Less Than 5" },
    { value: "10", label: "Less Than 10" },
    { value: "15", label: "Less Than 15" },
    { value: "20", label: "Less Than 20" },
  ];

  const checkBtnReady = () => {
    if (
      registerData.teamName &&
      registerData.phone &&
      registerData.email &&
      registerData.projectTopic &&
      registerData.agreement
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };

  useEffect(() => {
    setRegisterData((prev) => ({
      ...prev,
      category: selectedCategory?.value,
    }));
  }, [selectedCategory]);
  useEffect(() => {
    setRegisterData((prev) => ({
      ...prev,
      groupSize: selectedGroupSize?.value,
    }));
  }, [selectedGroupSize]);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/hackathon/categories-list`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const requestRegistration = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/hackathon/categories-list`,
        {
          method: "POST",
          body: JSON.stringify({ name: `${addConfigInput}` }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setCategories(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Wrapper>
      <h3>Register</h3>
      <div className="statement">
        <p>Be part of this movement!</p>
        <div className="walk">
          <div className="images">
            <img src={girl} alt="girl" />
            <img src={boy} alt="boy" />
          </div>
          <p className="dots">.................................</p>
        </div>
      </div>
      <p className="create">CREATE YOUR ACCOUNT</p>
      <form action="#" onSubmit={handleRegisterFormSubmit}>
        <div className="inputContainer">
          <div className="inputWrapper">
            <label htmlFor="teamName">Team’s Name</label>
            <input
              type="text"
              placeholder="Enter the name of your group"
              name="teamName"
              value={registerData.teamName}
              onChange={handleFormChange}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="teamName">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={registerData.phone}
              onChange={handleFormChange}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="teamName">Email </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={registerData.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="teamName">Project Topic</label>
            <input
              type="text"
              placeholder="What is your topic group project topic"
              name="projectTopic"
              value={registerData.projectTopic}
              onChange={handleFormChange}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="teamName">Category</label>
            <Select
              placeholder="Select your category"
              options={categoryOptions}
              className="selectOut"
              classNamePrefix="selectInner"
              onChange={setSelectedCategory}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="teamName">Group Size</label>
            <Select
              placeholder="Select your category"
              options={groupOptions}
              className="selectOut"
              classNamePrefix="selectInner"
              onChange={setSelectedGroupSize}
            />
          </div>
        </div>
        <p className="hint">
          Please review your registration details before submitting
        </p>
        <div className="checkBox">
          <input
            type="checkbox"
            className="check"
            name="agreement"
            checked={registerData.agreement}
            onChange={handleFormChange}
          />
          <p className="checkLabel">
            I agreed with the event terms and conditions and privacy policy
          </p>
        </div>
        <div className="btnWrapper">
          <Button
            text="Register Now"
            background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
            width="100%"
            height="50px"
            fontSize="1rem"
            shouldDisable={checkBtnReady()}
            disableProp={true}
          />
        </div>{" "}
      </form>
    </Wrapper>
  );
};

export default RegisterForm;
const Wrapper = styled.div`
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff08;
  padding: 5rem 6rem;
  flex: 1;
  border-radius: 15px;

  h3 {
    margin-bottom: 2.5rem;
    color: ${colors.fourth};
    font-size: 1.8rem;
    font-family: "clash-display-semibold", sans-serif;
  }

  .statement {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1rem;

    p {
      color: #fff;
      font-weight: 300;
    }

    .walk {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: -30px;
      .images {
        img {
          margin-bottom: -15px;
        }
      }
      .dots {
        color: ${colors.fourth};
      }
    }
  }
  .create {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 300;
  }
  .hint {
    margin-top: 1.5rem;
    color: #ff26b9;
    font-size: 0.9rem;
    font-style: italic;
  }
  .checkBox {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #fff;

    .check {
      width: 20px; /* Set desired width */
      height: 20px; /* Set desired height */
      background-color: #fff; /* Unchecked background color */
      border: 2px solid #ccc; /* Border color */
      border-radius: 4px;
      outline: none;
      cursor: pointer;
    }
  }
  .btnWrapper {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }
  form {
    margin-top: 2rem;
    .inputContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;

      .inputWrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        label {
          color: #fff;
          font-weight: 300;
          font-size: 0.85rem;
          margin-left: 0.5rem;
        }
        input {
          background: transparent;
          padding: 0 1.4rem;
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
            color: #6b6b6b;
            font-size: 0.8rem;
          }
        }
        select {
          outline: none;
          &:active,
          &:focus {
            outline: none;
            border: none;
          }
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
      }
    }
  }
`;
