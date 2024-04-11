import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME2 from '../../assets/photobioCircle.jpg'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/Wave.json'


const defaultOptions = {
  loop: false,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Marios Kampouris</h1>
        <h5 className='text-light'>FrontEnd / Fullstack Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='header_animation_container'>
            <Lottie options={defaultOptions}
                height={400}
                width={800}
            />
            <div className='header_inside_animation_container'>
              <text className='header_animation_text'>Devoted to Web Design</text>
            </div>
        </div>
        <div className='me'>
          <img src={ME2} alt="me"/>
        </div>


        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>


    </header>
  )
}


export default Header