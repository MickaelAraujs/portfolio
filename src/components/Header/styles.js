import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 15vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 75px;
  background: #429586;
  border-bottom: 0.5px solid rgba(66,149,134, 0.2);
  z-index: 9;

  img {
    width: 195px;
    margin-top: 8px;
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    ul {
      list-style: none;
      width: 75%;
      display: flex;
      justify-content: space-evenly;

      li {
        :hover {
          opacity: 0.4;
        }
        
        a {
          text-decoration: none;
          font-size: 16px;
          color: #FCFCFC;
          font-weight: bold;
          
          display: flex;
          align-items: center;

          svg {
            margin-right: 8px;
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
`