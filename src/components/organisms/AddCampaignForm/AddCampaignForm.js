import React, { useState, useContext, useEffect } from "react";
import { ContextCampaigns } from "../../../context/ContextCampaignsData";
import Button from "../../atoms/Button/Button";
import LabeledCheckbox from "../../molecules/LabeledCheckbox/LabeledCheckbox";
import LabeledInput from "../../molecules/LabeledInput/LabeledInput";
import { StyledForm, Wrapper, ButtonsWrapper } from "./AddCamapignForm.styles";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import LabeledSelect from "../../molecules/LabeledSelect/LabeledSelect";
import KeywordsSelect from "../../molecules/KeywordsSelect/KeywordsSelect";
import axios from "axios";
import Toaster from "../../atoms/Toaster/Toaster";

const AddCampaignForm = () => {
  const [suggestedKeywords, setSuggestedKeywords] = useState([]);
  const { handleAddCampaign, cities, campaigns } = useContext(ContextCampaigns);
  const [keyword, setKeyword] = useState("");
  const [campaign, setCampaign] = useState({
    name: "",
    keywords: [],
    offerAmount: 0,
    budget: 0,
    status: false,
    city: "",
    radius: 0,
  });
  const [toaster, setToaster] = useState({ show: false, msg: "", status: "" });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id > 0) {
      const campaignFound =
        campaigns[
          campaigns.findIndex((elem) => {
            return elem.id === Number(id);
          })
        ];
      setCampaign({ ...campaignFound });
    } else {
      setCampaign({ ...campaign, city: cities[0].description });
    }
  }, [cities]);

  const handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCampaign({ ...campaign, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await handleAddCampaign(campaign);
    if (response.status !== 200) {
      setToaster({
        show: true,
        msg: response.response.data,
        status: "error",
      });
    } else navigate("/");
  };

  const handleKeywordChange = async (e) => {
    e.preventDefault();
    const { value } = e.target;
    setKeyword(value);
    let suggestedKeywordsFound = ["No keywords found"];
    if (value.length > 2) {
      const response = await axios.get(`/keywords?keyword=${value}`);
      if (response.data.length > 0) suggestedKeywordsFound = response.data;
    }
    setSuggestedKeywords(suggestedKeywordsFound);
  };

  const handleKeywordClick = (keyword, e) => {
    e.preventDefault();
    let tmp_selectedKeywords = campaign.keywords;
    tmp_selectedKeywords.push(keyword);
    setCampaign({ ...campaign, keywords: tmp_selectedKeywords });
    setSuggestedKeywords([]);
    setKeyword("");
  };

  const deleteKeyword = (keyword) => {
    let tmp_selectedKeywords = campaign.keywords;
    tmp_selectedKeywords = tmp_selectedKeywords.filter((elem) => {
      return elem !== keyword;
    });
    setCampaign({ ...campaign, keywords: tmp_selectedKeywords });
  };

  const closeToaster = () => {
    setToaster({ show: false, msg: "", error: "" });
  };

  return (
    <Wrapper>
      {toaster.show && (
        <Toaster toaster={toaster} closeToaster={closeToaster} />
      )}
      <h2>{id > 0 ? "Edit campaign!" : "Add campaign!"}</h2>
      <StyledForm>
        <LabeledInput
          label="Campaign name"
          name="name"
          value={campaign.name}
          onChange={handleChange}
          required
        />

        <KeywordsSelect
          label="Keywords"
          name="keywords"
          value={keyword}
          onChange={handleKeywordChange}
          handleKeywordClick={handleKeywordClick}
          suggestedKeywords={suggestedKeywords}
          selectedKeyword={campaign.keywords}
          keywordName={keyword}
          deleteKeyword={deleteKeyword}
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
        <LabeledSelect
          options={cities}
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
      </StyledForm>
      <ButtonsWrapper>
        <Button
          bgColor="#FF8383"
          onClick={() => {
            navigate(id > 0 ? `/details/${id}` : "/");
          }}
        >
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit} bgColor="#8FCB81">
          {id > 0 ? "Update campaign" : "Add campaign"}
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default AddCampaignForm;
