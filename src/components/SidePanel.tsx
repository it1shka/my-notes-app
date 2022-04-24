import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../store"
import NewNote from "./NewNote"
import NoteElement from "./NoteElement"

const SidePanel = () => {
  const notes = useSelector((state: RootState) => {
    return state.notes
  })

  return (
    <SidePanelContainer>
      {notes.map((note, idx) => {
        return <NoteElement key={idx} {...note}/>
      })}
      <NewNote />
    </SidePanelContainer>
  )
}

const SidePanelContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 120px;
  @media screen and (min-width: 35em) {
    width: 200px;
  }
  @media screen and (min-width: 50em) {
    width: 260px;
  }

  background-color: white;
  border-right: 1px solid darkgreen;

  display: flex;
  flex-direction: column;
  
`

export default SidePanel