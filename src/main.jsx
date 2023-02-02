import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle=createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html,body{
  font-size: 62.5%;

  @media (max-width:768px) {
      font-size:50%;
  }

  @media (max-width:450px) {
      font-size:40%;
  }
}

body{
  font-size: 1.6rem;
}

`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>,
)
