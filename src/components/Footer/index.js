import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

import { FooterContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <a href='https://github.com/MickaelAraujs'>
          <FaGithub size={36} color='#429586' />
        </a>

        <a href='https://www.linkedin.com/in/mickaelaraujs/'>
          <FaLinkedin size={36} color='#429586' />
        </a>

        <a href='https://www.instagram.com/mickaelarauj/'>
          <FaInstagram size={36} color='#429586' />
        </a>
      </div>
    </FooterContainer>
  )
}