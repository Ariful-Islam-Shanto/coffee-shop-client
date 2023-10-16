import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./Main Layout/Root/Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CreateData from "./Pages/CreateData/CreateData";
import UpdateData from "./Pages/UpdateData/UpdateData";
import Home from "./Pages/Home/Home";
import Details from "./Components/Details/Details";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Components/Auth Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Users from "./Pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-shop-server-av2394yjk-shantos-projects-4e456a1b.vercel.app/users')
      },
      {
        path: '/createData',
        element: <CreateData></CreateData>
      },
      {
        path: '/updateData/:id',
        element: <UpdateData></UpdateData>,
        loader: ({params}) => fetch(`https://coffee-shop-server-av2394yjk-shantos-projects-4e456a1b.vercel.app/coffees/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://coffee-shop-server-av2394yjk-shantos-projects-4e456a1b.vercel.app/coffees/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster/>
    </AuthProvider>
  </React.StrictMode>
);