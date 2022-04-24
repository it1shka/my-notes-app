import styled from "styled-components"
import NewNote from "./NewNote"

const SidePanel = () => {
  

  return (
    <SidePanelContainer>

      <NewNote />
    </SidePanelContainer>
  )
}

const SidePanelContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 260px;

  background-color: white;
  border-right: 1px solid darkgreen;

  display: flex;
  flex-direction: column;
  
`

export default SidePanel