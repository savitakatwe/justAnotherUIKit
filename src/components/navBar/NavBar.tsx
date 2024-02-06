import styled from "styled-components";
import Typography from "../Typography/Typography";
const StyledNav = styled.nav`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 70px;
`;
const StyledNavItem = styled.ul`
  display: flex;
  //justify-content: center;
  gap: 20px;
`;
const StyledAnchor = styled.a`
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <Typography variant={"body"} color={"white"}>
          JustAnotherUIKit
        </Typography>
        <StyledNavItem>
          <li>
            <StyledAnchor href="#home">
              <Typography variant={"body"} color={"white"}>
                Home
              </Typography>
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#about">
              <Typography variant={"body"} color={"white"}>
                About
              </Typography>
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#contact">
              <Typography variant={"body"} color={"white"}>
                Contact
              </Typography>
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#blog">
              <Typography variant={"body"} color={"white"}>
                Blog
              </Typography>
            </StyledAnchor>
          </li>
        </StyledNavItem>
      </StyledNav>
    </>
  );
};
export default NavBar;
