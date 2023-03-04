import React from "react";
import { createPortal } from "react-dom";
import { StyledToaster } from "./Toaster.styles";
import { MdClose } from "react-icons/md";

const Toaster = (props) => {
  const parent = document.getElementById("root");
  return createPortal(
    <StyledToaster>
      {props.toaster.msg}
      <MdClose onClick={props.closeToaster} />
    </StyledToaster>,
    parent
  );
};

export default Toaster;
