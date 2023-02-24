// Root components are placed here.

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import RootHeader from "./components/layout/RootHeader/RootHeader";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator/BottomTabNavigator";
import { fetchAllStoriesFromDatabase } from "./utils/helpers";

const Root = () => {
  const [stories, setStories] = useState<any>();

  useEffect(() => {
    fetchAllStoriesFromDatabase()
      .then((response: any) => {
        console.log(response);
        setStories(response.data);
      })
      .catch((error) => console.log(error));
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
