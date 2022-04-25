import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"
import { RootDispatch, RootState } from "../store"
import { popNote, setNoteTitle } from "../store/slices/notes"
import { setPointer } from "../store/slices/pointer"
import { ChangeEvent, useState, MouseEvent, useEffect, FormEvent } from 'react'

const NoteElement = ({createdAt}: {createdAt: number}) => {
  const [renaming, setRenaming] = useState(false)
  const toggleRenaming = (event: MouseEvent) => {
    event.stopPropagation()
    setRenaming(!renaming)
  }

  const dispatch = useDispatch<RootDispatch>()
  const pointer = useSelector((state: RootState) => {
    return state.pointer.value
  })
  const isSelected = createdAt === pointer
  useEffect(() => {
    setRenaming(false)
  }, [isSelected])

  const handleChoose = () => {
    if(renaming) return
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

  const title = useSelector((state: RootState) => {
    const notes = state.notes
    const elem = notes.find(note => note.createdAt === createdAt)
    return elem?.title ?? 'Unknown note'
  })

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    dispatch(setNoteTitle({id: createdAt, title: value}))
  }

  const submitTitleChange = (event: FormEvent) => {
    event.preventDefault()
    setRenaming(false)
  }

  return (
    <NoteContainer onClick={handleChoose} 
      selected={isSelected}>
      <Block style={{padding: '0.5em 1em'}}>
        {renaming ? (
          <form onSubmit={submitTitleChange}>
            <StyledInput autoFocus
              value={title} 
              onChange={handleTitleChange}
            />
          </form>
        ) : (
          <p>{title}</p>
        )}
      </Block>
      {isSelected && (
      <Block>
        <SmallButton
          onClick={toggleRenaming} 
          color='#857c00'>
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

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
`

const SmallButton = styled.button<{color: string}>`
  flex: 1;
  border: none;
  padding: 0.2em;
  color: white;
  cursor: pointer;
  background-color: ${({color}) => color};
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const NoteContainer = styled.div<{selected: boolean}>`
  user-select: none;
  font-size: 1.5em;
  border-bottom: 1px solid ${({selected}) => selected ? 'white' : 'darkgreen'};
  background-color: white;
  color: darkgreen;
  cursor: ${({selected}) => selected ? 'default' : 'pointer'};

  transition: 0.1s all 0s;
  ${({selected}) => selected && css`
    background-color: darkgreen;
    color: white;
  `}
`

export default NoteElement