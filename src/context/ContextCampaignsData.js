import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ContextCampaigns = createContext();

export function ContextCampaignsProvider({ children }) {
  const [campaigns, setCampaigns] = useState([]);
  const [budget, setBudget] = useState();
  const [cities, setCities] = useState();

  const API_URL = "https://product-campaign-app-api.herokuapp.com";

  useEffect(() => {
    getCampaigns();
    getCities();
  }, []);

  const getCampaigns = async () => {
    const { data: res } = await axios.get(`${API_URL}/campaigns`);
    setCampaigns(res);

    const { data: budgetRes } = await axios.get(`${API_URL}/budget`);
    setBudget(budgetRes.budget);
  };

  const getCities = async () => {
    const { data: citiesRes } = await axios.get(`${API_URL}/cities`);
    setCities(citiesRes);
  };

  const handleDeleteCampaigns = async (id) => {
    await axios.delete(`${API_URL}/campaigns`, { data: { id } });
    getCampaigns();
  };

  const handleAddCampaign = async (newCampaign) => {
    const response = await axios
      .post(`${API_URL}/campaigns`, newCampaign)
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
