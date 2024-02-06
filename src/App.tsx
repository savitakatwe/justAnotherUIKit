import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import styled from "styled-components";
import HeadLine from "./components/HeadLine/HeadLine";
import Supported from "./components/Supported/Supported";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const StyledContainer = styled.div`
  //margin: 0;
`;
const Styledfooter = styled.footer`
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 300;
`;

function App() {
  return (
    <StyledContainer>
      <NavBar />
      <HeadLine />
      <Supported />
      <About />
      <Contact />
      <Footer />
    </StyledContainer>
  );
}

export default App;
