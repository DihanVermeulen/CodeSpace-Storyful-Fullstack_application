import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../../../@types/auth";
import { AuthContext } from "../../../services/ContextProviders/AuthContextProvider";
import Avatar from "boring-avatars";
import logo from "../../../assets/logo.svg";
import "./RootHeader.css";
import Logo from "../../../assets/logo";

const RootHeader = () => {
  const { isAuthenticated, logout, user } = useContext(
    AuthContext
  ) as AuthContextType;
  const navigate = useNavigate();
  return (
    <header className="rootheader-container">
      <div className="rootheader-container-item">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.2333 13.85C30.3207 13.85 31.3636 13.4181 32.1325 12.6492C32.9014 11.8803 33.3333 10.8374 33.3333 9.75002C33.3333 8.66264 32.9014 7.61979 32.1325 6.85089C31.3636 6.08199 30.3207 5.65002 29.2333 5.65002C28.146 5.65002 27.1031 6.08199 26.3342 6.85089C25.5653 7.61979 25.1333 8.66264 25.1333 9.75002C25.1333 10.8374 25.5653 11.8803 26.3342 12.6492C27.1031 13.4181 28.146 13.85 29.2333 13.85ZM10.7667 13.85C11.8541 13.85 12.8969 13.4181 13.6658 12.6492C14.4347 11.8803 14.8667 10.8374 14.8667 9.75002C14.8667 8.66264 14.4347 7.61979 13.6658 6.85089C12.8969 6.08199 11.8541 5.65002 10.7667 5.65002C9.67928 5.65002 8.63643 6.08199 7.86753 6.85089C7.09863 7.61979 6.66667 8.66264 6.66667 9.75002C6.66667 10.8374 7.09863 11.8803 7.86753 12.6492C8.63643 13.4181 9.67928 13.85 10.7667 13.85ZM29.2333 34.35C29.7718 34.35 30.3049 34.244 30.8023 34.0379C31.2998 33.8319 31.7518 33.5299 32.1325 33.1492C32.5132 32.7684 32.8152 32.3165 33.0212 31.819C33.2273 31.3216 33.3333 30.7884 33.3333 30.25C33.3333 29.7116 33.2273 29.1785 33.0212 28.681C32.8152 28.1836 32.5132 27.7316 32.1325 27.3509C31.7518 26.9702 31.2998 26.6682 30.8023 26.4621C30.3049 26.2561 29.7718 26.15 29.2333 26.15C28.146 26.15 27.1031 26.582 26.3342 27.3509C25.5653 28.1198 25.1333 29.1626 25.1333 30.25C25.1333 31.3374 25.5653 32.3803 26.3342 33.1492C27.1031 33.9181 28.146 34.35 29.2333 34.35ZM10.7667 34.35C11.3051 34.35 11.8382 34.244 12.3357 34.0379C12.8331 33.8319 13.2851 33.5299 13.6658 33.1492C14.0465 32.7684 14.3485 32.3165 14.5546 31.819C14.7606 31.3216 14.8667 30.7884 14.8667 30.25C14.8667 29.7116 14.7606 29.1785 14.5546 28.681C14.3485 28.1836 14.0465 27.7316 13.6658 27.3509C13.2851 26.9702 12.8331 26.6682 12.3357 26.4621C11.8382 26.2561 11.3051 26.15 10.7667 26.15C9.67928 26.15 8.63643 26.582 7.86753 27.3509C7.09863 28.1198 6.66667 29.1626 6.66667 30.25C6.66667 31.3374 7.09863 32.3803 7.86753 33.1492C8.63643 33.9181 9.67928 34.35 10.7667 34.35Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Logo colour="#000000" />
      </div>
      <div style={{ display: "inline-flex" }}>
        {isAuthenticated ? (
          <button
            className="login-logout-button"
            aria-label="Logout from your account"
            onClick={() => {
              logout();
              console.log(isAuthenticated);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="login-logout-button"
            aria-label="Login to your account"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {isAuthenticated ? (
          <Avatar
            size={45}
            name={user?.avatar}
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        ) : (
          <div
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#F3F3F3",
              borderRadius: 100,
            }}
          />
        )}
      </div>
    </header>
  );
};

export default RootHeader;
