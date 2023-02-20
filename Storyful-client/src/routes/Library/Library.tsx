import Searchbar from "../../components/layout/Searchbar/Searchbar";
import "./Library.css";

const Library = () => {
  return (
    <section className="library-container">
      <h1 className="library-heading">Library</h1>
      <Searchbar />
    </section>
  );
};

export default Library;
