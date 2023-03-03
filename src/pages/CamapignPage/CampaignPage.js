import React from "react";
import CampaignsList from "../../components/organisms/CampaignsList/CampaignsList";
import Button from "../../components/atoms/Button/Button";
import { useNavigate } from "react-router";
import {
  CampaignPageWrapper,
  AddWrapper,
  AddText,
} from "./CampaignPage.styles";

const CampaignPage = () => {
  const navigate = useNavigate();
  const addCampaignNavigate = () => {
    navigate("/add");
  };

  return (
    <CampaignPageWrapper>
      <AddWrapper>
        <AddText>Add Campaign</AddText>
        <Button onClick={addCampaignNavigate}>+ </Button>
      </AddWrapper>
      <CampaignsList />
    </CampaignPageWrapper>
  );
};

export default CampaignPage;
