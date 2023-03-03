import React, { useState, useContext } from "react";
import { ContextCampaigns } from "../../../context/ContextCampaignsData";
import Button from "../../atoms/Button/Button";
import LabeledCheckbox from "../../molecules/LabeledCheckbox/LabeledCheckbox";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
// import { useNavigate } from "react-router";

const AddCampaignForm = () => {
  const { handleAddCampaign } = useContext(ContextCampaigns);
  const [campaign, setCampaign] = useState({
    name: "",
    keywords: "",
    offerAmount: 0,
    budget: 0,
    status: false,
    city: "",
    radius: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCampaign(campaign);
  };

  //   const navigate = useNavigate();
  //   const navigateToCampaignPage = () => {
  //     navigate("/");
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <LabeledInput
        label="Campaign name"
        name="name"
        value={campaign.name}
        onChange={handleChange}
        required
      />
      <LabeledInput
        label="Keywords"
        name="keywords"
        value={campaign.keywords}
        onChange={handleChange}
        required
      />
      <LabeledInput
        label="Offer amount"
        name="offerAmount"
        type="number"
        value={campaign.offerAmount}
        onChange={handleChange}
        required
      />
      <LabeledInput
        label="Campaign fund"
        name="budget"
        type="number"
        value={campaign.budget || ""}
        onChange={handleChange}
        required
      />
      <LabeledCheckbox
        label="Status"
        name="status"
        checked={campaign.status}
        onChange={handleChange}
        required
      />
      <LabeledInput
        label="City"
        name="city"
        value={campaign.city}
        onChange={handleChange}
        required
      />
      <LabeledInput
        label="Radius"
        name="radius"
        type="number"
        value={campaign.radius}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add campaign</Button>
    </form>
  );
};

export default AddCampaignForm;
