import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;

  div {
    min-width: 370px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`