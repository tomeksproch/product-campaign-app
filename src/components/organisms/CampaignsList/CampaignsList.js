import React, { useContext } from "react";
import CampaignListItem from "../../molecules/CampaignListItem/CampaignListItem";
import { ListWrapper } from "./CampaignsList.styles";
import { ContextCampaigns } from "../../../context/ContextCampaignsData";

const CampaignsList = () => {
  const { campaigns } = useContext(ContextCampaigns);

  return (
    <ListWrapper>
      {campaigns.map((campaign) => (
        <CampaignListItem key={campaign.id} campaign={campaign} />
      ))}
    </ListWrapper>
  );
};

export default CampaignsList;
