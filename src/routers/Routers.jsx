import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductDetails from "../components/ProductDetails";
// import EditProduct from "../pages/EditProduct";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children:[
      {
        path:"/",
        element: <Dashboard/>,
      },
      {
        path: "/courses/:id",
        element: <ProductDetails/>,
        loader:({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
     },
    //   {
    //     path: "/products/:id",
    //     element: <EditProduct/>,
    //     loader:({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
    //  },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/sign-up",
        element: <SignUp/>,
      },
      {
        path:"/add-product",
        element: <AddProduct/>,
      },
  ]
  },
  ]);