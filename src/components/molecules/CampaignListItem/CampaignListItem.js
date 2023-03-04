import React, { useContext, useState } from "react";
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
import Toaster from "../../atoms/Toaster/Toaster";

const CampaignListItem = ({ campaign }) => {
  const { id, name, city, status } = campaign;
  const { handleDeleteCampaigns } = useContext(ContextCampaigns);
  const [toaster, setToaster] = useState({ show: false, msg: "", status: "" });
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    handleDeleteCampaigns(id);
  };

  const handleClick = () => {
    navigate(`/details/${id}`);
  };

  const closeToaster = () => {
    setToaster({ show: false, msg: "", error: "" });
  };

  return (
    <ListItemWrapper>
      {toaster.show && (
        <Toaster toaster={toaster} closeToaster={closeToaster} />
      )}
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
          {status ? "Active" : "Inactive"}
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
