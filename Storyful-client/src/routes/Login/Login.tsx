import { ReactElement, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContextType, IUserLogin } from "../../@types/auth";
import { AuthContext } from "../../services/ContextProviders/AuthContextProvider";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = (): ReactElement => {
  const { authenticate } = useContext(AuthContext) as AuthContextType;
  const [loginCredentials, setLoginCredentials] = useState<IUserLogin | null>({
    email: null,
    password: null,
  });
  const { isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  ) as AuthContextType;
  const navigate = useNavigate();

  const handelSubmit = async (event: any) => {
    event.preventDefault();
    const authenticated = await authenticate({
      email: loginCredentials?.email,
      password: loginCredentials?.password,
    })
      .then((response: any) => {
        console.log(
          "Response within AuthContextProvider: authenticate: ",
          response
        );
        console.log(
          "Token within AuthContextProvider: authenticate: ",
          response.data.jwt
        );
        localStorage.setItem("token", JSON.stringify(response.data.jwt));
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((error: any) => {
        console.log(
          "!!!Error within AuthContextProvider: authenticate: ",
          error
        );
        setIsAuthenticated(false);
      });
    // const handelSubmit = async (event: any) => {
    //   event.preventDefault();
    //   const authenticated = await authenticate({
    //     email: loginCredentials?.email,
    //     password: loginCredentials?.password,
    //   });
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
          <input
            type="email"
            name="email"
            onChange={(event) =>
              setLoginCredentials((prevState: any) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
            required
          />
        </div>
        <div className="login-container-input-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            onChange={(event) =>
              setLoginCredentials((prevState: any) => ({
                ...prevState,
                password: event.target.value,
              }))
            }
            required
          />
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
