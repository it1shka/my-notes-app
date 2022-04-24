import styled from "styled-components"
import SidePanel from "./components/SidePanel"
import TextArea from "./components/TextArea"
import TopBar from "./components/TopBar"

const App = () => {
  return (
    <AppContainer>
      <TopBar />
      <SidePanel />
      <TextArea />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`

export default App