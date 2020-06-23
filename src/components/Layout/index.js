import React from 'react'

import { GlobalStyles } from '../../styles/global'
import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children, page }) {
  return (
    <Container>
      <GlobalStyles />
      
      <Header /> 
      
      <main>
        {children}
      </main>

      <Footer page={page}/>
    </Container>
  )
}