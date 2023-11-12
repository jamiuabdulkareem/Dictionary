import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/AppLayout";
import Meaning, { loader } from "./ui/Meaning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Hello there is error</p>,

    children: [
      {
        path: "/mean/:id",
        element: <Meaning />,
        loader: loader,
        errorElement: <p>Hi there is error</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
