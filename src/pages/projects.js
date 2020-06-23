import React from 'react'

import { Container } from '../styles/global'
import { ProjectsContainer } from '../styles/projects'

import Layout from '../components/Layout'

import projectThumb from '../assets/projects/projectThumb.svg'

export default function Projects() {
  return (
    <Layout page='projects'>
      <Container>
        <ProjectsContainer>
          <h1>Meus Projetos</h1>

          <p>
          Principais projetos realizados por mim. Outros projetos podem ser encontrados no meu <a href='https://github.com/MickaelAraujs'>Github</a>.
          </p>

          <div className="projects">
            <div className="card">
              <img src={projectThumb} alt='Very Useful Tools To Remember'/>

              <div className="info">
                <div>
                  <h2>Very Useful Tools To Remember</h2>

                  <a
                  href='https://github.com/MickaelAraujs/vuttr'
                  target='_blank'
                  rel='noreferrer'
                  >
                    https://github.com/MickaelAraujs/vuttr
                  </a>

                  <p>
                    repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.
                  </p>
                </div>

                <span>
                  Tecnologias: <span>CSS, Javascript, ReactJS</span>
                </span>
              </div>
            </div>
          </div>
        </ProjectsContainer>
      </Container>
    </Layout>
  )
}