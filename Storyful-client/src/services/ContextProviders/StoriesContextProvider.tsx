import React, { createContext, useMemo, useState } from "react";
import { IStories, storiesContextType } from "../../@types/stories";
import { fetchAllStoriesFromDatabaseTest } from "../../utils/helpers";

export const StoryDataContext = createContext<storiesContextType | null>(null);

const StoriesContextProvider = ({ children }: any) => {
  const [stories, setStories] = useState<IStories[]>([]);

  const fetchStories = async () => {
    console.log("Fetching data...");
    const jsonData = await fetchAllStoriesFromDatabaseTest();
    console.log("json data: ", jsonData);
    setStories(jsonData);
  };

  const memoizedValue = useMemo(() => ({ stories, fetchStories }), [stories]);

  return (
    <StoryDataContext.Provider value={memoizedValue}>
      {children}
    </StoryDataContext.Provider>
  );
};

export default StoriesContextProvider;
