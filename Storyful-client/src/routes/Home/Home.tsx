import CategoryButton from "../../components/form/CategoryButton/CategoryButton";
import Searchbar from "../../components/form/Searchbar/Searchbar";
import "./Home.css";
import ComedyIcon from "../../assets/Categories/ComedyIcon";
import { HorrorIcon } from "../../assets/Categories/HorrorIcon";
import RomanceIcon from "../../assets/Categories/RomanceIcon";
import ActionIcon from "../../assets/Categories/ActionIcon";
import axios from "axios";
import bookshelf from "../../assets/profile/bookshelf.png";
import { useOutletContext } from "react-router-dom";
import { ReactElement, useEffect, useState } from "react";
import { fetchAllStoriesFromDatabaseTest } from "../../utils/helpers";

interface Props {}

const Home: React.FC<Props> = (): ReactElement<any> => {
  const [stories, setStories] = useState<any>(null);

  useEffect(() => {
    const fetchStories = async () => {
      const jsonData = await fetchAllStoriesFromDatabaseTest();
      console.log("json data: ", jsonData);
      setStories(jsonData);
    };
    fetchStories();
    // fetchAllStoriesFromDatabase()
    //   .then((response: any) => {
    //     console.log(response);
    //     setStories(response.data);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <section className="home-container">
      <Searchbar />
      <h2 className="home-category-heading">Categories</h2>
      <article className="home-container-category-container">
        <CategoryButton title="Action" icon={<ActionIcon colour="#000000" />} />
        <CategoryButton title="Comedy" icon={<ComedyIcon colour="#000000" />} />
        <CategoryButton title="Horror" icon={<HorrorIcon colour="#000000" />} />
        <CategoryButton
          title="Romance"
          icon={<RomanceIcon colour="#000000" />}
        />
      </article>
      <section className="home-container-stories-container">
        {stories &&
          stories.map((story: any) => {
            return <div>{story.title}</div>;
          })}
      </section>
    </section>
  );
};

export default Home;
