import { Outlet } from "react-router";
import Navbar from "./components/organisms/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
