// Root components are placed here.

import RootHeader from "./components/layout/RootHeader";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator/BottomTabNavigator";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <RootHeader />
      <Outlet />
      <BottomTabNavigator />
    </>
  );
};

export default Root;
