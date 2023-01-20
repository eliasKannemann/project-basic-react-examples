import { Error404 } from "../components/Error404";
import { Home } from "../components/Home";
import ShowHideWide from "../components/Practices/ShowHideWide";
import { ProgressBar } from "../components/ProgressBar";
import ShowHideMessage from "../components/ShowHideMessage";

export const routesPublic = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/showHideMessage",
    element: <ShowHideMessage />,
  },
  {
    path: "/showHideWide",
    element: <ShowHideWide />,
  },
  {
    path: "/progressBar",
    element: <ProgressBar />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];
