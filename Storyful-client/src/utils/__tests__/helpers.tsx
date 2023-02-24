import axios from "./../../services/axios/axios";

export const fetchAllStoriesFromDatabase = async () => {
  try {
    const response = await axios.get("/stories");
    return response;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
