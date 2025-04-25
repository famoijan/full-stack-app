import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import SingleCoffee from "../pages/SingleCoffee";
import EditCoffee from "../pages/EditCoffee";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "/single-coffee",
    element: <SingleCoffee />,
  },
  {
    path: "/edit-coffee",
    element: <EditCoffee />,
  },
]);

export default router;
