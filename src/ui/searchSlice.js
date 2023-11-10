import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   word: "",
   meaning: {},
}

const searchSlice = createSlice({
   name: "search",
   initialState,
   reducers: {
      searchWord(state, action) {
         state.word = action.payload
      },
      getDefination(state, action) {
         state.meaning = action.payload
      }
   }
})

export const {searchWord, getDefination} = searchSlice.actions;
export default searchSlice.reducer;