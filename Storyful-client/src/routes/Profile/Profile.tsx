import Avatar from "boring-avatars";
import { useContext, useEffect, useState } from "react";
import { AuthContextType } from "../../@types/auth";
import { LibraryContextType } from "../../@types/stories";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import { LibraryContext } from "../../services/ContextProviders/LibraryContextProvider";
import "./Profile.css";

const Profile = () => {
  const [storiesCompleted, setStoriesCompleted] = useState<number>(0);
  const [storiesInLibrary, setStoriesInLibrary] = useState<number>(0);
  const [storiesReading, setStoriesReading] = useState<number>(0);
  const { JWTToken, user, isAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType;
  const { library } = useContext(LibraryContext) as LibraryContextType;

  /**
   * Sets the user stats
   */
  useEffect(() => {
    setStoriesInLibrary(library.length);
    let totalStoriesReading = 0;
    let totalStoriesRead = 0;
    library.map((story) => {
      switch (story.status) {
        case 1:
          totalStoriesReading++;
          break;
        case 2:
          totalStoriesRead++;
          break;
      }
    });
    setStoriesReading(totalStoriesReading);
    setStoriesCompleted(totalStoriesRead);
  });

  return (
    <section className="profile-container">
      <section className="profile-top-section">
        <div className="profile-image">
          {isAuthenticated && (
            <Avatar
              size={180}
              name={user?.avatar}
              variant="bauhaus"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          )}
        </div>
      </section>
      <section className="profile-container-user-information">
        <h3>{JWTToken ? JWTToken?.username : "Guest"}</h3>
      </section>
      <article className="profile-container-user-stats">
        <div className="profile-container-user-stats-item">
          <p className="profile-container-user-stats-item-number">
            {storiesCompleted}
          </p>
          <h3 className="profile-container-user-stats-item-title">completed</h3>
        </div>
        <div className="profile-container-user-stats-item">
          <p className="profile-container-user-stats-item-number">
            {storiesInLibrary}
          </p>
          <h3 className="profile-container-user-stats-item-title">
            in library
          </h3>
        </div>
        <div className="profile-container-user-stats-item">
          <p className="profile-container-user-stats-item-number">
            {storiesReading}
          </p>
          <h3 className="profile-container-user-stats-item-title">reading</h3>
        </div>
      </article>
    </section>
  );
};

export default Profile;
