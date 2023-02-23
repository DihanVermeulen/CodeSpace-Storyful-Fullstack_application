// Root components are placed here.

import RootHeader from "./components/layout/RootHeader/RootHeader";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator/BottomTabNavigator";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllStoriesFromDatabase } from "./utils/helpers";

const Root = () => {
  const [stories, setStories] = useState<any>();

  useEffect(() => {
    fetchAllStoriesFromDatabase().then((response: any) =>
      setStories(response.data)
    );
  }, []);

  return (
    <>
      <RootHeader />
      <Outlet context={stories} />
      <BottomTabNavigator />
    </>
  );
};

export default Root;
