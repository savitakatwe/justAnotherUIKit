import Typography from "../Typography/Typography";
import styled from "styled-components";
import Box from "../Box/Box";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 853px;
  flex-wrap: wrap;
`;
const StyledDiv = styled.div`
  max-width: 513px;
  text-align: center;
`;

const BoxArrayElements: string[] = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit",
  "Dolor",
  "Sit",
  "Lorem",
  "Ipsum",
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
        <StyledDiv>
          <Typography variant={"body"} color={"white"}>
            By using our UI Kit, we make sure you only get to
            <Typography variant={"body"} color={"#FFFF00"} as={"span"}>
              {" "}
              focus more{" "}
            </Typography>
            on the other things that matter.
          </Typography>
        </StyledDiv>
      </StyledContainer>
    </>
  );
};
export default Supported;
