import { useEffect, useRef } from "react"
import styled from "styled-components"
import { Note } from "../store/slices/notes"

const NoteElement = ({title, createdAt}: Note) => {
  return (
    <NoteContainer>
      <p>{title}</p>
      <small>{createdAt}</small>
    </NoteContainer>
  )
}

const NoteContainer = styled.div<{color?: string}>`
  
  padding: 0.5em 1em;
  border-bottom: 1px solid ${({color}) => color ?? 'darkgreen'};
  background-color: white;
  color: ${({color}) => color ?? 'darkgreen'};

  transition: 0.1s all 0s;
  &:hover {
    font-style: italic;
    cursor: pointer;
    background-color: ${({color}) => color ?? 'darkgreen'};
    color: white;
  }
`

export default NoteElement