import styled, { keyframes } from 'styled-components'

const animatedNav = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 50vw;
  }
`

const animatedNavBack = keyframes`
  0% {
    width: 50vw;
  }

  100% {
    width: 0;
  }
`

const animatedBtn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

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

  .responsive {
    display: none;
  }

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
      width: 60%;
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

  @media (max-width: 850px) {
    padding: 0;
    width: 100%;
    height: 10vh;

    img {
      width: 125px;
      margin-left: 16px;
    }

    nav {
      display: none;
    }

    .responsive {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        align-self: flex-end;
        margin-right: 24px;
        background: transparent;
        border: 0;
      }
    }

    .active {
      animation: ${animatedNav} 0.8s ease-in-out forwards;
    }

    .closed {
      animation: ${animatedNavBack} 0.6s ease-in-out forwards;
    }

    .active, .closed {
      background: #429586;
      position: fixed;
      right: 0;
      top: 0;
      height: 100%;

      button {
        margin-top: 16px;
        animation: ${animatedBtn} 0.8s forwards;
      }
  
      nav {
        display: block;
        
      
        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 48px;

          li {
            margin-top: 16px;
            width: 100%;
            border-bottom: 0.5px solid rgba(252,252,252,0.6);
            padding-left: 20px;
            padding-bottom: 4px;

            a {
              display: flex;
              align-items: baseline;
              font-weight: 200;
              font-size: 20px;

              svg {
                margin-bottom: 8px;
                margin-right: 16px;
              }
            }
          }
        }     
      }
}}
`