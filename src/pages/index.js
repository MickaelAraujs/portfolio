import React from 'react'
import {
  FaHtml5, FaCss3, FaJsSquare,
  FaNodeJs, FaGithub, FaReact
} from 'react-icons/fa'

import { Container } from '../styles/global'
import { AboutContainer, Profile, Description } from '../styles/about'

import Layout from '../components/Layout'

import profile from '../assets/me.jpeg'

export default function Home() {
  return (
    <Layout>
      <Container>
        <AboutContainer>
          <Profile>
            <img src={profile} alt='Mickael Araujo' />

            <div className="techs">
              <FaHtml5 />

              <FaCss3 />

              <FaJsSquare />

              <FaGithub />

              <FaNodeJs />

              <FaReact />
            </div>
          </Profile>

          <Description>
            <h1>
              Mickael Araujo, <span>Full-stack Developer</span>
            </h1>

            <p>
              Estudante de <span>Análise e Desenvolvimento de Sistemas</span>,
              apaixonado por tecnologias e disposto a sempre aprender coisas novas;
              principalmente tecnologias relacionadas ao Javascript.
              Aspirante a programador desde abril/2019. Desde então, busco evoluir mais a cada dia.  
            </p>

            <h2>know-how:</h2>

            <ul>
              <li>Desenvolvimento de APIs REST com NodeJS e Express</li>
              <li>Desenvolvimento de Single Page Applications com ReactJS</li>
              <li>Desenvolvimento de Aplicações mobile cross-platform com React Native</li>
              <li>HTML5 e CSS3</li>
              <li>Typescript</li>
              <li>Responsividade de páginas web</li>
              <li>Estilizando aplicações React com styled components</li>
              <li>Git</li>
            </ul>
          </Description>
        </AboutContainer>
      </Container>
    </Layout>
  )
}