import getMeaning from "../services/apiDictionaryResult"

function SearchBar() {
   const data = getMeaning("go");
   console.log(data)

   return (
      <form>
         <input placeholder="Search" />
      </form>
   )
}

export default SearchBar
