import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home";
import Library from "./routes/Library/Library";
import Profile from "./routes/Profile/Profile";
import AuthContextProvider from "./services/ContextProviders/AuthContextProvider";
import { Login } from "./routes/Login/Login";
import { Signup } from "./routes/Register/Signup";
import StoryReader from "./routes/StoryReader/StoryReader";
import StoriesContextProvider from "./services/ContextProviders/StoriesContextProvider";
import LibraryContextProvider from "./services/ContextProviders/LibraryContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "read-story",
    element: <StoryReader />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StoriesContextProvider>
        <LibraryContextProvider>
          <RouterProvider router={router} />
        </LibraryContextProvider>
      </StoriesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
