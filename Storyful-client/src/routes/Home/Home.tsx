import Searchbar from "../../components/layout/Searchbar/Searchbar";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <Searchbar />
      <h2 className="home-category-heading">Categories</h2>
    </section>
  );
};

export default Home;
