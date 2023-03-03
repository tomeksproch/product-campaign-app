import React from "react";
import Input from "../../atoms/Input/Input";

const LabeledInput = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...rest} />
    </div>
  );
};

export default LabeledInput;
