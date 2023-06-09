import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AddAClass from "../pages/Dashboard/ManageUsers/AddAClass/AddAClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: (
          <PrivateRoutes>
            <Classes />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/addclass",
        element: <AddAClass />,
      },
    ],
  },
]);
export default router;
