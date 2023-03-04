import React, { useContext } from "react";
import {
  ListItemWrapper,
  BottomItemContent,
  Name,
  City,
  Active,
  ActiveDot,
  CloseIconStyles,
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
      <div>
        <BottomItemContent>
          <Name>{name}</Name>
          <CloseIconStyles>
            <FaWindowClose
              size="25px"
              color={"#FF8383"}
              onClick={handleDeleteClick}
            />
          </CloseIconStyles>
        </BottomItemContent>
        <City>
          <FaMapMarkerAlt size="1rem" />
          {city}
        </City>
        <Active>
          {status ? "Active" : "Unactive"}
          <ActiveDot status={status} />
        </Active>
      </div>
      <Button onClick={handleClick} bgColor={"#3795BD"}>
        Show Details
      </Button>
    </ListItemWrapper>
  );
};

export default CampaignListItem;
