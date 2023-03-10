import axios from "../services/axios/axios";
import StoriesTestData from "../data/stories.json";

export const fetchAllStoriesFromDatabase = async () => {
  try {
    const response = await axios.get("/stories");
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchAllStoriesFromDatabaseTest = async () => {
  try {
    const response = await StoriesTestData;
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
