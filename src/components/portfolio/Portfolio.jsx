import React, { useRef, useState } from "react"
import './portfolio.css'
import AR1 from '../../assets/PortfolioAssets/kef2finditems.jpg'
import AR2 from '../../assets/PortfolioAssets/kef2finditemshelp.jpg'
import AR3 from '../../assets/PortfolioAssets/kef2pirama.jpg'
import Game1 from '../../assets/PortfolioAssets/Game1.JPG'
import Game2 from '../../assets/PortfolioAssets/Game2.JPG'
import Game3 from '../../assets/PortfolioAssets/Game3.JPG'
import Game4 from '../../assets/PortfolioAssets/Game4.JPG'
import car1 from '../../assets/PortfolioAssets/car1.JPG'
import car2 from '../../assets/PortfolioAssets/car2.JPG'
import car3 from '../../assets/PortfolioAssets/car3.png'
import meals1 from '../../assets/PortfolioAssets/meals1.JPG'
import meals2 from '../../assets/PortfolioAssets/meals2.JPG'
import meals3 from '../../assets/PortfolioAssets/meals3.JPG'
import Time1 from '../../assets/PortfolioAssets/Time1.JPG'
import Time2 from '../../assets/PortfolioAssets/Time2.JPG'
import Time3 from '../../assets/PortfolioAssets/time3.JPG'
import {FaUnity} from 'react-icons/fa'
import {CiPizza} from 'react-icons/ci'
import {SiBlender} from 'react-icons/si'
import {TbAugmentedReality} from 'react-icons/tb'
import {IoTimeOutline} from 'react-icons/io5'
import {FaReact} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation} from "swiper";
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
              <h3>AR Game, regarding the Physics laboratory experiments for the First Grade of High School <TbAugmentedReality className="portfolio__Swiper__Icon"/></h3>
              <p>
                This project was made as part of my University thesis. The application is made for mobile phones and was created by using the Unity Game Engine. 
                All 3D and 2D game objects were created by using Blender and Photoshop respectively. Augmented Reality techniques were used in order for the player/student to interact with various objects in the game with unique and fun ways.
                The project was presented at the International Hellenic University in front of an audience.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image__Legends">
                  <img src={Game1} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Legends">
                  <img src={Game2} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Legends">
                  <img src={Game4} alt='About Image'/>
                </div>
              </div>
              <h3>Unity 3D RPG Game Project <FaUnity className="portfolio__Swiper__Icon"/></h3>
              <p>
                This is a First Person Open World RPG Game made in Unity Game Engine using C#. The game is going to be focused around role playing and exploration. Combat will mainly be focused on melee weapons and a fast paced real time combat system. Game will also feature enemy bosses, inventory, a looting system, and important dialogues between player and in game friendly characters. Looting, talking with NPCs and other activities might help the player find some hints about hidden content in the game. The game will also have a leveling system through which the player will unlock a wide variety of skills. Game is still under development.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image__Blender">
                  <img src={car1} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Blender">
                  <img src={car2} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Blender">
                  <img src={car3} alt='About Image'/>
                </div>
              </div>
              <h3>Blender 3D Animation Project <SiBlender className="portfolio__Swiper__Icon"/></h3>
              <p>
                This short but fun and interesting project was developed as part of a University exercise. The project features a 3D Scene, with some custom 3D Objects. These 3D Objects have a wide variety of different features, including different material colors, real-time lightning and reflections. The objects in the scene are animated and interact with each other through collision physics. The Scene also includes a custom skybox.  
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image__Meals">
                  <img src={meals1} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Meals">
                  <img src={meals2} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Meals">
                  <img src={meals3} alt='About Image'/>
                </div>
              </div>
              <h3>Mobile Phone Food Ordering App <CiPizza className="portfolio__Swiper__Icon"/></h3>
              <p>
                This Food Ordering Style app was created using React Native. In this application the user can login into his account. Search for available stores near him through either a list, or a map view. He can also see customer reviews and photos for the restaurant. Even more info, like the restaurant's type, is displayed on the restaurant's card. Project was part of a React Native Online Course on Udemy.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__item"> 
              <div className="portfolio__image__container">
                <div className="portfolio__Swiper__Image__Meals">
                  <img src={Time1} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Meals">
                  <img src={Time2} alt='About Image'/>
                </div>
                <div className="portfolio__Swiper__Image__Meals">
                  <img src={Time3} alt='About Image'/>
                </div>
              </div>
              <h3>Mobile Time Management App <IoTimeOutline className="portfolio__Swiper__Icon"/></h3>
              <p>
                This Time Management app was created using React Native. In this application the user can start some activities that he wants to focus in, and set a timer for the time he wants to focus on that specific activity. The timer then starts and the user has to focus on his activity. The application prevents the user from using other apps on his phone by pausing the timer every time the user closes the app. That way the user can really focus on the task at hand. The user gets to pause the timer every now and then. The app laso features an activity logger where the user can see all the logged and successfully focused on activities of the day. Project was part of a React Native Online Course on Udemy.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__item">
              <div className="lastSlide">
                <h3><FaReact className="portfolio__Swiper__Icon"/> The Page you are currently viewing is a small project itself. <FaReact className="portfolio__Swiper__Icon"/></h3>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio