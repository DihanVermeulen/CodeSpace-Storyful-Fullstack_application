import { useContext } from "react";
import { AuthContextType } from "../../@types/auth";
import Searchbar from "../../components/form/Searchbar/Searchbar";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import "./Library.css";

const Library = () => {
  const { authenticate, isAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType;

  return (
    <div>
      {isAuthenticated && (
        <section className="library-container">
          <h1 className="library-heading">Library</h1>
          <Searchbar />
        </section>
      )}
      {!isAuthenticated && (
        <section className="library-not-authenticated">
          <p>Please login to see your library</p>
        </section>
      )}
    </div>
  );
};

export default Library;
