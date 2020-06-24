import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body, body * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Ubuntu', sans-serif;
  }

  html, body {
    background: #FCFCFC;
    width: 100%;
  }
`

export const Container = styled.div`
  padding-top: 20vh;
  padding-bottom: 16px;

  @media (max-width: 850px) {
    padding-top: 14vh;
    padding-bottom: 12px;
  }
`