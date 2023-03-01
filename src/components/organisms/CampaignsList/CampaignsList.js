import React, { useContext } from "react";
import { CamapignsDataContext } from "../../../context/CampaignsDataContext";
import CampaignListItem from "../CampaignListItem/CampaignListItem";
import { ListWrapper } from "./CampaignsList.styles";

const CampaignsList = () => {
  const { campaignsData } = useContext(CamapignsDataContext);
  return (
    <ListWrapper>
      {campaignsData.map((campaign) => (
        <CampaignListItem key={campaign.id} campaign={campaign} />
      ))}
    </ListWrapper>
  );
};

export default CampaignsList;
