import React from 'react'
import { Link } from 'gatsby'
import { FiInfo, FiCode, FiMail } from 'react-icons/fi'

import { HeaderContainer } from './styles'

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <h1>
          <img src={logo} alt='Mickael Araujo - Full-stack Developer'/>
        </h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to='/'>
              <FiInfo />

              Sobre
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <FiCode />

              Projetos
            </Link> 
          </li>
          <li>
            <Link to='/contact'>
              <FiMail />

              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}