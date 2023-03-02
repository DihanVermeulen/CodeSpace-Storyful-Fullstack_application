import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import { IUser, IUserLogin, AuthContextType, IToken } from "../../@types/auth";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  authenticate: async (userLoginInformation: IUserLogin) => {},
  logout: () => {},
  JWTToken: null,
  setIsAuthenticated: () => {},
});

const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({
    id: null,
    username: null,
    email: null,
    avatar: null,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [JWTToken, setJWTToken] = useState<IToken | null>(null);

  const checkIfTokenIsValid = (token: string) => {
    if (token) {
      const decodedToken: any = jwt_decode<IToken>(token);
      const { exp } = decodedToken;
      if (Date.now() >= exp * 1000) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const authenticate = async (userLoginInformation: IUserLogin) => {
    const response = await axiosInstance.post<{ jwt: string }>(
      "/users/authenticate",
      userLoginInformation
    );
    return response;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setJWTToken(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      if (
        checkIfTokenIsValid(JSON.parse(localStorage.getItem("token") as string))
      ) {
        setIsAuthenticated(true);
        const token = JSON.parse(localStorage.getItem("token") as string);
        const decodedToken = jwt_decode<IToken>(token);
        setJWTToken(decodedToken);
      } else {
        logout();
      }
    };
    initializeAuth();

    if (localStorage.getItem("avatar") as string) {
      let avatar = localStorage.getItem("avatar");
      user.avatar = avatar;
    } else {
      const generateRandomString = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomString = "";
        for (let i = 0; i < 6; i++) {
          randomString += alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
          );
        }
        console.log(randomString);
        return randomString;
      };
      const randomString = generateRandomString();
      localStorage.setItem("avatar", JSON.stringify(randomString));
      user.avatar = randomString;
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticate,
        isAuthenticated,
        logout,
        JWTToken,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
