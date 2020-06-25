import React from 'react'

import { Container } from '../styles/global'
import { ProjectsContainer } from '../styles/projects'

import Layout from '../components/Layout'
import Card from '../components/Card'

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
            <Card />

            <Card />

            <Card />

            <Card />

            <Card />

            <Card />
          </div>
        </ProjectsContainer>
      </Container>
    </Layout>
  )
}