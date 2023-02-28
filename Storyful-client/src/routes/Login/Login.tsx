import { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextType } from "../../@types/auth";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import "./Login.css";

export const Login: React.FC = (): ReactElement => {
  const { authenticate } = useContext(AuthContext) as AuthContextType;

  const handelSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section className="login-container">
      <form
        onSubmit={handelSubmit}
        method="POST"
        className="login-container-form"
      >
        <h1>Login</h1>
        <div className="login-container-input-group">
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
        </div>
        <div className="login-container-input-group">
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
        </div>
        <button
          type="submit"
          style={{ marginTop: "10px" }}
          className="submit-button"
        >
          Login
        </button>
        <p style={{ marginTop: "10px", cursor: "pointer" }}>
          Don't have an account? Please <br />
          <b>
            <Link to="/signup"> sign up</Link>
          </b>
        </p>
      </form>
    </section>
  );
};
