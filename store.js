import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./src/ui/searchSlice"

const store = configureStore({
   reducer: {
      word: searchReducer,
   }
})

export default store;