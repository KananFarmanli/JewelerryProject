import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
