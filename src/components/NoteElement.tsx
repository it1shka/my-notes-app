import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { RootDispatch, RootState } from "../store"
import { Note } from "../store/slices/notes"
import { setPointer } from "../store/slices/pointer"

const formatStamp = (n: number) => {
  return new Date(n).toLocaleDateString('en-US')
}

const NoteElement = ({title, createdAt}: Note) => {
  const dispatch = useDispatch<RootDispatch>()

  const pointer = useSelector((state: RootState) => {
    return state.pointer.value
  })
  const isSelected = createdAt === pointer

  const handleChoose = () => {
    if(isSelected) {
      dispatch(setPointer(null))
    } else {
      dispatch(setPointer(createdAt))
    }
  }

  return (
    <NoteContainer onClick={handleChoose} 
      selected={isSelected}>
      <p>{title}</p>
      <small>{formatStamp(createdAt)}</small>
    </NoteContainer>
  )
}

const NoteContainer = styled.div<{selected: boolean}>`
  font-size: 1.5em;
  padding: 0.5em 1em;
  border-bottom: 1px solid darkgreen;
  background-color: white;
  color: darkgreen;
  cursor: pointer;

  transition: 0.1s all 0s;
  ${({selected}) => selected && css`
    background-color: darkgreen;
    color: white;
  `}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default NoteElement