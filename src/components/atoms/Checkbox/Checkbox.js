import React from "react";
import { StyledCheckbox } from "./Checkbox.styles";

const Checkbox = (props) => {
  return <StyledCheckbox type="checkbox" id="switch" {...props} />;
};

export default Checkbox;
