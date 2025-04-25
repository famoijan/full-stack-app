import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
    loader: () =>
      fetch("http://localhost:3500/products").then((res) => res.json()),
  },
]);

export default router;
