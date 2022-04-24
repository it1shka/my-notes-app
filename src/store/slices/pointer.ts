import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Pointer = number | null
const pointerSlice = createSlice({
  name: 'pointer',
  initialState: {value: null as Pointer},
  reducers: {
    setpointer(state, {payload: pointer}: PayloadAction<Pointer>) {
      state.value = pointer
    }
  }
})

export default pointerSlice.reducer
export const {
  setpointer: setPointer
} = pointerSlice.actions