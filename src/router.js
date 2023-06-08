import { createBrowserRouter } from "react-router-dom";
import RzpCallBack from "./RzpCallBack";
import ErrorPage from "./Error";
import Success from "./Success";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/rzp/cb",
    element: <RzpCallBack />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export default router;
