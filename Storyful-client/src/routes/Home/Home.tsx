import CategoryButton from "../../components/form/CategoryButton/CategoryButton";
import Searchbar from "../../components/form/Searchbar/Searchbar";
import "./Home.css";
import ComedyIcon from "../../assets/Categories/ComedyIcon";
import HorrorIcon from "../../assets/Categories/HorrorIcon";
import RomanceIcon from "../../assets/Categories/RomanceIcon";
import ActionIcon from "../../assets/Categories/ActionIcon";
import { ReactElement, useContext, useState } from "react";
import { StoryDataContext } from "../../services/ContextProviders/StoriesContextProvider";
import { storiesContextType } from "../../@types/stories";
import { useNavigate } from "react-router-dom";
import AllIcon from "../../assets/Categories/AllIcon";

const Home: React.FC = (): ReactElement => {
  const { stories } = useContext(StoryDataContext) as storiesContextType;
  const [filteredItems, setFilteredItems] = useState<any>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const navigate = useNavigate();

  const handleFilter = (category: string) => {
    console.log("filtering ... ", category);
    setSelectedFilter(category);
    const filtered = category === "all"
      ? stories
      : stories.filter((story) => story.genre === category);
    console.log(filtered);
    setFilteredItems(filtered);
  };

  return (
    <section className="home-container">
      <Searchbar />
      <h2 className="home-category-heading">Categories</h2>
      <article className="home-container-category-container">
        <CategoryButton
          selected={selectedFilter == "all" ? true : false}
          onClick={() => {
            console.log(filteredItems);
            handleFilter("all");
          }}
          title="All"
          icon={
            <AllIcon colour={selectedFilter == "all" ? "#FFFFFF" : "#000000"} />
          }
        />
        <CategoryButton
          selected={selectedFilter == "action" ? true : false}
          onClick={() => handleFilter("action")}
          title="Action"
          icon={
            <ActionIcon
              colour={selectedFilter == "action" ? "#FFFFFF" : "#000000"}
            />
          }
        />
        <CategoryButton
          selected={selectedFilter == "comedy" ? true : false}
          onClick={() => handleFilter("comedy")}
          title="Comedy"
          icon={
            <ComedyIcon
              colour={selectedFilter == "comedy" ? "#FFFFFF" : "#000000"}
            />
          }
        />
        <CategoryButton
          selected={selectedFilter == "horror" ? true : false}
          onClick={() => {
            console.log("Filtered items: ", filteredItems);
            handleFilter("horror");
          }}
          title="Horror"
          icon={
            <HorrorIcon
              colour={selectedFilter == "horror" ? "#FFFFFF" : "#000000"}
            />
          }
        />
        <CategoryButton
          selected={selectedFilter == "romance" ? true : false}
          onClick={() => handleFilter("romance")}
          title="Romance"
          icon={
            <RomanceIcon
              colour={selectedFilter == "romance" ? "#FFFFFF" : "#000000"}
            />
          }
        />
      </article>
      <section
        style={{ marginTop: 40 }}
        className="home-container-stories-container"
      >
        {selectedFilter == "all" ? (
          stories ? (
            stories.map((story: any, key: any) => (
              <article
                className="home-container-stories-container-item"
                key={key}
                onClick={() =>
                  navigate({
                    pathname: "read-story",
                    search: `story-id=${story.id}`,
                  })
                }
              >
                <img src={story.cover_location} />
                <h3>{story.title}</h3>
                <p>{story.author}</p>
              </article>
            ))
          ) : (
            <p>loading...</p>
          )
        ) : (
          filteredItems &&
          filteredItems.map((story: any, key: any) => (
            <article
              className="home-container-stories-container-item"
              key={key}
              onClick={() =>
                navigate({
                  pathname: "read-story",
                  search: `story-id=${story.id}`,
                })
              }
            >
              <img src={story.cover_location} />
              <h3>{story.title}</h3>
              <p>{story.author}</p>
            </article>
          ))
        )}
      </section>
    </section>
  );
};

export default Home;
