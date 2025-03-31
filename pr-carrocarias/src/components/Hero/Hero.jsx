import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Paulo Rodrigues</h1>
        <p>Componetes e Acessórios para Carroçarias</p>
        <button className='btn'>Saber Mais <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
