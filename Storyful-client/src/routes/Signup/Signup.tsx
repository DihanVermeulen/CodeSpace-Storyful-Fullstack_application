import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../services/axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";
import "react-toastify/dist/ReactToastify.css";

export const Signup: React.FC = (): ReactElement => {
  const [signupCredentials, setSignupCredentials] = useState<any>({
    name: null,
    surname: null,
    email: null,
    password: null,
  });

  /**
   * Handles form submits and handles user creation
   * @param event 
   */
  const handelSubmit = async (event: any) => {
    event.preventDefault();
    const array = [
      signupCredentials.name.toLowerCase(),
      signupCredentials.surname.toLowerCase(),
    ];
    let username = array.join(".");
    const data = {
      username: username,
      email: signupCredentials.email,
      password: signupCredentials.password,
    };

    console.log(data);
    await axiosInstance
      .post("/users/register", data)
      .then((response) => console.log(response))
      .catch((error) =>
        toast.error("Error! Please check your information", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
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
          <input
            type="text"
            name="name"
            onChange={(event) =>
              setSignupCredentials((prevState: any) => ({
                ...prevState,
                name: event.target.value,
              }))
            }
            required
          />
        </div>
        <div className="signup-container-input-group">
          <label htmlFor="surname">surname</label>
          <input
            type="text"
            name="surname"
            onChange={(event) =>
              setSignupCredentials((prevState: any) => ({
                ...prevState,
                surname: event.target.value,
              }))
            }
            required
          />
        </div>

        <div className="signup-container-input-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            onChange={(event) =>
              setSignupCredentials((prevState: any) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
            required
          />
        </div>
        <div className="signup-container-input-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            onChange={(event) =>
              setSignupCredentials((prevState: any) => ({
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
