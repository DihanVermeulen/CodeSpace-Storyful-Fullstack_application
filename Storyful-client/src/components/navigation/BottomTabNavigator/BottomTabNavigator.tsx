import { useState } from "react";
import "./BottomTabNavigator.css";
import homeIcon from "./../../../assets/BottomTabNavigatorIcons/home-icon.svg";
import bookIcon from "./../../../assets/BottomTabNavigatorIcons/book-icon.svg";
import profileIcon from "./../../../assets/BottomTabNavigatorIcons/profile-icon.svg";

const BottomTabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <nav className="bottomtabnavigator-container">
      <div className="bottomtabnavigator-container-button-container">
        <img src={homeIcon} />
      </div>
      <div className="bottomtabnavigator-container-button-container">
        <img src={bookIcon} />
      </div>
      <div className="bottomtabnavigator-container-button-container">
        <img src={profileIcon} />
      </div>
    </nav>
  );
};

export default BottomTabNavigator;
