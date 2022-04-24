import { useEffect, useRef } from "react"
import styled from "styled-components"
import { Note } from "../store/slices/notes"

const formatStamp = (n: number) => {
  return new Date(n).toLocaleDateString('en-US')
}

const NoteElement = ({title, createdAt}: Note) => {
  return (
    <NoteContainer>
      <p>{title}</p>
      <small>{formatStamp(createdAt)}</small>
    </NoteContainer>
  )
}

const NoteContainer = styled.div<{color?: string}>`
  font-size: 1.5em;
  padding: 0.5em 1em;
  border-bottom: 1px solid ${({color}) => color ?? 'darkgreen'};
  background-color: white;
  color: ${({color}) => color ?? 'darkgreen'};
  cursor: pointer;
  
  transition: 0.1s all 0s;
  &:hover {
    background-color: ${({color}) => color ?? 'darkgreen'};
    color: white;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default NoteElement