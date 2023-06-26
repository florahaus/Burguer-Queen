import Login from "./pages/Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/pedidos",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
