import { useContext, useState } from "react";
import { AuthContextType } from "../../@types/auth";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import "./Profile.css";

const Profile = () => {
  const [userName, setUserName] = useState<string>("Guest");
  const [storiesRead, setStoriesRead] = useState<number>(0);
  const [storiesInLibrary, setStoriesInLibrary] = useState<number>(0);
  const [storiesReading, setStoriesReading] = useState<number>(0);
  const { JWTToken } = useContext(AuthContext) as AuthContextType;

  return (
    <section className="profile-container">
      <section className="profile-top-section">
        <div className="profile-image"></div>
      </section>
      <section className="profile-container-user-information">
        <h3>{JWTToken ? JWTToken?.username : "Guest"}</h3>
      </section>
      <article className="profile-container-user-stats">
        <div className="profile-container-user-stats-item">
          <p className="profile-container-user-stats-item-number">
            {storiesRead}
          </p>
          <h3 className="profile-container-user-stats-item-title">read</h3>
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
