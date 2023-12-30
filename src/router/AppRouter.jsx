import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

const routes = [
  {
    path: "/auth/*",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <CalendarPage />,
  },
];

export const AppRouter = () => {
  const authStatus = "authenticated";

  const router = createBrowserRouter([
    authStatus === "not-authenticated" ? routes[0] : routes[1],
    {
      path: "/*",
      element: <Navigate to={"/auth/login"} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
