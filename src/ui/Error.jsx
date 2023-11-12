import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default NotFound;
