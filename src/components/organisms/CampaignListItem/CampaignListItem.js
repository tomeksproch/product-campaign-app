import React from "react";
import {
  ListItemWrapper,
  City,
  Active,
  ActiveDot,
} from "./CampaignListItem.styles";
import { useNavigate } from "react-router-dom";

const CampaignListItem = ({ campaign }) => {
  const { id, name, city, status } = campaign;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <ListItemWrapper>
      <h3>{name}</h3>
      <City>{city}</City>
      <Active>
        {status ? "Active" : "Unactive"}
        <ActiveDot status={status} />
      </Active>
      <button onClick={handleClick}>Show Details</button>
    </ListItemWrapper>
  );
};

export default CampaignListItem;
