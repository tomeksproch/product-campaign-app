import React from "react";
import { StyledSelect } from "./Select.styles";

const Select = (props) => {
  return (
    <StyledSelect
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    >
      {props?.options?.map((el) => {
        return (
          <option key={el.id} value={el.description}>
            {el.description}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
