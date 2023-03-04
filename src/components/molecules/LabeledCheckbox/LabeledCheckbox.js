import React from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { StyledLabel, Wrapper, CheckboxStatus } from "./LabeledCheckbox.styles";

const LabeledCheckbox = ({ ...rest }) => {
  return (
    <Wrapper>
      <CheckboxStatus>Inactive</CheckboxStatus>
      <Checkbox {...rest} />
      <StyledLabel htmlFor="switch" status={rest.checked} />
      <CheckboxStatus>Active</CheckboxStatus>
    </Wrapper>
  );
};

export default LabeledCheckbox;
