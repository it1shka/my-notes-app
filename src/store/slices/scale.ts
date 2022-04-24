import { createSlice } from "@reduxjs/toolkit";

const MIN_VALUE = 0.8

const scaleSlice = createSlice({
  name: 'scale',
  initialState: { value: 1.5 },
  reducers: {
    increase(state) {
      state.value += 0.1
    },
    decrease(state) {
      state.value -= 0.1
      if(state.value < MIN_VALUE) 
        state.value = MIN_VALUE
    }
  }
})

export default scaleSlice.reducer
export const {
  decrease: decreaseScale, 
  increase: increaseScale
} = scaleSlice.actions