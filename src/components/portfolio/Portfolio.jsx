import React, { useRef, useState } from "react"
import './portfolio.css'
import IMG1 from '../../assets/swordofkings.JPG'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation} from "swiper";
import redapple from '../../assets/redapple.JPG'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="portfolio__Swiper"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas ac risus a pellentesque. 
                Nulla eget neque arcu. Nulla non gravida elit. Duis et facilisis ligula. 
                Fusce nec magna vel magna posuere aliquam id sit amet magna.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            slide 2
          </SwiperSlide>
          <SwiperSlide>
            slide 3
          </SwiperSlide>
          <SwiperSlide>
            slide 4
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio