import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import styled from "styled-components";
import HeadLine from "./components/HeadLine/HeadLine";

const StyledContainer = styled.div`
  margin: 0;
`;
function App() {
  return (
    <StyledContainer>
      <NavBar />
      <HeadLine />
    </StyledContainer>
  );
}

export default App;
