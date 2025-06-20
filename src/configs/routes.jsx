import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/root";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: "login",
      },
      {
        path: "/",
        element: "registration",
      },
    ],
  },
]);

export default route;
