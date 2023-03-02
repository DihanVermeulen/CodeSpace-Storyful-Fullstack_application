import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IStories, LibraryContextType } from "../../@types/stories";
import axiosInstance from "../axios/axios";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContextProvider";
import { AuthContextType } from "../../@types/auth";

export const LibraryContext = createContext<LibraryContextType>({
  library: [],
  getLibrary: () => {},
});

const LibraryContextProvider = ({ children }: any) => {
  const { isAuthenticated } = useContext(AuthContext) as AuthContextType;
  const [library, setLibrary] = useState<any>();

  const getLibrary = async () => {
    const token = JSON.parse(localStorage.getItem("token") as string);
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const { id } = decodedToken;
      console.log("user id inside LibraryContextProvider: ", id);
      const response = await axiosInstance.get(`/library/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { data } = response;
      setLibrary(data);
      return data;
    } else throw new Error();
  };

  useEffect(() => {
    if (isAuthenticated) {
      getLibrary();
    } else {
      setLibrary([]);
    }
  }, [isAuthenticated]);

  const memoizedValue = useMemo(
    () => ({ library, getLibrary }),
    [library, getLibrary]
  );

  return (
    <LibraryContext.Provider value={memoizedValue}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryContextProvider;
