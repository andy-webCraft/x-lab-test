import { createBrowserRouter } from "react-router-dom";
import { appPaths } from "types/utils";
import App from "../components/App/App";
import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const routes = createBrowserRouter([
  {
    path: appPaths.index,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: appPaths.searchAddress, element: <SearchPage /> },
      { path: "*", element: <HomePage /> },
    ],
  },
]);
