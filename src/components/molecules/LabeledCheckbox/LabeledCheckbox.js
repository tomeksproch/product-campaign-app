import React from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";

const LabeledCheckbox = ({ label, ...rest }) => {
  return (
    <div>
      <label>
        <Checkbox {...rest} />
        {label}
      </label>
    </div>
  );
};

export default LabeledCheckbox;
