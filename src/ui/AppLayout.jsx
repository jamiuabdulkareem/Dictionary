import { Outlet, useNavigation } from "react-router-dom";
import SearchBar from "./SearchBar";

function Home() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen px-10 pt-6  text-slate-700">
      {isLoading && <p>loading</p>}
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default Home;
