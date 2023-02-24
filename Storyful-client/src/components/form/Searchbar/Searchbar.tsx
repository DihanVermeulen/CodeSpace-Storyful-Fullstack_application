import { useState } from "react";
import "./Searchbar.css";

const Searchbar = () => {
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  return (
    <div className="searchbar-container">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20C13.3869 20 15.6761 19.0518 17.364 17.364C19.0518 15.6761 20 13.3869 20 11C20 8.61305 19.0518 6.32387 17.364 4.63604C15.6761 2.94821 13.3869 2 11 2C8.61305 2 6.32387 2.94821 4.63604 4.63604C2.94821 6.32387 2 8.61305 2 11C2 13.3869 2.94821 15.6761 4.63604 17.364C6.32387 19.0518 8.61305 20 11 20ZM18.93 20.69C19.46 22.29 20.67 22.45 21.6 21.05C22.45 19.77 21.89 18.72 20.35 18.72C19.21 18.71 18.57 19.6 18.93 20.69Z"
            stroke={inputFocused ? "#721CFF" : "#AFAFAF"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        className="searchbar-container-input"
        placeholder="Search story"
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </div>
  );
};

export default Searchbar;