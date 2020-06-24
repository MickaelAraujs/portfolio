import React from 'react'
import { Link } from 'gatsby'
import { FiInfo, FiCode, FiMail } from 'react-icons/fi'

export default function ResponsiveNav() {
  return (
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
  )
}