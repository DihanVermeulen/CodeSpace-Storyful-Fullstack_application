import CategoryButton from "../../components/layout/CategoryButton/CategoryButton";
import Searchbar from "../../components/layout/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <Searchbar />
      <h2 className="home-category-heading">Categories</h2>
      <article className="home-container-category-container">
        <CategoryButton title="Action" />
        <CategoryButton title="Comedy" />
        <CategoryButton title="Horror" />
        <CategoryButton title="Romance" />
      </article>
    </section>
  );
};

export default Home;
