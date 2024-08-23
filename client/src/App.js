import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { getToken } from "./helpers";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/Signup/SignUp";
import "./app.scss";

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: getToken() ? <Home /> : <Navigate to='/signin' />,
      },
      {
        path: "/products/:id",
        element: getToken() ? <Products /> : <Navigate to='/signin' />,
      },
      {
        path: "/product/:id",
        element: getToken() ? <Product /> : <Navigate to='/signin' />,
      },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
console.log(getToken() ? "true" : "false");
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
