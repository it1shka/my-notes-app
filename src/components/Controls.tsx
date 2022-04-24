import { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { RootDispatch } from "../store"
import { decreaseScale, increaseScale } from "../store/slices/scale"

const Controls = () => {
  const dispatch = useDispatch<RootDispatch>()

  const inc = () => {
    dispatch(increaseScale())
  }
  
  const dec = () => {
    dispatch(decreaseScale())
  }

  useEffect(() => {
    const globalScaleHandler = ({ctrlKey,key,preventDefault}: KeyboardEvent) => {
      if(!ctrlKey) return
      if(key === ',') {
        dec()
      } else if(key === '.') {
        inc()
      }
    }
    window.addEventListener('keydown', globalScaleHandler)
    return () => {
      window.removeEventListener('keydown', globalScaleHandler)
    }
  }, [])

  return (
    <ControlsContainer>
      <FancyButton onClick={dec}>-</FancyButton>
      <FancyButton onClick={inc}>+</FancyButton>
    </ControlsContainer>
  )
}

const FancyButton = styled.button`
  font-size: 1em;
  width: 40px; height: 40px;;

  border: 2px solid darkgreen;
  border-radius: 100%;

  background-color: white;
  color: darkgreen;
  transition: 0.1s all 0s;
  &:hover {
    background-color: darkgreen;
    color: white;
  }
`

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 10px; right: 10px;
  & > * + * {
    margin-left: 0.2em;
  }
`

export default Controls