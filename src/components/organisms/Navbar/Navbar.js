import React from "react";
import campaignLogo from "../../../assets/logo/campaign-logo-example.png";
import { Logo, NavbarWrapper } from "./Navbar.styles";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const logoClickNavigate = () => {
    navigate("/");
  };

  const addCampaignNavigate = () => {
    navigate("/add");
  };

  return (
    <NavbarWrapper>
      <Logo
        src={campaignLogo}
        alt="camapign logo"
        onClick={logoClickNavigate}
      />
      <Button onClick={addCampaignNavigate}>Add Campaing </Button>
    </NavbarWrapper>
  );
};

export default Navbar;
