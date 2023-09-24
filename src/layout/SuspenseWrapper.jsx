import React, { Suspense } from "react";
import styled from "styled-components";

const SuspenseWrapper = ({ children, fallback }) => {
  return (
    <Container>
      <Suspense fallback={fallback}>{children}</Suspense>
    </Container>
  );
};

export default SuspenseWrapper;

const Container = styled.div`
  /* height: 100vh;
  margin-top: 100px; */
`;
