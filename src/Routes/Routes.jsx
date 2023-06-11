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
import AddAClass from "../pages/Dashboard/AddAClass/AddAClass";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import FeedBackClasses from "../pages/Dashboard/ManageClasses/FeedBackClasses";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrollClasses from "../pages/Dashboard/EnrollClasses/EnrollClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";

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
        element: <Classes />,
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
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/student-home",
        element: <StudentHome />,
      },
      {
        path: "/dashboard/bookedclass",
        element: <MySelectedClass />,
      },
      {
        path: "dashboard/enrollclass",
        element: <EnrollClasses />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "dashboard/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/admin-home",
        element: (
          <AdminRoute>
            <AdminHome />,
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "dashboard/manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/feedback/:id",
        element: (
          <AdminRoute>
            <FeedBackClasses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/instructor-home",
        element: (
          <InstructorRoute>
            <InstructorHome />
          </InstructorRoute>
        ),
      },
      {
        path: "dashboard/addclass",
        element: (
          <InstructorRoute>
            <AddAClass />
          </InstructorRoute>
        ),
      },
      {
        path: "dashboard/myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);
export default router;
