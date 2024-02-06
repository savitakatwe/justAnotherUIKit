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

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <Typography variant={"body"} color={"white"}>
          JustAnotherUIKit
        </Typography>
        <StyledNavItem>
          <li>
            <Typography variant={"body"} color={"white"}>
              Home
            </Typography>
          </li>
          <li>
            <Typography variant={"body"} color={"white"}>
              About
            </Typography>
          </li>
          <li>
            <Typography variant={"body"} color={"white"}>
              Contact
            </Typography>
          </li>
          <li>
            <Typography variant={"body"} color={"white"}>
              Blog
            </Typography>
          </li>
        </StyledNavItem>
      </StyledNav>
    </>
  );
};
export default NavBar;
