import { useEffect } from "react"
import styled from "styled-components"
import SidePanel from "./components/SidePanel"
import TextArea from "./components/TextArea"
import TopBar from "./components/TopBar"
import { persistState } from "./localstorage"

const App = () => {

  useEffect(() => {
    const saveHandler = (event: KeyboardEvent) => {
      const {ctrlKey, key, keyCode} = event
      if(!ctrlKey) return
      if(!(key === 's' || keyCode === 83)) return
      event.preventDefault()
      persistState()
    }

    window.addEventListener('keydown', saveHandler)
    return () => {
      window.removeEventListener('keydown', saveHandler)
    }
  }, [])

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