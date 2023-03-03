import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ContextCampaigns = createContext();

export function ContextCampaignsProvider({ children }) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaigns = async () => {
      const { data: res } = await axios.get("/campaigns");
      setCampaigns(res);
      console.log(res);
    };
    getCampaigns();
  }, []);

  const handleDeleteCampaigns = async (campaignToDelete) => {
    await axios.delete(`/campaigns`);
    setCampaigns(campaigns.filter((c) => c.id !== campaignToDelete.id));
  };

  const handleAddCampaign = async (newCampaing) => {
    const { data } = await axios.post("/campaigns", newCampaing);
    setCampaigns([...campaigns, data]);
    console.log(data);
  };

  return (
    <ContextCampaigns.Provider
      value={{
        campaigns,
        handleDeleteCampaigns,
        handleAddCampaign,
      }}
    >
      {children}
    </ContextCampaigns.Provider>
  );
}
