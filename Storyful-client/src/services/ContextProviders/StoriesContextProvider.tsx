import React, { createContext, useEffect, useMemo, useState } from "react";
import { IStories, storiesContextType } from "../../@types/stories";
import { fetchAllStoriesFromDatabase } from "../../utils/helpers";

export const StoryDataContext = createContext<storiesContextType>({
  stories: [],
});

const StoriesContextProvider = ({ children }: any) => {
  const [stories, setStories] = useState<IStories[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const jsonData = await fetchAllStoriesFromDatabase();
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
