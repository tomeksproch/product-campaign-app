import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextCampaigns } from "../context/ContextCampaignsData";

const CampaignDetails = () => {
  const { id } = useParams();
  const { campaigns } = useContext(ContextCampaigns);
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  const { name, keywords, offerAmount, budget, status, city, radius } =
    campaign;

  return (
    <div>
      <h2>{name}</h2>
      <p>Keywords: {keywords.join(", ")}</p>
      <p>Offer Amount: {offerAmount}</p>
      <p>Budget: {budget}</p>
      <p>Status: {status ? "Active" : "Inactive"}</p>
      <p>City: {city}</p>
      <p>Radius: {radius} km</p>
    </div>
  );
};

export default CampaignDetails;
