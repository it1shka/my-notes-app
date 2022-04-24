import { configureStore } from "@reduxjs/toolkit";
import scaleReducer from './slices/scale'

const store = configureStore({
  reducer: {
    scale: scaleReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch