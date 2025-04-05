import React from 'react'
import './About.css'
import about_img from '../../assets/eu-ponte-lima.webp'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>Acerca de mim!</h3>
        <p>Desde 1988 a trabalhar por conta de outrem com materiais para carroçarias industriais de tipologia rígida,
           isotérmicas e frigorificas conferiram-me alguns conhecimentos nessa área. </p>
         <p>Decidi em 2014 criar a minha própria empresa (micro) desta feita mais focado nas carroçarias de carga geral,
         rígidas e lonas.</p>
         <p>Desde 1988 a trabalhar por conta de outrem com materiais para carroçarias industriais de tipologia rígida,
           isotérmicas e frigorificas conferiram-me alguns conhecimentos nessa área. </p>
         <p>Decidi em 2014 criar a minha própria empresa (micro) desta feita mais focado nas carroçarias de carga geral,
         rígidas e lonas.</p>
         <h3>Da Empresa</h3>
         <p>Desde 1988 a trabalhar por conta de outrem com materiais para carroçarias industriais de tipologia rígida,
           isotérmicas e frigorificas conferiram-me alguns conhecimentos nessa área. </p>
         <p>Decidi em 2014 criar a minha própria empresa (micro) desta feita mais focado nas carroçarias de carga geral,
         rígidas e lonas.</p>
      </div>

    </div>
  )
}

export default About
