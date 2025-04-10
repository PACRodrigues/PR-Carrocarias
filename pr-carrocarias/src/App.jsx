import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Title from './components/Title/Title'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='PAULO RODRIGUES' title='Acessórios e Componentes para Carroçarias'/>
        <About/>
        <About/>
        <Title subTitle='Contactos' title='Entre em Contacto'/>
        <Contacts/>
      </div>
    </div>
  )
}

export default App