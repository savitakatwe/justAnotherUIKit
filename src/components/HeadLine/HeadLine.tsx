import Typography from "../Typography/Typography";
import styled from "styled-components";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 61px;
  height: calc(100vh - 70px);
  max-width: 770px;
  margin: auto;
  text-align: center;
  justify-content: center;
`;
const StyledDisplay = styled.div`
  display: flex;
  gap: 40px;
`;
const HeadLine = () => {
  return (
    <>
      <StyledDiv id={"home"}>
        <Typography variant={"headLine"} color={"white"}>
          It doesn’t matter what
          <Typography variant={"headLine"} color={"#FFFF00"} as={"span"}>
            {" "}
            JS Framework{" "}
          </Typography>
          you work with.
        </Typography>
        <Typography variant={"title3"} color={"white"}>
          Our boilerplates works with it out-of-the-box.
        </Typography>
        <StyledDisplay>
          <Button variant={"primary"}>
            Get started
            <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
          </Button>
          <Button variant={"secondary"}>
            See repo
            <img
              src={"./github.svg"}
              alt={"github"}
              height={"20px"}
              width={"20px"}
            />
          </Button>
        </StyledDisplay>
      </StyledDiv>
    </>
  );
};
export default HeadLine;
