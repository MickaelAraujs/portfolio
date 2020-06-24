import styled, { keyframes } from 'styled-components'

const Slide = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  animation: ${Slide} 0.8s forwards;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Profile = styled.div`
  width: 50vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 195px;
    border-radius: 50%;
    margin-top: 16px;
  }

  .techs {
    margin-top: 48px;
    width: 250px;
    display: grid;
    grid-template-columns: 48px 48px 48px;
    justify-content: center;
    align-items: center;

    svg {
      width: 26px;
      height: 26px;
      color: #429586;
      margin: 8px;
    }
  }

  @media (max-width: 900px) {
    max-height: 30vh;

    img {
      width: 135px;
    }

    .techs {
      display: none;
    }
  }
`

export const Description = styled.div`
  padding-top: 16px;
  padding-right: 54px;

  h1 {
    color: #429586;
    font-size: 48px;
    margin-left: 8px;

    span {
      font-size: 24px;
      font-weight: 400;
      font-style: italic;
    }
  }

  p {
    margin-top: 8px;
    margin-left: 8px;
    font-size: 18px;
    color: #9C9999;

    span {
      color: #429586;
      font-weight: bold;
    }
  }

  h2 {
    font-size: 24px;
    color: #429586;
    margin-top: 24px;
    margin-left: 8px;
  }

  ul {
    list-style: circle;
    list-style-position: inside;
    margin-left: 8px;
    margin-top: 8px;

    li {
      font-size: 14px;
      color: #9C9999;
      margin-top: 8px;
    }
  }

  @media (max-width: 900px) {
    padding: 0;
    margin-top: -36px;

    h1 {
      font-size: 24px;
      margin-left: 0;
      text-align: center;

      span {
        font-size: 16px;
        color: #9C9999;
        display: block;
        text-align: right;
        margin-right: 32px;
      }
    }

    p {
      margin-left: 32px;
      font-size: 14px;
    }

    h2 {
      font-size: 18px;
      margin-top: 16px;
      margin-left: 32px;
    }

    ul {
      margin-left: 32px;

      li {
        font-size: 12px;
      }
    }
  }
`