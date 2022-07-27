import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import logoslide1 from '../../../assets/logo-slider-1.png';
import logoslide2 from '../../../assets/logo-slider-2.png';
import logoslide3 from '../../../assets/logo-slider-3.png';
import logoslide4 from '../../../assets/logo-slider-4.png';
import logoslide5 from '../../../assets/logo-slider-5.png';
import './Support.css'


const Support = () => {
  return (
    <div className='support-section'>
      <div className='container'>
        <h2>Supported by</h2>
        <div className='row'>
          <div className='col-12'>
            <div className='slide-logo'>
              {/* ---------for desktop--------- */}
              <Swiper className='d-none d-lg-block'
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination]}
                navigation
                loop={true}
                 autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide ><img src={logoslide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
              </Swiper>
              {/* ---------for tab--------- */}
              <Swiper className='d-none d-lg-none d-md-block'
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay,Pagination]}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide ><img src={logoslide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
              </Swiper>
              {/* ---------for mobile--------- */}
              <Swiper className='d-block d-md-none'
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay,Pagination]}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide ><img src={logoslide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={logoslide3} alt="" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support