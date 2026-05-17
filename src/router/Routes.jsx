import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Education from "../Components/Education";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'education',
        element: <Education />
      }
    ]
  }
]);

export default router;