import { useSelector } from "react-redux"

function Meaning() {
   const {meaning} = useSelector(state=> state.word)
   console.log(meaning.meanings[0])

   return (
      <div>
         hi
      </div>
   )
}

export default Meaning
