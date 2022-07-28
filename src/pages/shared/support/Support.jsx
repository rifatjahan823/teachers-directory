import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,} from 'swiper';
import { Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import logoslide1 from '../../../assets/home/logo-slider-1.png'
import logoslide2 from '../../../assets/home/logo-slider-2.png';
import logoslide3 from '../../../assets/home/logo-slider-3.png'
import logoslide4 from '../../../assets/home/logo-slider-4.png';
import logoslide5 from '../../../assets/home/logo-slider-5.png';
import './Support.css'


const Support = () => {
  return (
    <div className='support-section'>
      <div className='container'>
        <h2 className='common-title'>Supported by</h2>
        <div className='row'>
          <div className='col-12'>
            <div className='slide-logo'>
              {/* ---------for desktop--------- */}
              <Swiper 
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay,Navigation]}
                navigation
                loop={true}
                 autoplay={{ delay: 3000 }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  991: {
                    slidesPerView: 5,
                  },
                  767: {
                    slidesPerView: 3,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
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