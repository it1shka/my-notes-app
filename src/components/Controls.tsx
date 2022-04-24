import styled from "styled-components"

const Controls = () => {
  return (
    <ControlsContainer>
      <FancyButton>+</FancyButton>
      <FancyButton>-</FancyButton>
    </ControlsContainer>
  )
}

const FancyButton = styled.button<{color?: string}>`
  font-size: 1em;
  width: 40px; height: 40px;;

  border: 2px solid ${({color}) => color ?? 'darkgreen'};
  border-radius: 100%;

  background-color: white;
  color: ${({color}) => color ?? 'darkgreen'};
  transition: 0.1s all 0s;
  &:hover {
    background-color: ${({color}) => color ?? 'darkgreen'};
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