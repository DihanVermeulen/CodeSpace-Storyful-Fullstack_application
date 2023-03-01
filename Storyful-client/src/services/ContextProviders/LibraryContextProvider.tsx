import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IStories, LibraryContextType } from "../../@types/stories";
import { fetchAllStoriesFromDatabase } from "../../utils/helpers";
import axiosInstance from "../axios/axios";
import jwt_decode from "jwt-decode";
import { AuthContext } from "./AuthContextProvider";
import { AuthContextType } from "../../@types/auth";

export const LibraryContext = createContext<LibraryContextType>({
  libraryStories: [],
  library: [],
});

const LibraryContextProvider = ({ children }: any) => {
  const { isAuthenticated } = useContext(AuthContext) as AuthContextType;
  const [libraryStories, setLibraryStories] = useState<IStories[]>([]);
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
      console.log("data inside LibraryContextProvider: ", data);
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
    console.log(
      "Inside Library Context Provider: isAuthenticated",
      isAuthenticated
    );
  }, [isAuthenticated]);

  const memoizedValue = useMemo(
    () => ({ libraryStories, library }),
    [libraryStories, library]
  );

  return (
    <LibraryContext.Provider value={memoizedValue}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryContextProvider;
