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
});

const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser>({
    id: null,
    username: null,
    email: null,
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
    await axiosInstance
      .post<{ jwt: string }>("/users/authenticate", userLoginInformation)
      .then((response) => {
        console.log(
          "Response within AuthContextProvider: authenticate: ",
          response
        );
        console.log(
          "Token within AuthContextProvider: authenticate: ",
          response.data.jwt
        );
        localStorage.setItem("token", JSON.stringify(response.data.jwt));
        setIsAuthenticated(true);
        return true;
      })
      .catch((error) => {
        console.log(
          "!!!Error within AuthContextProvider: authenticate: ",
          error
        );
        setIsAuthenticated(false);
        return false;
      });
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
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, authenticate, isAuthenticated, logout, JWTToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
