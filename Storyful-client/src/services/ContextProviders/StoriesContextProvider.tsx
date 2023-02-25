import React, { createContext, useEffect, useMemo, useState } from "react";
import { IStories, storiesContextType } from "../../@types/stories";
import { fetchAllStoriesFromDatabaseTest } from "../../utils/helpers";

export const StoryDataContext = createContext<storiesContextType>({
  stories: [],
});

const StoriesContextProvider = ({ children }: any) => {
  const [stories, setStories] = useState<IStories[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      console.log("Fetching data...");
      const jsonData = await fetchAllStoriesFromDatabaseTest();
      console.log("json data: ", jsonData);
      setStories(jsonData);
    };
    fetchStories();
  }, []);

  const memoizedValue = useMemo(() => ({ stories }), [stories]);

  return (
    <StoryDataContext.Provider value={memoizedValue}>
      {children}
    </StoryDataContext.Provider>
  );
};

export default StoriesContextProvider;
