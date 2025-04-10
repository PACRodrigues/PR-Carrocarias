import React, { useEffect, useState } from 'react'
import './Navbar.css'
import fullLogo from '../../assets/small-logo-branco.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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
