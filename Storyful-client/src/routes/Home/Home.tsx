import CategoryButton from "../../components/layout/CategoryButton/CategoryButton";
import Searchbar from "../../components/layout/Searchbar/Searchbar";
import "./Home.css";
import ComedyIcon from "../../assets/Categories/ComedyIcon";
import { HorrorIcon } from "../../assets/Categories/HorrorIcon";
import RomanceIcon from "../../assets/Categories/RomanceIcon";
import ActionIcon from "../../assets/Categories/ActionIcon";
import axios from "axios";
import bookshelf from "../../assets/profile/bookshelf.png";

const Home = () => {
  const postImage = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source:
          "https://www.shutterstock.com/image-vector/blue-watercolor-paint-stroke-background-600w-1725048721.jpg",
      }),
    };

    const response = await fetch(
      `https://freeimage.host/api/1/upload`,
      options
    );

    console.log(response);
  };
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
      <button
        onClick={() => {
          postImage();
        }}
      >
        Post image
      </button>
    </section>
  );
};

export default Home;
