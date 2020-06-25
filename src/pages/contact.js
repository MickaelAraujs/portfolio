import React from 'react'
import { FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import { Container } from '../styles/global'
import { ContactContainer } from '../styles/contact'

import Layout from '../components/Layout'
import SEO from '../config/seo'

export default function Contact() {
  return (
    <Layout>
      <SEO title='Contato' />

      <Container>
        <ContactContainer>
          <h2>Entre em <br /> contato!</h2>

          <p>
            Aqui estão algumas opções de contato.
            Caso queira conversar de uma forma mais direta,
            minhas redes sociais também estão disponíveis abaixo.
            <br /> Sinta-se a vontade 😃.
          </p>

          <div className="media">
            <span className="item">
              <span className="name">
                <FiMail />

                Email:
              </span>

              <span className="value">
                mickaelaraujo.contato@gmail.com
              </span>
            </span>

            <span className="item">
              <span className="name">
                <FaWhatsapp />

                Whatsapp:
              </span>

              <span className="value">
                (83) 9 8190-5065
              </span>
            </span>
          </div>

          <p>
            Você pode também entrar em contato por meio da plataforma Bossabox clicando
            <a href='https://app.bossabox.com/u/mickael-araujo'>Aqui</a>.
          </p>
        </ContactContainer>
      </Container>
    </Layout>
  )
}