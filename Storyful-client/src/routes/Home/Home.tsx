import CategoryButton from "../../components/layout/CategoryButton/CategoryButton";
import Searchbar from "../../components/layout/Searchbar/Searchbar";
import "./Home.css";
import ComedyIcon from "./../../assets/Categories/ComedyIcon";
import { HorrorIcon } from "../../assets/Categories/HorrorIcon";
import RomanceIcon from "../../assets/Categories/RomanceIcon";
import ActionIcon from "../../assets/Categories/ActionIcon";

const Home = () => {
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
    </section>
  );
};

export default Home;
