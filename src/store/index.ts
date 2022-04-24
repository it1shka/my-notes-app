import { configureStore } from "@reduxjs/toolkit";
import scaleReducer from './slices/scale'
import notesReducer from './slices/notes'
import pointerReducer from './slices/pointer'

const store = configureStore({
  reducer: {
    scale: scaleReducer,
    notes: notesReducer,
    pointer: pointerReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch