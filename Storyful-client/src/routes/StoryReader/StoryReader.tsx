import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContextType } from "../../@types/auth";
import { LibraryContextType, storiesContextType } from "../../@types/stories";
import BackIcon from "../../assets/TopNavigator/BackIcon";
import MoreIcon from "../../assets/TopNavigator/MoreIcon";
import Dropdown from "../../components/form/Dropdown/Dropdown";
import axiosInstance from "../../services/axios/axios";
import { LibraryContext } from "../../services/ContextProviders/LibraryContextProvider";
import { StoryDataContext } from "../../services/ContextProviders/StoriesContextProvider";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import "./StoryReader.css";
import { toast } from "react-toastify";

interface IStoryInformation {
  title: string;
  author: string;
  genre: string;
  cover_location: string;
}

const StoryReader = () => {
  const [storyInformation, setStoryInformation] = useState<IStoryInformation>();
  const [documentData, setDocumentData] = useState<string>();
  const [option, setOption] = useState<number | null>(null);
  const [storyIsInLibrary, setStoryIsInLibrary] = useState<boolean>(false);
  const { stories } = useContext(StoryDataContext) as storiesContextType;
  const { JWTToken, isAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType;
  const { library, getLibrary } = useContext(
    LibraryContext
  ) as LibraryContextType;
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Checks if the story is in the library
   * @param id Story ID
   */
  const checkIfStoryIsInLibrary = (id: number): any => {
    console.log("checking if story is in library...");
    library.map((story) => {
      if (story.story_id == id) {
        setOption(story.status);
        setStoryIsInLibrary(true);
        return true;
      } else {
        setStoryIsInLibrary(false);
        return;
      }
    });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id: any = searchParams.get("story-id");
    /**
     * Gets the story that is being read
     */
    const getStory = async () => {
      stories.map((story) => {
        if (story.id == id) {
          setStoryInformation(story);
        }
      });
    };

    /**
     * Fetches text document that contains story
     */
    const fetchDocument = async () => {
      const response: any = await axiosInstance.get(`stories/document/${id}`);
      const data = await response.data;
      setDocumentData(data);
    };
    if (id) {
      getStory();
      fetchDocument();
    }
  }, [location.search, stories]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id: any = searchParams.get("story-id");
    if (library) {
      checkIfStoryIsInLibrary(id);
    }
  }, [library]);

  const handleBackNavigate = () => {
    navigate(-1);
  };

  /**
   * Removes reading status
   * @param id Current selected story
   */
  const handleOptionRemove = async (id: any) => {
    const searchParams = new URLSearchParams(location.search);
    id = searchParams.get("story-id");

    const userID = JWTToken?.id;

    const token = JSON.parse(localStorage.getItem("token") as string);
    console.log("From inside handle option change: ", token);
    if (isAuthenticated) {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const deleteData = {
          story_id: id,
        };

        const response = await axiosInstance.delete(`library/${userID}`, {
          headers: headers,
          data: deleteData,
        });

        if (response.data.message == "success") {
          toast.success("Removed story from library", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          getLibrary();
        }
        setStoryIsInLibrary(false);
      } catch (error) {
        toast.error("Something is wrong...");
      }
    }
  };

  /**
   * Handles what happens when the option changes
   * @param id Current selected story
   * @param status Status to what the story is changed to
   * @returns
   */
  const handleOptionChange = async (id: any, status: number) => {
    const searchParams = new URLSearchParams(location.search);
    id = searchParams.get("story-id");

    const userID = JWTToken?.id;

    const token = JSON.parse(localStorage.getItem("token") as string);
    console.log("From inside handle option change: ", token);
    if (isAuthenticated) {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const updatedData = {
          story_id: id,
          status: status,
        };

        const response = await axiosInstance.put(
          `library/${userID}`,
          updatedData,
          {
            headers: headers,
          }
        );

        if (response.data.message == "success") {
          console.log("success");
          getLibrary();
        }
      } catch (error) {
        return error;
      }
    }
  };

  /**
   * Adds story to user's library
   * @param status The status that is selected
   */
  const addStoryToLibrary = async (status: number) => {
    if (isAuthenticated) {
      const searchParams = new URLSearchParams(location.search);
      const storyID: any = searchParams.get("story-id");

      const { id }: any = JWTToken;
      console.log("user id: ", id, " story id: ", storyID);

      const token = JSON.parse(localStorage.getItem("token") as string);
      try {
        const data = {
          user_id: id,
          story_id: storyID,
          status: status,
        };

        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.post("library", data, {
          headers: headers,
        });
        if (response.data.message == "success") {
          console.log("success");
          getLibrary();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <nav className="storyreader-top-navbar">
        <button
          className="storyreader-top-navbar-button"
          onClick={handleBackNavigate}
        >
          <BackIcon colour="#ffffff" width="30px" height="30px" />
        </button>
        <Dropdown
          options={["Planned", "Reading", "Completed"]}
          selectedOption={option != null ? option : null}
          storyIsInLibrary={storyIsInLibrary}
          handleOptionChange={handleOptionChange}
          handleChooseOption={addStoryToLibrary}
          handleOptionRemove={handleOptionRemove}
        >
          <button className="storyreader-top-navbar-button">
            <MoreIcon colour="#ffffff" width="30px" height="30px" />
          </button>
        </Dropdown>
      </nav>
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
