import { useDispatch, useSelector } from "react-redux";

import { searchWord } from "./searchSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.word.word);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/mean/${word}`);
  }

  return (
    <form onSubmit={handleSubmit} className="grid items-center justify-center">
      <label className="relative flex items-center">
        <input
          placeholder="Search for a word"
          onChange={(e) => dispatch(searchWord(e.target.value))}
          className="rounded-full bg-sky-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-slate-500 hover:w-80 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 md:w-80 md:text-lg md:hover:w-96"
        />
        <button className="absolute right-[4px] rounded-full bg-sky-700 px-4 py-2 text-sm text-slate-100 focus:outline-none md:text-base">
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchBar;
