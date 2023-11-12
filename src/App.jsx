import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Meaning, { loader } from "./ui/Meaning";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Hello there is error</p>,

    children: [
      { path: "/", element: <Home /> },
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
