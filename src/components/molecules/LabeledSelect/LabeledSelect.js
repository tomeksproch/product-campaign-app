import React from "react";
import Select from "../../atoms/Select/Select";
import { SelectContainer, StyledLabel } from "./LabeledSelect.styles";

const LabeledSelect = (props) => {
  return (
    <SelectContainer>
      <Select {...props} />
      <StyledLabel>{props.label}</StyledLabel>
    </SelectContainer>
  );
};

export default LabeledSelect;
