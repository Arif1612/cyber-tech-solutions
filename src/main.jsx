import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>  ,
    errorElement: <ErrorPage></ErrorPage>  ,
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);