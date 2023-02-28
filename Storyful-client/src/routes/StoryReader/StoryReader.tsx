import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { storiesContextType } from "../../@types/stories";
import axiosInstance from "../../services/axios/axios";
import { StoryDataContext } from "../../services/ContextProviders/StoriesContextProvider";
import "./StoryReader.css";

interface IStoryInformation {
  title: string;
  author: string;
  genre: string;
  cover_location: string;
}

const StoryReader = () => {
  const [storyInformation, setStoryInformation] =
    useState<IStoryInformation>();
  const [documentData, setDocumentData] = useState<string>();
  const { stories } = useContext(StoryDataContext) as storiesContextType;
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id: any = searchParams.get("story-id");
    console.log("id: ", id);
    console.log(stories);
    const getStory = async () => {
      stories.map((story) => {
        if (story.id == id) {
          setStoryInformation(story);
          console.log(story);
        }
      });
    };
    if(id) {
      getStory();
    }

    const fetchDocument = async () => {
      const response: any = await axiosInstance.get(`stories/document/${id}`);
      const data = await response.data;
      setDocumentData(data);
    };
    if (id) {
      fetchDocument();
    }
  }, [location.search, stories]);

  return (
    <section>
      <section className="storyreader-top-section">
        <img src={storyInformation?.cover_location} alt="story cover" />
      </section>
      <section className="storyreader-bottom-section">
        <h1>{storyInformation?.title}</h1>
        <p>{storyInformation?.author}</p>
        <p>{storyInformation?.genre}</p>
        <p style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          {documentData}
        </p>
      </section>
    </section>
  );
};

export default StoryReader;
