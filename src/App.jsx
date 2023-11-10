import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/AppLayout";
import Meaning from "./ui/Meaning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Hello there is error</p>,

    children: [
      {
        path: "/:mean?",
        element: <Meaning />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
