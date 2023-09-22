import React, { useEffect } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { colors } from "../bits/colors";
import successModal from "../assets/images/successModal.svg";
import Button from "./Button";

const SuccessModal = ({ setShow, isShow }) => {
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
      document.body.style.position = null;
    }
    return () => {
      document.body.style.overflow = null;
      document.body.style.position = null;
    };
  }, [isShow]);

  if (!isShow) {
    return null;
  }

  return createPortal(
    <ModalWrapper>
      <ModalContent>
        <img src={successModal} alt="successModal" />
        <p className="successText">
          Congratulations <br /> you have successfully Registered!
        </p>
        <p className="successTxt2">Yes, it was easy and you did it!</p>
        <p className="successTxt2 txt">check your mail box for next step</p>
        <Button
          text="Back"
          background=" linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);"
          width="100%"
          height="54px"
          onClick={() => {
            setShow(false);
          }}
        />
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("successModal")
  );
};

export default SuccessModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ModalContent = styled.div`
  background-color: transparent;
  width: 50%;
  border: ${`1px solid ${colors.fourth}`};
  min-height: 60%;
  max-height: 90%;
  padding: 2.5rem 4rem;
  border-radius: 15px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  .successText {
    color: #fff;
    font-size: 1.8rem;
    line-height: 1.4;
    text-align: center;
    margin: 1rem 0 1.5rem;
    font-weight: 500;
  }
  .successTxt2 {
    color: #fff;
    text-align: center;
    line-height: 1.5;
  }
  .txt {
    margin-bottom: 2rem;
  }
`;
