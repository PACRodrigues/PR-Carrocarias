import React from 'react'
import './Navbar.css'
import fullLogo from '../../assets/full_logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={fullLogo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Sobre Nós</li>
            <li>Produtos</li>
            <li>Blog</li>
            <li><button className='btn'>Contactos</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
