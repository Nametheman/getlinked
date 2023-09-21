import React from "react";
import styled from "styled-components";
import Criteria from "../components/Criteria";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Rules from "../components/Rules";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
    </div>
  );
};

export default Landing;
