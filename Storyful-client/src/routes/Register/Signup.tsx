import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export const Signup: React.FC = (): ReactElement => {
  const handelSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section className="signup-container">
      <form
        onSubmit={handelSubmit}
        method="POST"
        className="signup-container-form"
      >
        <h1>signup</h1>
        <div className="signup-container-input-group">
          <label htmlFor="name">name</label>
          <input type="text" name="name" />
        </div>
        <div className="signup-container-input-group">
          <label htmlFor="surname">surname</label>
          <input type="text" name="surname" />
        </div>

        <div className="signup-container-input-group">
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
        </div>
        <div className="signup-container-input-group">
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
        </div>
        <button
          type="submit"
          style={{ marginTop: "10px" }}
          className="submit-button"
        >
          signup
        </button>
        <p style={{ marginTop: "10px", cursor: "pointer" }}>
          Already have an account? Please <br />
          <b>
            <Link to="/login"> log in</Link>
          </b>
        </p>
      </form>
    </section>
  );
};
