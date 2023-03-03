import React, { useContext } from "react";
import {
  ListItemWrapper,
  BottomItemContent,
  Name,
  City,
  Active,
  ActiveDot,
} from "./CampaignListItem.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { FaWindowClose, FaMapMarkerAlt } from "react-icons/fa";
import { ContextCampaigns } from "../../../context/ContextCampaignsData";

const CampaignListItem = ({ campaign }) => {
  const { id, name, city, status } = campaign;
  const { handleDeleteCampaigns } = useContext(ContextCampaigns);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    handleDeleteCampaigns(id);
  };

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <ListItemWrapper>
      <BottomItemContent>
        <Name>{name}</Name>
        <FaWindowClose size="2rem" onClick={handleDeleteClick} />
      </BottomItemContent>
      <City>
        <FaMapMarkerAlt size="1rem" />
        {city}
      </City>
      <Active>
        {status ? "Active" : "Unactive"}
        <ActiveDot status={status} />
      </Active>
      <Button onClick={handleClick}>Show Details</Button>
    </ListItemWrapper>
  );
};

export default CampaignListItem;
