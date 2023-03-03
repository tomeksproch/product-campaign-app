import React from "react";
import Input from "../../atoms/Input/Input";
import { InputContainer, StyledLabel } from "./LabeledInput.styles";

const LabeledInput = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <Input {...rest} />
      <StyledLabel>{label}</StyledLabel>
    </InputContainer>
  );
};

export default LabeledInput;
