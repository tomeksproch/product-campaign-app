import React, { useState, useContext } from "react";
import { ContextCampaigns } from "../../../context/ContextCampaignsData";
import Button from "../../atoms/Button/Button";
import LabeledCheckbox from "../../molecules/LabeledCheckbox/LabeledCheckbox";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import { StyledForm, Wrapper, ButtonsWrapper } from "./AddCamapignForm.styles";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCampaign({ ...campaign, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await handleAddCampaign(campaign);
    if (response) navigate("/");
  };

  return (
    <Wrapper>
      <h2>New Campaign!</h2>
      <StyledForm onSubmit={handleSubmit}>
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
          value={campaign.offerAmount || ""}
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
          value={campaign.radius || ""}
          onChange={handleChange}
          required
        />
        <ButtonsWrapper>
          <Button
            bgColor="#FF8383"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </Button>
          <Button type="submit" bgColor="#8FCB81">
            Add campaign
          </Button>
        </ButtonsWrapper>
      </StyledForm>
    </Wrapper>
  );
};

export default AddCampaignForm;
