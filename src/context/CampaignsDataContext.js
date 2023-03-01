import { createContext, useState } from "react";
import { EXAMPLE_CAMPAIGNS } from "../data";

export const CamapignsDataContext = createContext(EXAMPLE_CAMPAIGNS);

const CampaignsDataProvider = ({ children }) => {
  const [campaignsData, setCampaignsData] = useState(EXAMPLE_CAMPAIGNS);

  return (
    <CamapignsDataContext.Provider value={{ campaignsData, setCampaignsData }}>
      {children}
    </CamapignsDataContext.Provider>
  );
};

export default CampaignsDataProvider;
