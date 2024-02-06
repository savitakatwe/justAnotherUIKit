import Typography from "../Typography/Typography";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding-top: 150px;
  padding-bottom: 150px;
`;
const StyledColumn = styled.div`
  flex-direction: column;
`;
const StyledColum2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StyledColumn1 = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledColumn>
          <Typography variant={"title2"} color={"white"}>
            Lorem
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
        </StyledColumn>
        <StyledColumn1>
          <div>
            <Typography variant={"title2"} color={"white"}>
              Lorem
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
          </div>
          <div>
            <Typography variant={"title2"} color={"white"}>
              Lorem
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
          </div>
        </StyledColumn1>
        <StyledColumn>
          <Typography variant={"title2"} color={"white"}>
            Lorem
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
          <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
            Ipsum
          </Typography>
        </StyledColumn>
        <StyledColumn1>
          <div>
            <Typography variant={"title2"} color={"white"}>
              Lorem
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
          </div>
          <div>
            <Typography variant={"title2"} color={"white"}>
              Lorem
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
            <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
              Ipsum
            </Typography>
          </div>
        </StyledColumn1>
      </StyledFooter>
      <StyledColum2>
        <img
          src={"./copyright.svg"}
          alt={"copyright"}
          height={"20px"}
          width={"20px"}
        />
        <Typography variant={"title2"} color={"white"} fontWeight={"200px"}>
          2024
        </Typography>
      </StyledColum2>
    </>
  );
};
export default Footer;
