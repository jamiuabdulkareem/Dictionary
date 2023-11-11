import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   word: "",
   
}

const searchSlice = createSlice({
   name: "search",
   initialState,
   reducers: {
      searchWord(state, action) {
         state.word = action.payload
      },
      
   }
})

export const {searchWord, getDefination} = searchSlice.actions;
export default searchSlice.reducer;