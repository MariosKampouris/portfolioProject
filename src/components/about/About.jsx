import React from 'react'
import './about.css'
import redapple from '../../assets/redapple.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ImageReact from '../../assets/React-icon.silver.png'
import Divider from '../divider/Divider'

const About = () => {
  return (
    <section id='about'>
      <Divider/>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ImageReact} alt='About Image'/>
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5+ years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Passion For</h5>
              <small>Web Development</small>
              <small>- Game Development</small>
              <small>- Game Design</small>
              <small>- New Technologies</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>1 in Game Development</small>
            </article>
          </div>

          <p>
            Hello, I am Marios Kampouris and I live in Thessaloniki, Greece. I am a graduate student of International Hellenic University and have a passion for technology, games and motorcycles.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      
      </div>
    </section>
  )
}

export default About