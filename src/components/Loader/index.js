import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledLoader>
      <img src="./assets/gif/Blocks-1s-200px-8px.svg" alt="" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
