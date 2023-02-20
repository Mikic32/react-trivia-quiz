import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "react-query";
import About from "./pages/About";
const router = createBrowserRouter([
  //TODO Use hash router!
  { path: "/home", element: <Home /> },
  { path: "/settings", element: <Settings /> },
  { path: "/game", element: <Game /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <Navigate to="/home" replace={false} /> },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
