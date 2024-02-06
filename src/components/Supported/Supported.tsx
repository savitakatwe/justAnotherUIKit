import Typography from "../Typography/Typography";
import styled from "styled-components";
import Box from "../Box/Box";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  //font-weight: 700;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const BoxArrayElements: string[] = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "dolor",
  "sit",
  "Lorem",
  "ipsum",
];
const Supported = () => {
  return (
    <>
      <StyledContainer>
        <Typography variant={"body"} color={"white"}>
          Supported and backed by:
        </Typography>
        <StyledBox>
          {BoxArrayElements.map((item) => {
            return <Box>{item}</Box>;
          })}
        </StyledBox>
        <Typography variant={"title1"} color={"white"}>
          Less code. More product.
        </Typography>
        <Typography variant={"body"} color={"white"}>
          By using our UI Kit, we make sure you only get to focus more on the
          other things that matter.
        </Typography>
      </StyledContainer>
    </>
  );
};
export default Supported;
