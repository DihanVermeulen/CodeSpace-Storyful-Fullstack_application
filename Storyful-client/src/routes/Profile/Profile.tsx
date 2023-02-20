import { useState } from "react";
import BookShelfImage from "./../../assets/profile/bookshelf.png";
import "./Profile.css";

const Profile = () => {
  const [userName, setUserName] = useState<string>("Guest");
  const [storiesRead, setStoriesRead] = useState<number>(0);

  return (
    <section className="profile-container">
      <section className="profile-top-section">
        <div className="profile-image"></div>
      </section>
      <section className="profile-container-user-information">
        <h3>{userName}</h3>
      </section>
      <article className="profile-container-user-stats">
        <div className="profile-container-user-stats-item">
          <p>{storiesRead}</p>
        </div>
      </article>
    </section>
  );
};

export default Profile;
