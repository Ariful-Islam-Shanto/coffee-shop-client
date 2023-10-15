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
        path: '/createData',
        element: <CreateData></CreateData>
      },
      {
        path: '/updateData/:id',
        element: <UpdateData></UpdateData>,
        loader: ({params}) => fetch(`http://localhost:4001/coffees/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:4001/coffees/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);