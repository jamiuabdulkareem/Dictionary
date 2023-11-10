import { Outlet } from "react-router-dom"
import SearchBar from "./SearchBar"

function Home() {
   return (
      <div>
         <SearchBar />
         <Outlet />
      </div>
   )
}

export default Home
