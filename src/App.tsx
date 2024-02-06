import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import styled from "styled-components";
import HeadLine from "./components/HeadLine/HeadLine";
import Supported from "./components/Supported/Supported";
import About from "./components/About/About";

const StyledContainer = styled.div`
  //margin: 0;
`;
function App() {
  return (
    <StyledContainer>
      <NavBar />
      <HeadLine />
      <Supported />
      <About />
    </StyledContainer>
  );
}

export default App;
