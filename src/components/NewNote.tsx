import { useDispatch } from "react-redux"
import styled from "styled-components"
import { RootDispatch } from "../store"
import { Note, pushNote } from "../store/slices/notes"
import { setPointer } from "../store/slices/pointer"

const NewNote = () => {
  const dispatch = useDispatch<RootDispatch>()
  
  const newNote = () => {
    const newNote: Note = {
      title: 'New note',
      content: '',
      createdAt: Date.now()
    }

    dispatch(pushNote(newNote))
    dispatch(setPointer(newNote.createdAt))
  }

  return (
    <StyledButton
      onClick={newNote}
    >Add new!</StyledButton>
  )
}

const StyledButton = styled.button`
  font-size: 1.2em;
  padding: 0.2em;
  border: none;
  border-bottom: 1px solid darkgreen;
  background-color: white;
  color: darkgreen;

  transition: 0.1s all 0s;
  &:hover {
    background-color: darkgreen;
    color: white;
  }
`

export default NewNote