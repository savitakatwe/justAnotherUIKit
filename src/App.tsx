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
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
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
