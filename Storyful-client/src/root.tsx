/* Root components are placed here. */

import { Outlet } from "react-router-dom";
import RootHeader from "./components/layout/RootHeader/RootHeader";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator/BottomTabNavigator";
import StoriesContextProvider from "./services/ContextProviders/StoriesContextProvider";

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
