import CategoryButton from "../../components/form/CategoryButton/CategoryButton";
import Searchbar from "../../components/form/Searchbar/Searchbar";
import "./Home.css";
import ComedyIcon from "../../assets/Categories/ComedyIcon";
import HorrorIcon from "../../assets/Categories/HorrorIcon";
import RomanceIcon from "../../assets/Categories/RomanceIcon";
import ActionIcon from "../../assets/Categories/ActionIcon";
import { ReactElement, useContext, useEffect, useState } from "react";
import { StoryDataContext } from "../../services/ContextProviders/StoriesContextProvider";
import { storiesContextType } from "../../@types/stories";

const Home: React.FC = (): ReactElement => {
  const { stories } = useContext(StoryDataContext) as storiesContextType;

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
      <section
        style={{ marginTop: 20 }}
        className="home-container-stories-container"
      >
        {stories ? (
          stories.map((story: any, key: any) => {
            return (
              <article
                className="home-container-stories-container-item"
                key={key}
              >
                <img src={story.cover_location} />
                <h3>{story.title}</h3>
                <p>{story.author}</p>
              </article>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </section>
    </section>
  );
};

export default Home;
