import { useState, useRef, useEffect } from "react";
import "./BottomTabNavigator.css";
import homeIcon from "./../../../assets/BottomTabNavigatorIcons/home-icon.svg";
import bookIcon from "./../../../assets/BottomTabNavigatorIcons/book-icon.svg";
import profileIcon from "./../../../assets/BottomTabNavigatorIcons/profile-icon.svg";

const BottomTabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState<number | null>(null);
  const indicatorRef: any = useRef(null);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    const buttonWidth = indicatorRef.current.offsetWidth;
    const gridColumns = 3; // change this to match your grid
    const columnWidth = window.screen.width / gridColumns;
    const columnMiddlePoint = columnWidth / 2 - buttonWidth / 2;

    switch (tabIndex) {
      case 0:
        setIndicatorPosition(columnMiddlePoint);
        break;
      case 1:
        setIndicatorPosition(columnMiddlePoint + columnWidth);
        break;
      case 2:
        setIndicatorPosition(columnMiddlePoint + columnWidth * 2);
    }
  };

  useEffect(() => {
    handleTabClick(0);
  }, [])

  return (
    <nav className="bottomtabnavigator-container">
      <div
        className={`bottomtabnavigator-container-button-container ${
          activeTab === 0 ? "selected" : ""
        }`}
        onClick={() => {
          handleTabClick(0);
          console.log("Tab 1 clicked");
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" fill="none" />
          <path
            d="M20 29.9833V24.9833M15.0333 4.73334L6.05001 11.7333C4.55001 12.9 3.33334 15.3833 3.33334 17.2667V29.6167C3.33334 33.4833 6.48334 36.65 10.35 36.65H29.65C33.5167 36.65 36.6667 33.4833 36.6667 29.6333V17.5C36.6667 15.4833 35.3167 12.9 33.6667 11.75L23.3667 4.53334C21.0333 2.90001 17.2833 2.98334 15.0333 4.73334Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`bottomtabnavigator-container-button-container ${
          activeTab === 1 ? "selected" : ""
        }`}
        onClick={() => {
          handleTabClick(1);
          console.log("Tab 2 clicked");
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 9.15V34.15M12.9167 14.15H9.16667M14.1667 19.15H9.16667M36.6667 27.9V7.78333C36.6667 5.78333 35.0333 4.3 33.05 4.46667H32.95C29.45 4.76667 24.1333 6.55 21.1667 8.41667L20.8833 8.6C20.4 8.9 19.6 8.9 19.1167 8.6L18.7 8.35C15.7333 6.5 10.4333 4.73333 6.93333 4.45C4.95 4.28333 3.33333 5.78333 3.33333 7.76667V27.9C3.33333 29.5 4.63333 31 6.23333 31.2L6.71667 31.2667C10.3333 31.75 15.9167 33.5833 19.1167 35.3333L19.1833 35.3667C19.6333 35.6167 20.35 35.6167 20.7833 35.3667C23.9833 33.6 29.5833 31.75 33.2167 31.2667L33.7667 31.2C35.3667 31 36.6667 29.5 36.6667 27.9Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`bottomtabnavigator-container-button-container ${
          activeTab === 2 ? "selected" : ""
        }`}
        onClick={() => {
          handleTabClick(2);
          console.log("Tab 3 clicked");
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2667 18.1167C20.1 18.1 19.9 18.1 19.7167 18.1167C17.8037 18.0517 15.9911 17.2447 14.6627 15.8666C13.3344 14.4885 12.5946 12.6474 12.6 10.7333C12.6 6.64999 15.9 3.33333 20 3.33333C20.9707 3.31582 21.9353 3.48967 22.8388 3.84496C23.7423 4.20025 24.567 4.73001 25.2657 5.40401C25.9645 6.07801 26.5237 6.88304 26.9113 7.77314C27.299 8.66324 27.5075 9.62097 27.525 10.5917C27.5425 11.5623 27.3687 12.527 27.0134 13.4305C26.6581 14.334 26.1283 15.1586 25.4543 15.8574C24.7803 16.5562 23.9753 17.1153 23.0852 17.503C22.1951 17.8906 21.2374 18.0992 20.2667 18.1167ZM11.9333 24.2667C7.9 26.9667 7.9 31.3667 11.9333 34.05C16.5167 37.1167 24.0333 37.1167 28.6167 34.05C32.65 31.35 32.65 26.95 28.6167 24.2667C24.05 21.2167 16.5333 21.2167 11.9333 24.2667Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="indicator"
        ref={indicatorRef}
        style={{ left: `${indicatorPosition}px` }}
      />
    </nav>
  );
};

export default BottomTabNavigator;
