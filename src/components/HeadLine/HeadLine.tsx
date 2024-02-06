import Typography from "../Typography/Typography";
import styled from "styled-components";
import Button from "../Button/Button";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 61px;
  font-weight: 700;
`;
const StyledDisplay = styled.div`
  display: flex;
  gap: 40px;
`;
const HeadLine = () => {
  return (
    <>
      <StyledDiv>
        <Typography variant={"headLine"} color={"white"}>
          It doesn’t matter what JS
        </Typography>
        <Typography variant={"headLine"} color={"white"}>
          Framework you work with.
        </Typography>
        <Typography variant={"title2"} color={"white"}>
          Our boilerplates works with it out-of-the-box.
        </Typography>
        <StyledDisplay>
          <Button variant={"primary"}>Get started</Button>
          <Button variant={"secondary"}>See repo</Button>
        </StyledDisplay>
      </StyledDiv>
    </>
  );
};
export default HeadLine;
