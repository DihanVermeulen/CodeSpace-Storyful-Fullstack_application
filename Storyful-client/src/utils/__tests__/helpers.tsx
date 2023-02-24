import axios from "axios";
import StoriesTestData from './../../data/__tests__/stories.json';

export const fetchAllStoriesFromDatabaseTest = async () => {
  try {
    const response = await StoriesTestData;
    return response;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
