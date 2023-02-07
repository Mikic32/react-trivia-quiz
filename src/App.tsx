import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/settings", element: <Settings /> },
  { path: "/game", element: <Game /> },
  { path: "*", element: <Navigate to="/home" replace={true} /> },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
