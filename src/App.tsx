import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import styled from "styled-components";
import HeadLine from "./components/HeadLine/HeadLine";
import Supported from "./components/Supported/Supported";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

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
      <Contact />
    </StyledContainer>
  );
}

export default App;
