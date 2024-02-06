import Typography from "../Typography/Typography";
import styled from "styled-components";
import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";

const StyledDiv = styled.div`
  padding: 0px 70px;

  min-height: 100vh;
`;
const StyledForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
const StyledName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

const Contact = () => {
  return (
    <>
      <StyledDiv>
        <Typography variant={"head"} color={"white"}>
          Contact
        </Typography>
        <StyledForm>
          <Typography variant={"body"} color={"white"}>
            Fill out this form to reach us.
          </Typography>
          <StyledName>
            <TextBox
              placeholder={"First name"}
              width={"294px"}
              height={"46px"}
            ></TextBox>
            <TextBox
              placeholder={"Last name"}
              width={"294px"}
              height={"46px"}
            ></TextBox>
          </StyledName>
          <TextBox
            placeholder={"Email"}
            width={"625px"}
            height={"46px"}
          ></TextBox>
          <TextBox
            placeholder={"Phone (optional)"}
            width={"625px"}
            height={"46px"}
          ></TextBox>
          <TextBox
            placeholder={"Message"}
            width={"625px"}
            height={"128px"}
          ></TextBox>
          <Button variant={"blue"}>Send</Button>
        </StyledForm>
      </StyledDiv>
    </>
  );
};
export default Contact;
