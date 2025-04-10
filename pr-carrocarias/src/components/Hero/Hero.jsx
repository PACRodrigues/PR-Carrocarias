import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import home_img from '../../assets/full-logo-branco.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <img src={home_img} alt="" className='home-img'/>
        <button className='btn'>Saber Mais <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
