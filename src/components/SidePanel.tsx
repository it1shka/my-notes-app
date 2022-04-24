import styled from "styled-components"

const SidePanel = () => {
  return (
    <SidePanelContainer>

    </SidePanelContainer>
  )
}

const SidePanelContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 260px;

  background-color: white;
  border-right: 1px solid darkgreen;
  
`

export default SidePanel