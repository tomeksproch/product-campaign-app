import React from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({ children, bgColor, textColor, onClick }) => {
  return (
    <ButtonWrapper bgColor={bgColor} textColor={textColor} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
