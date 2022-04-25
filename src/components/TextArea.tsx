import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../store"
import Controls from "./Controls"

const TextArea = () => {
  const scale = useSelector((state: RootState) => {
    return state.scale.value
  })

  

  return (
    <StyledTextAreaContainer>
      <StyledTextarea
        scale={scale}
        placeholder="Type your note here..."
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