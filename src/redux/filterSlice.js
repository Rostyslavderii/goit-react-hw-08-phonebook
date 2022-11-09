import { createSlice } from "@reduxjs/toolkit";
// import { setFilter } from './setFilter';
// console.log(setFilter);


const filterSlice = createSlice({
  name: 'filter',
  initialState: {filter:''},
  reducers: {
    setFilter(state, action ) {
      state.filter = action.payload;
    },


  // [setFilter]: (state, action) => {state.filter = action.payload;

  },
})

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;

