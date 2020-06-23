import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  padding-left: 75px;

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

          span {
            font-weight: 400;
            font-size: 14px;
            font-style: italic;
          }
        }
      }
    }
  }
`