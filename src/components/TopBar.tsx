import styled from "styled-components"

const TopBar = () => {

  return (
    <TopBarContainer>
      <h1>My Notes</h1>
      <Buttons>
        <FancyButton>
          Save
        </FancyButton>
        <FancyButton
          onClick={() => window.close()} 
          color="darkred">
          Quit
        </FancyButton>
      </Buttons>
    </TopBarContainer>
  )
}

const Buttons = styled.div`
  margin-left: auto;
  & > * + * {
    margin-left: 0.4em;
  }
`

const FancyButton = styled.button<{color?: string}>`
  padding: 0.25em 1em;
  font-size: inherit;

  border: 2px solid ${({color}) => color ?? 'darkgreen'};
  border-radius: 15px;

  background-color: white;
  color: ${({color}) => color ?? 'darkgreen'};
  transition: 0.1s all 0s;
  &:hover {
    background-color: ${({color}) => color ?? 'darkgreen'};
    color: white;
  }
`

const TopBarContainer = styled.div`
  position: relative;
  z-index: 10;
  box-shadow: lightgreen 0px 0px 2px;

  grid-column: 1 / 3;
  grid-row: 1 / 2;

  padding: 1em 2em;
  font-size: 1.1em;
  color: darkgreen;

  border-bottom: 1px solid darkgreen;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export default TopBar