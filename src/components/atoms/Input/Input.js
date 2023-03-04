import React from "react";
import { StyledInput } from "./Input.styles";

const Input = (props) => {
  return <StyledInput {...props} className={props.value ? "is-valid" : ""} />;
};

export default Input;
