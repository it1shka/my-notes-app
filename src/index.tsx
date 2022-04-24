import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: monospace;
    font-size: calc(0.5em + 0.5vw);
    @media screen and (min-width: 50em) {
      font-size: 1.1em;
    }
    color: #333333;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
