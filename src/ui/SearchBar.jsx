import { useDispatch, useSelector } from "react-redux";
import getMeaning from "../services/apiDictionaryResult"
import { getDefination, searchWord } from "./searchSlice";


function SearchBar() {
   const dispatch = useDispatch(); 
   const word = useSelector(state=> state.word.word);

   async function handleSubmit(e) {
      e.preventDefault();
      
      const data = await getMeaning(word)
      dispatch(getDefination(data));
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
         <input placeholder="Search" onChange={e => dispatch(searchWord(e.target.value))} />
         <button>Search</button>
         </label>
      </form>
   )
}

export default SearchBar
