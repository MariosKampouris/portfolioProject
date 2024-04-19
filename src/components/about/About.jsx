import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiOfficeChair} from 'react-icons/gi'
import {BiHeart} from 'react-icons/bi'
import {HiMinusSm} from "react-icons/hi";
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
            <article className='about__card fadeIn'>
              <GiOfficeChair className='about__icon'/>
              <h5>Experience</h5>
              <small>
              <HiMinusSm className='about__dashIcon'/> 2+ years Fullstack Web Developer <br/> <HiMinusSm className='about__dashIcon'/> 8 months Quality Assurance
              </small>
              
            </article>
            <article className='about__card fadeIn'>
              <BiHeart className='about__icon'/>
              <h5>Coding Passion</h5>
              <small>
              <HiMinusSm className='about__dashIcon'/> Web Development <br/>
              <HiMinusSm className='about__dashIcon'/> Game Development <br/>
              <HiMinusSm className='about__dashIcon'/> Game Design <br/>
              <HiMinusSm className='about__dashIcon'/> Cutting Edge Technologies <br/>
              </small>
            </article>
            <article className='about__card fadeIn'>
              <FaAward className='about__icon'/>
              <h5>Degree</h5>
              <small>Bachelor in Information Technology Engineering at International Hellenic University.</small>
            </article>
          </div>

          <p>
          Experienced fullstack developer with proven expertise, now transitioning towards front end specialization. Holding a degree in Information Technology from the International Hellenic University, I bring a solid foundation to my craft. Passionate about refining user interfaces to enhance digital experiences.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      
      </div>
    </section>
  )
}

export default About