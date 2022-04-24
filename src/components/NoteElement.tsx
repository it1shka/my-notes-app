import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { RootDispatch, RootState } from "../store"
import { Note, popNote } from "../store/slices/notes"
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

  const handleDelete = () => {
    if(isSelected) {
      dispatch(setPointer(null))
    }
    dispatch(popNote(createdAt))
  }

  return (
    <NoteContainer onClick={handleChoose} 
      selected={isSelected}>
      <Block style={{padding: '0.5em 1em'}}>
        <p>{title}</p>
        {/* <small>{formatStamp(createdAt)}</small> */}
      </Block>
      {isSelected && (
      <Block>
        <SmallButton color='#857c00'>
          Rename
        </SmallButton>
        <SmallButton 
          onClick={handleDelete}
          color='#8a2e00'>
          Delete
        </SmallButton>
      </Block>
      )}
    </NoteContainer>
  )
}

const SmallButton = styled.button<{color: string}>`
  flex: 1;
  border: none;
  padding: 0.2em;
  color: white;
  background-color: ${({color}) => color};
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const NoteContainer = styled.div<{selected: boolean}>`
  font-size: 1.5em;
  border-bottom: 1px solid ${({selected}) => selected ? 'white' : 'darkgreen'};
  background-color: white;
  color: darkgreen;
  cursor: pointer;

  transition: 0.1s all 0s;
  ${({selected}) => selected && css`
    background-color: darkgreen;
    color: white;
  `}
`

export default NoteElement