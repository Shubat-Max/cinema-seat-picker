import React from "react";
import { configureStore } from "../store";
import styled from "styled-components";
import Session from "./Session";
import { Provider } from "react-redux";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Root>
        <Session />
      </Root>
    </Provider>
  );
}

const Root = styled.div`
  min-height: 100%;
  height: 100vh;
  min-width: 100%;
  width: 100vw;
  background: #dcdcdd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
