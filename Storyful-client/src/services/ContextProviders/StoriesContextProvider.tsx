import React, { createContext, useState } from "react";
import { fetchAllStoriesFromDatabaseTest } from "../../utils/helpers";

export const StoryDataContext = createContext<any>(null);

const StoriesContextProvider = ({ children }: any) => {
  const [stories, setStories] = useState<any>();

  const fetchStories = async () => {
    console.log("Fetching data...");
    const jsonData = await fetchAllStoriesFromDatabaseTest();
    console.log("json data: ", jsonData);
    setStories(jsonData);
  };

  return (
    <StoryDataContext.Provider value={{ stories, fetchStories }}>
      {children}
    </StoryDataContext.Provider>
  );
};

export default StoriesContextProvider;
