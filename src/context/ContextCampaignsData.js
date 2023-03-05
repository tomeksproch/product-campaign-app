import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ContextCampaigns = createContext();

export function ContextCampaignsProvider({ children }) {
  const [campaigns, setCampaigns] = useState([]);
  const [budget, setBudget] = useState();
  const [cities, setCities] = useState();

  // const API_URL = "https://product-campaign-app-api.herokuapp.com";

  useEffect(() => {
    getCampaigns();
    getCities();
  }, []);

  const getCampaigns = async () => {
    const { data: res } = await axios.get(
      `https://product-campaign-app-api.herokuapp.com/campaigns`
    );
    setCampaigns(res);

    const { data: budgetRes } = await axios.get(
      `https://product-campaign-app-api.herokuapp.com/budget`
    );
    setBudget(budgetRes.budget);
  };

  const getCities = async () => {
    const { data: citiesRes } = await axios.get(
      `https://product-campaign-app-api.herokuapp.com/cities`
    );
    setCities(citiesRes);
  };

  const handleDeleteCampaigns = async (id) => {
    await axios.delete(
      `https://product-campaign-app-api.herokuapp.com/campaigns`,
      { data: { id } }
    );
    getCampaigns();
  };

  const handleAddCampaign = async (newCampaign) => {
    const response = await axios
      .post(
        `https://product-campaign-app-api.herokuapp.com/campaigns`,
        newCampaign
      )
      .catch((error) => {
        return error;
      });
    getCampaigns();
    return response;
  };

  return (
    <ContextCampaigns.Provider
      value={{
        campaigns,
        handleDeleteCampaigns,
        handleAddCampaign,
        budget,
        cities,
      }}
    >
      {children}
    </ContextCampaigns.Provider>
  );
}
