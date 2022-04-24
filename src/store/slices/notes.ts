import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  title: string
  content: string
  createdAt: number
}

const notesSlice = createSlice({
  name: 'notes',
  initialState: Array<Note>(),
  reducers: {
    push(state, {payload: note}: PayloadAction<Note>) {
      state.push(note)
    },
    pop(state, {payload: whenCreated}: PayloadAction<number>) {
      return state.filter(({createdAt}) => {
        return createdAt !== whenCreated
      })
    },
    setContent(state, {payload}: PayloadAction<{id: number, content: string}>) {
      const idx = state.findIndex(({createdAt}) => {
        return createdAt === payload.id
      })
      state[idx].content = payload.content
    },
    setTitle(state, {payload}: PayloadAction<{id: number, title: string}>) {
      const idx = state.findIndex(({createdAt}) => {
        return createdAt === payload.id
      })
      state[idx].title = payload.title
    },
  }
})

export default notesSlice.reducer
export const {
  push: pushNote,
  pop: popNote,
  setContent: setNoteContent, 
  setTitle: setNoteTitle
} = notesSlice.actions