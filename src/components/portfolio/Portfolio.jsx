import React, { useRef, useState } from "react"
import './portfolio.css'
import AR1 from '../../assets/PortfolioAssets/kef2finditems.jpg'
import AR2 from '../../assets/PortfolioAssets/kef2finditemshelp.jpg'
import AR3 from '../../assets/PortfolioAssets/kef2pirama.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation} from "swiper";
import redapple from '../../assets/redapple.JPG'
import Divider from "../divider/Divider";

function Portfolio() {
  return (
    <section id='portfolio'>
      <Divider/>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="portfolio__Swiper"
        style={{"--swiper-pagination-color": "#26ff88",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-navigation-color" : "#26ff88"
        }}
        navigation={true}
        centeredSlides={true}
        pagination={{
          dynamicMainBullets: true,
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
          <SwiperSlide>
            <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image__Legends">
                  <img src={redapple} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Legends">
                  <img src={redapple} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Legends">
                  <img src={redapple} alt='About Image'/>
                </div>
              </div>
              <h3>Unity 3D RPG Game Project</h3>
              <p>
                This is a First Person Open World RPG Game made in Unity Game Engine using C#. This game is going to be focused around role playing, melee combat and exploration. Game is still under development.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image__AR">
                  <img src={AR1} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__AR">
                  <img src={AR2} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__AR">
                  <img src={AR3} alt='About Image'/>
                </div>
              </div>
              <h3>AR Game, regarding the Physics laboratory experiments for the First Grade of High School</h3>
              <p>
                This project was made as part of my University thesis. The application is made for mobile phones and was created by using the Unity Game Engine. 
                All 3D and 2D game objects were created by using Blender and Photoshop respectively. Augmented Reality techniques were used in order for the player/student to interact with various objects in the game with unique and fun ways.
                The project was presented at the University in front of a crowd and has been rated 10.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image">
                  <img src={redapple} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image">
                  <img src={redapple} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image">
                  <img src={redapple} alt='About Image'/>
                </div>
              </div>
              <h3>Unity 3D RPG Game Project</h3>
              <p>
                This is a First Person Open World RPG Game made in Unity Game Engine using C#. This game is going to be focused around role playing, melee combat and exploration. Game is still under development.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image">
                  <img src={redapple} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image">
                  <img src={redapple} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image">
                  <img src={redapple} alt='About Image'/>
                </div>
              </div>
              <h3>Unity 3D RPG Game Project</h3>
              <p>
                This is a First Person Open World RPG Game made in Unity Game Engine using C#. This game is going to be focused around role playing, melee combat and exploration. Game is still under development.
              </p>
            </div>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio