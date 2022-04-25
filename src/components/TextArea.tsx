import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootDispatch, RootState } from "../store"
import Controls from "./Controls"
import type { ChangeEvent } from 'react'
import { setNoteContent } from "../store/slices/notes"

const TextArea = () => {
  const scale = useSelector((state: RootState) => {
    return state.scale.value
  })

  const current = useSelector((state: RootState) => {
    return state.pointer.value
  })

  const content = useSelector((state: RootState) => {
    const notes = state.notes
    const theNote = notes.find(({createdAt}) => createdAt === current)
    return theNote?.content ?? 'Nothing chosen.'
  })

  const dispatch = useDispatch<RootDispatch>()
  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if(!current) return
    const value = event.target.value
    dispatch(setNoteContent({id: current, content: value}))
  }

  return (
    <StyledTextAreaContainer>
      <StyledTextarea
        scale={scale}
        placeholder="Type your note here..."
        disabled={!current}
        value={content}
        onChange={handleContentChange}
      ></StyledTextarea>
      <Controls />
    </StyledTextAreaContainer>
  )
}

const StyledTextAreaContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 2;
  position: relative;
`

const StyledTextarea = styled.textarea<{scale: number}>`
  width: 100%;
  height: 100%;

  background-color: #f1f1f1;
  padding: 1em 2em;

  border: none;
  resize: none;
  outline: none;

  font-size: ${({scale}) => scale}em;
  color: #004900;
  scrollbar-width: none;
`

export default TextArea