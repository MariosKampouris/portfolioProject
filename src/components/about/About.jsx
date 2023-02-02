import React from 'react'
import './about.css'
import redapple from '../../assets/redapple.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ImageReact from '../../assets/React-icon.svg.png'

const About = () => {
  return (
    <section id='about'>
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
              <h5>Clients/Passion for</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas ac risus a pellentesque. 
            Nulla eget neque arcu. Nulla non gravida elit. Duis et facilisis ligula. 
            Fusce nec magna vel magna posuere aliquam id sit amet magna.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      
      </div>
    </section>
  )
}

export default About