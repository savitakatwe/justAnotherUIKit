import Typography from "../Typography/Typography";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  border: 1px solid;
  background-color: #d9d9d9;
  justify-content: center;
  display: flex;
  height: 74px;
  width: 199px;
  align-items: center;
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
