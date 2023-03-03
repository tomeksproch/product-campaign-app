import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import CampaignPage from "./pages/CampaignPage";
import CampaignAdd from "./pages/CampaignAdd";
import CampaignDetails from "./pages/CampaignDetails";
import { ContextCampaignsProvider } from "./context/ContextCampaignsData";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<CampaignPage />} />
      <Route path="add" element={<CampaignAdd />} />
      <Route path="details/:id" element={<CampaignDetails />} />
    </Route>
  )
);

function App() {
  return (
    <ContextCampaignsProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ContextCampaignsProvider>
  );
}

export default App;
