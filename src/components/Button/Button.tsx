"use client";
import React, { ButtonHTMLAttributes, PropsWithChildren, useMemo } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{
  color: string;
  textColor: string;
  border: string;
}>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  padding: 10px 40px;
  border-radius: 3px;
  border: ${(props) => props.border};
  font-size: 16px;
  font-weight: 700;
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "transparent";
}
const Button = ({
  variant,
  children,
  ...otherProps
}: PropsWithChildren<IButtonProps>) => {
  const buttonColor = useMemo(() => {
    switch (variant) {
      case "primary":
        return { color: "#FFFF00", textColor: "black", border: "none" };
      case "secondary":
        return {
          color: "black",
          textColor: "#FFFF00",
          border: "1px solid #FFFF00",
        };
      case "transparent":
        return { color: "white", textColor: "black", border: "none" };
    }
  }, [variant]);

  return (
    <StyledButton
      color={buttonColor.color}
      textColor={buttonColor.textColor}
      border={buttonColor.border}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
