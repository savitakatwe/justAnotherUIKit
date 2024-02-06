import Typography from "../Typography/Typography";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #d9d9d9;
  height: 74px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = (props: PropsWithChildren) => {
  return (
    <>
      <StyledBox>
        <Typography variant={"title1"} color={"black"}>
          {props.children}
        </Typography>
      </StyledBox>
    </>
  );
};
export default Box;
