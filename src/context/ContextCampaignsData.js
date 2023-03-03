import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ContextCampaigns = createContext();

export function ContextCampaignsProvider({ children }) {
  const [campaigns, setCampaigns] = useState([]);
  const [budget, setBudget] = useState();

  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    const { data: res } = await axios.get("/campaigns");
    setCampaigns(res);

    const { data: budgetRes } = await axios.get("/budget");
    setBudget(budgetRes.budget);
  };

  const handleDeleteCampaigns = async (id) => {
    await axios.delete(`/campaigns`, { data: { id } });
    getCampaigns();
  };

  const handleAddCampaign = async (newCampaing) => {
    const response = await axios.post("/campaigns", newCampaing);
    if (response.status !== 20) return false;
    getCampaigns();
  };

  return (
    <ContextCampaigns.Provider
      value={{
        campaigns,
        handleDeleteCampaigns,
        handleAddCampaign,
        budget,
      }}
    >
      {children}
    </ContextCampaigns.Provider>
  );
}
