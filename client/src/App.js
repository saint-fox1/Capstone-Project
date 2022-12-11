import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import PlayPage from "./pages/PlayPage.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <HomePage />,
    },
    {
      path: "/play",
      element: <PlayPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
