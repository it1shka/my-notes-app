import { configureStore } from "@reduxjs/toolkit";
import scaleReducer from './slices/scale'
import notesReducer from './slices/notes'
import pointerReducer from './slices/pointer'
import { loadState } from "../localstorage";

const loaded = loadState() as any

const store = configureStore({
  reducer: {
    scale: scaleReducer,
    notes: notesReducer,
    pointer: pointerReducer
  },
  preloadedState: loaded
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch