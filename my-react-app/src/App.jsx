import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./page/home.jsx";
import Login from "./page/login.jsx";
import ProductDetail from "./page/product-detail.jsx";
import Signup from "./page/signup.jsx";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/product-detail", element: <ProductDetail /> },
  { path: "/signup", element: <Signup /> },
]
);

export default function App() {
  return <RouterProvider router={router} />;
}