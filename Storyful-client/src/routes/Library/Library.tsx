import Searchbar from "../../components/layout/Searchbar/Searchbar";
import "./Library.css";

const Library = () => {
  return (
    <section className="library-container">
      <h1 className="library-heading">Library</h1>
      <Searchbar />
      <div style={{marginTop: 10, marginBottom: 20}} className="separator"/>
    </section>
  );
};

export default Library;
