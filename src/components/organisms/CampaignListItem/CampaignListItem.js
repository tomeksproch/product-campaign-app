import React from "react";
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
import { FaWindowClose } from "react-icons/fa";

const CampaignListItem = ({ campaign }) => {
  const { id, name, city, status } = campaign;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <ListItemWrapper>
      <BottomItemContent>
        <Name>{name}</Name>
        <FaWindowClose size="2rem" />
      </BottomItemContent>
      <City>{city}</City>
      <Active>
        {status ? "Active" : "Unactive"}
        <ActiveDot status={status} />
      </Active>
      <Button onClick={handleClick}>Show Details</Button>
    </ListItemWrapper>
  );
};

export default CampaignListItem;
