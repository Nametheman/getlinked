import React, { useState } from "react";
import styled from "styled-components";
import registerSvg from "../assets/images/register.svg";
import RegisterForm from "../components/RegisterForm";
import SuccessModal from "../components/SuccessModal";

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const showSuccess = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      <div className="left">
        <img src={registerSvg} alt="registerSvg" />
      </div>
      <RegisterForm showSuccessModal={showSuccess} />
      {showModal && <SuccessModal setShow={setShowModal} isShow={showModal} />}
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.section`
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  position: relative;

  .left {
    flex: 1;
    img {
      width: 600px;
    }
  }
`;
