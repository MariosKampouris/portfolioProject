import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiOfficeChair} from 'react-icons/gi'
import {BiHeart} from 'react-icons/bi'
import ImageReact from '../../assets/React-icon-silvern.png'
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
              <GiOfficeChair className='about__icon'/>
              <h5>Experience</h5>
              <small>
                    - 8 months Quality Assurance <br/> - 10 months FullStack Web Developer
              </small>
              
            </article>
            <article className='about__card'>
              <BiHeart className='about__icon'/>
              <h5>Coding Passion</h5>
              <small>
                - Web Development <br/>
                - Game Development <br/>
                - Game Design <br/>
                - Cutting Edge Technologies <br/>
              </small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Degree</h5>
              <small>Bachelor in Information Technology Engineering at International Hellenic University.</small>
            </article>
          </div>

          <p>
            Hello, I am Marios Kampouris and I live in Thessaloniki, Greece. I am a graduate student of International Hellenic University and have a passion for technology, video games and coding.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      
      </div>
    </section>
  )
}

export default About