import React from 'react'

import { Container } from '../styles/global'
import { ProjectsContainer } from '../styles/projects'

import Layout from '../components/Layout'
import Card from '../components/Card'
import SEO from '../config/seo'

//projects imgs
import wikifilmes from '../assets/projects/wikifilmes.png'
import ecoleta from '../assets/projects/ecoleta.svg'
import hero from '../assets/projects/hero.svg'
import wallet from '../assets/projects/wallet.png'

export default function Projects() {
  return (
    <Layout page='projects'>
      <SEO title='Meus Projetos' />

      <Container>
        <ProjectsContainer>
          <h1>Meus Projetos</h1>

          <p>
          Principais projetos realizados por mim. Outros projetos podem ser encontrados no meu <a href='https://github.com/MickaelAraujs'>Github</a>.
          </p>

          <div className="projects">
            <Card
              name='My Digital Wallet'
              repo='https://github.com/MickaelAraujs/wallet'
              description='Aplicativo de controle de despesas. O usuário pode criar um registro de gastos (ou ganhos) e
              a aplicação apresenta um resumo das movimentações de cada dia.'
              techs='React Native, Firebase, Styled-Components'
              img={wallet}
            />

            <Card
              name='Very Useful Tools To Remember'
              repo='https://github.com/MickaelAraujs/vuttr'
              description='repositório para gerenciar ferramentas com seus respectivos nomes, links,
              descrições e tags.'
              techs='CSS, Javascript, ReactJS'
            />

            <Card
              name='Ecoleta'
              repo='https://github.com/MickaelAraujs/ecoleta'
              description='marketplace onde pontos de coleta podem ser encontrados de forma eficiente.
              Consiste em uma aplicação web, que serve para cadastrar um ponto de coleta e um aplicativo mobile,
              onde o usuário pode encontrar pontos de coleta filtrando por itens coletados e localização.'
              techs='NodeJS, Express, SQLite, ReactJS, React Native, Typescript'
              img={ecoleta}
            />

            <Card
              name='Be The Hero'
              repo='https://github.com/MickaelAraujs/BeTheHero'
              description='Aplicação para conectar ONGs a pessoas dispostas a fazer uma doação. Consiste em 
              uma aplicação web, onde a ONG pode registrar casos e uma aplicação mobile para os doadores procurarem casos
              e entrar em contato com as ONGs.'
              techs='NodeJS, Express, SQLite, ReactJS, React Native'
              img={hero}
            />

            <Card
              name='DevRadar'
              repo='https://github.com/MickaelAraujs/DevRadar'
              description='Aplicação para encontrar Devs próximos a você que trabalham com as mesmas tecnologias'
              techs='NodeJS, Express, MongoDB, ReactJS, React Native'
            />

            <Card
              name='Wikifilmes'
              repo='https://github.com/MickaelAraujs/wikifilmes'
              description='Um simples site sobre os principais filmes de 2019,
              detalhando gênero, sinopse, elenco e outras coisas relacionadas.'
              techs='HTML, CSS'
              img={wikifilmes}
            />


          </div>
        </ProjectsContainer>
      </Container>
    </Layout>
  )
}