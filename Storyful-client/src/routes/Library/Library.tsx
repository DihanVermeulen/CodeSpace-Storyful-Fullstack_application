import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType } from "../../@types/auth";
import { LibraryContextType } from "../../@types/stories";
import Searchbar from "../../components/form/Searchbar/Searchbar";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import { LibraryContext } from "../../services/ContextProviders/LibraryContextProvider";
import "./Library.css";

const Library = () => {
  const { authenticate, isAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType;
  const { library } = useContext(LibraryContext) as LibraryContextType;
  const navigate = useNavigate();

  return (
    <div>
      {isAuthenticated ? (
        <section className="library-container">
          <h1 className="library-heading">Library</h1>
          <Searchbar />
          <section
            style={{ marginTop: "40px" }}
            className="library-container-stories-container"
          >
            {library ? (
              library.map((story: any, key: any) => (
                <article
                  className="home-container-stories-container-item"
                  key={key}
                  onClick={() =>
                    navigate({
                      pathname: "/read-story",
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
            )}
          </section>
        </section>
      ) : (
        <section className="library-not-authenticated">
          <p>Please login to see your library</p>
        </section>
      )}
    </div>
  );
};

export default Library;
