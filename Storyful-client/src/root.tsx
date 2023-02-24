// Root components are placed here.

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import RootHeader from "./components/layout/RootHeader/RootHeader";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator/BottomTabNavigator";
import { fetchAllStoriesFromDatabase } from "./utils/helpers";
import StoriesContextProvider from "./services/ContextProviders/StoriesContextProvider";

const Root = () => {
  return (
    <>
      <RootHeader />
      <StoriesContextProvider>
        <Outlet />
      </StoriesContextProvider>
      <BottomTabNavigator />
    </>
  );
};

export default Root;
