import styled, { keyframes } from 'styled-components'

const Slide = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const ProjectsContainer = styled.div`
  padding-left: 75px;
  animation: ${Slide} 0.8s forwards;

  h1 {
    color: #429586;
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #9C9999;

    a {
      color: #429586;
      font-weight: bold;
      font-style: italic;
    }
  }

  .projects {
    margin-top: 48px;

    .card {
      display: flex;
      margin-bottom: 64px;

      img {
        width: 240px;
      }

      .info {
        padding-left: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        div {

          h2 {
            color: #429586;
            font-size: 24px;
          }

          a {
            color: #7159ca;
            font-weight: 400;
            font-style: italic;
            font-size: 14px;

            :hover {
              color: rgba(113, 89, 202, 0.8)
            }
          }

          p {
            color: #9C9999;
            font-size: 16px;
            max-width: 660px;
          }
        }

        span {
          color: #9C9999;
          font-size: 18px;
          font-weight: bold;
          margin-top: 8px;
          
          span {
            font-weight: 400;
            font-size: 14px;
            font-style: italic;
          }
        }
      }
    }
  }

  @media (max-width: 850px) {
    padding: 0;
    margin-top: 4vh;

    h1 {
      font-size: 24px;
      margin-left: 16px;
    }

    p {
      font-size: 14px;
      margin-left: 16px;
    }

    .projects {
      margin-top: 38px;

      .card {
        margin-bottom: 32px;
        flex-direction: column;

        img {
          width: 175px;
          margin-left: 16px;
        }

        .info {
          padding-left: 16px;
          margin-top: 8px;

          div {
            h2 {
              font-size: 18px;
            }

            a {
              font-size: 12px;
            }

            p {
              font-size: 14px;
              max-width:  275px;
              margin: 8px 48px 32px 0;
            }
          }

          span {
            font-size: 16px;

            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`