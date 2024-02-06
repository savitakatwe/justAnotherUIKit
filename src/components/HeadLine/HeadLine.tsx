import Typography from "../Typography/Typography";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  line-height: 61px;
  font-weight: 700;
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
      </StyledDiv>
    </>
  );
};
export default HeadLine;
