import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Community from "./Pages/Community.jsx";
import About from "./Pages/About.jsx";
import Categories from "./Pages/Categories.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/community",
        element: <Community />,
      },

      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
