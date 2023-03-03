import React, { useContext } from "react";
import campaignLogo from "../../../assets/logo/campaign-logo-example.png";
import { Logo, NavbarWrapper, Budget } from "./Navbar.styles";
import { useNavigate } from "react-router";

import { ContextCampaigns } from "../../../context/ContextCampaignsData";

const Navbar = () => {
  const navigate = useNavigate();
  const { budget } = useContext(ContextCampaigns);

  const logoClickNavigate = () => {
    navigate("/");
  };

  return (
    <NavbarWrapper>
      <Logo
        src={campaignLogo}
        alt="camapign logo"
        onClick={logoClickNavigate}
      />
      <Budget>Your budget: {budget}€</Budget>
    </NavbarWrapper>
  );
};

export default Navbar;
