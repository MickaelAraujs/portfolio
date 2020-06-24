import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiInfo, FiCode, FiMail, FiMenu, FiX } from 'react-icons/fi'

import { HeaderContainer } from './styles'

import logo from '../../assets/logo.png'
import ResponsiveNav from '../ResponsiveNav'

export default function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  return (
    <HeaderContainer>
      <Link to='/'>
        <h1>
          <img src={logo} alt='Mickael Araujo - Full-stack Developer'/>
        </h1>
      </Link>

      <div
      className={
        isButtonClicked ? 'responsive active' : 'responsive closed'
      }
      >
        <button
        onClick={() => setIsButtonClicked(!isButtonClicked)}
        >
          { !isButtonClicked ? (
            <FiMenu size={32} color='#fff'/>
          ) : (
            <FiX size={26} color='#fff'/>
          ) }
        </button>

        <ResponsiveNav />
      </div>

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