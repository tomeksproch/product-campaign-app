import React from "react";
import campaignLogo from "../../../assets/logo/campaign-logo-example.png";
import { Logo, NavbarWrapper } from "./Navbar.styles";
import Button from "../../atoms/Button/Button";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo src={campaignLogo} alt="camapign logo" />
      <Button>Add Campaing </Button>
    </NavbarWrapper>
  );
};

export default Navbar;
