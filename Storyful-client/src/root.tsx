// Root components are placed here.

import RootHeader from "./components/layout/RootHeader";
import BottomTabNavigator from "./components/navigation/BottomTabNavigator";

const Root = () => {
  return (
    <>
      <RootHeader />
      <BottomTabNavigator />
    </>
  );
};

export default Root;
