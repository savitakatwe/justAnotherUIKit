"use client";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

const StyledTextBox = styled.input`
  background-color: #d9d9d9;
  border: none;
  padding: 20px 10px;
  font-size: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const TextBox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledTextBox width={props.width} height={props.height} {...props} />;
};
export default TextBox;
