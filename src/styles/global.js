import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body, body * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Ubuntu', sans-serif;
  }
`

export const Container = styled.div`
  transform: translateY(20vh);
`