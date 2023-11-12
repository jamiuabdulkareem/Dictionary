import { Outlet, useNavigation } from "react-router-dom";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import getMeaning from "../services/apiDictionaryResult";

function Home() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  getMeaning();

  console.log(navigation);

  return (
    <div className="h-screen px-10 pt-6  text-slate-700">
      {isLoading && <Loader />}
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default Home;
