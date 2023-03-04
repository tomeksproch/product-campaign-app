import React, { useContext } from "react";
import {
  DetailsWrapper,
  StyledKeyword,
  KeywordsWrapper,
  Active,
  ActiveDot,
  ButtonsWrapper,
} from "./CampaignDetails.styles";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import { ContextCampaigns } from "../../context/ContextCampaignsData";

const CampaignDetails = () => {
  const { id } = useParams();
  const { campaigns } = useContext(ContextCampaigns);
  const campaign =
    campaigns[
      campaigns.findIndex((elem) => {
        return elem.id === Number(id);
      })
    ];

  const navigate = useNavigate();

  const handleEditCampaignClick = () => {
    navigate(`/add/${id}`);
  };

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  const { name, keywords, offerAmount, budget, status, city, radius } =
    campaign;

  return (
    <DetailsWrapper>
      <h2>{name}</h2>
      <div>
        Keywords:
        <KeywordsWrapper>
          {keywords.map((keyword, index) => {
            return <StyledKeyword key={index}> {keyword}</StyledKeyword>;
          })}
        </KeywordsWrapper>
      </div>
      <p>
        Offer Amount: <b>{offerAmount}€</b>
      </p>
      <p>
        Budget: <b>{budget}€</b>
      </p>
      <Active>
        Status: <b>{status ? "Active" : "Inactive"}</b>{" "}
        <ActiveDot status={status} />
      </Active>
      <p>
        City: <b>{city}</b>
      </p>
      <p>
        Radius: <b>{radius} km</b>
      </p>
      <ButtonsWrapper>
        <Button
          bgColor="#FF8383"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to List
        </Button>
        <Button bgColor={"#3795BD"} onClick={handleEditCampaignClick}>
          Edit Campaign
        </Button>
      </ButtonsWrapper>
    </DetailsWrapper>
  );
};

export default CampaignDetails;
