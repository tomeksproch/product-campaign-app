import React from "react";
import { StyledInput } from "./Input.styles";

const Input = (props) => {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      if (event.target.value) {
        input.classList.add("is-valid");
      } else {
        input.classList.remove("is-valid");
      }
    });
  });

  return <StyledInput {...props} />;
};

export default Input;
