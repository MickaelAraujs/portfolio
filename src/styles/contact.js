import styled, { keyframes } from 'styled-components'

const Slide = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const ContactContainer = styled.div`
  height: 65vh;
  max-width: 680px;
  margin: 0 0 75px 75px;
  
  animation: ${Slide} 0.8s forwards;

  h2 {
    font-size: 36px;
    color: #429586;
  }

  p {
    font-size: 18px;
    color: #9C9999;
    margin-top: 8px;
    max-width: 776px;

    a {
      color: #429586;
      text-decoration: none;
      margin-left: 4px;

      :hover {
        text-decoration: underline;
      }
    }
  }

  .media {
    display: flex;
    flex-direction: column;
    margin: 45px 0;

    .item {
      margin-top: 8px;

      .name {
        font-size: 18px;
        color: #429586;
        font-weight: bold;

        svg {
          margin-right: 4px;
        }
      }

      .value {
        margin-left: 8px;
        font-style: italic;
        color: #9C9999;
      }
    }
  }


  @media (max-width: 850px) {
    margin: 4vh 0 0 0;

    h2 {
      font-size: 24px;
      margin-left: 16px;
    }

    p {
      font-size: 14px;
      margin-left: 16px;

      a {
        font-size: 14px;
      }
    }

    .media {
      margin: 24px 0 24px 16px;

      .item {
        .name {
          font-size: 14px;
        }
      }
    }
  } 
`