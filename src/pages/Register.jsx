import { useState } from "react";
import styled from "styled-components";
import registerSvg from "../assets/images/register.svg";
import RegisterForm from "../components/RegisterForm";
import SuccessModal from "../components/SuccessModal";
import registerLens1 from "../assets/images/registerLens1.svg";
import registerLens2 from "../assets/images/registerLens2.svg";
import star_pu from "../assets/images/star_pu.svg";
import Star from "../components/Star";
import sata_gra from "../assets/images/sata_gra.svg";
import { colors } from "../bits/colors";

const Register = () => {
  const [showModal, setShowModal] = useState(true);

  const showSuccess = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      <h3>Register</h3>

      <div className="left">
        <img src={registerSvg} alt="registerSvg" />
      </div>
      <RegisterForm showSuccessModal={showSuccess} />
      {showModal && <SuccessModal setShow={setShowModal} isShow={showModal} />}
      <img src={registerLens1} alt="registerLens1" className="registerLens1" />
      <img src={registerLens2} alt="registerLens2" className="registerLens2" />
      <Star bottom="4rem" right="12rem" width="10px" />
      <Star top="6rem" right="17rem" width="25px" opacity="0.4" />
      <img src={star_pu} alt="star_pu" className="star_pu" />
      <img src={sata_gra} alt="sata_gra" className="sata_gra" />
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.section`
  padding: 5rem 8rem;
  display: flex;
  align-items: center;
  position: relative;

  h3 {
    display: none;
  }
  .star_pu {
    position: absolute;
    top: 5rem;
    left: 12rem;
    width: 15px;
  }
  .sata_gra {
    position: absolute;
    bottom: 18rem;
    left: 39%;
    opacity: 0.4;
  }
  .registerLens1 {
    position: absolute;
    left: 0;
    top: 0;
    mix-blend-mode: hard-light;
  }
  .registerLens2 {
    position: absolute;
    bottom: 0;
    right: 0;
    mix-blend-mode: hard-light;
  }

  .left {
    flex: 1;
    img {
      width: 600px;
    }
  }
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    align-items: unset;
    padding: 2rem;
    h3 {
      display: block;
      margin-bottom: 2.5rem;
      color: ${colors.fourth};
      font-size: 1.8rem;
      font-family: "clash-display-semibold", sans-serif;
    }

    .registerLens1 {
      width: 200px;
    }
    .registerLens2 {
      width: 200px;
    }
    .left {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        width: 200px;
      }
    }
  }
`;
