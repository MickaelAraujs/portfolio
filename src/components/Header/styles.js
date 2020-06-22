import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 20vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 75px;

  border-bottom: 0.5px solid #429586;

  img {
    width: 215px;
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
        a {
          text-decoration: none;
          font-size: 16px;
          color: #429586;
          font-weight: bold;
          
          display: flex;
          align-items: baseline;

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