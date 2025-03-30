import React from 'react'
import './Navbar.css'
import fullLogo from '../../assets/full_logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={fullLogo} alt="" />
        <ul>
            <li>Home</li>
            <li>Sobre Nós</li>
            <li>Produtos</li>
            <li>Blog</li>
            <li>Contactos</li>
        </ul>
    </nav>
  )
}

export default Navbar
