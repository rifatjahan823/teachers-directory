import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import avatar1 from '../../../assets/home/Rectangle 193.png';
import avatar2 from '../../../assets/home/Rectangle 194.png';
import { AiFillStar} from "react-icons/ai";
import { RiStarHalfLine } from "react-icons/ri";
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial-section '>
      <div className='container'>
          <h2 className='common-title'>Client testimonials</h2>
          <div>
            {/* ---------for desktop--------- */}
            <Swiper className='d-none d-lg-block px-4'
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination]}
                navigation
                loop={true}
                 autoplay={{ delay:3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {/* -----------------first slider--------------- */}
                <SwiperSlide >
                    <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Headmistress</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
                {/* -----------------second slider--------------- */}
                <SwiperSlide>
                <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar2} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Art Teacher</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <RiStarHalfLine className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
                {/* -----------------third slider--------------- */}
                <SwiperSlide>
                <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Headmistress</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
               
              </Swiper>
              {/* ---------for tab--------- */}
              <Swiper className='d-none d-lg-none d-md-block px-5'
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination]}
                navigation
                loop={true}
                 autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {/* -----------------first slider--------------- */}
                <SwiperSlide >
                    <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Headmistress</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
                {/* -----------------second slider--------------- */}
                <SwiperSlide>
                <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar2} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Art Teacher</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <RiStarHalfLine className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
                {/* -----------------third slider--------------- */}
                <SwiperSlide>
                <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Headmistress</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
              </Swiper>
              {/* ---------for mobile--------- */}
              <Swiper className='d-block d-md-none px-5'
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay, Pagination]}
                navigation
                loop={true}
                 autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {/* -----------------first slider--------------- */}
                <SwiperSlide >
                    <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Headmistress</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
                {/* -----------------second slider--------------- */}
                <SwiperSlide>
                <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar2} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Art Teacher</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <RiStarHalfLine className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
                {/* -----------------third slider--------------- */}
                <SwiperSlide>
                <div className='testimonial-content h-100'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <img src={avatar1} alt="" />
                            </div>
                            <div>
                              <h6>John Doe, Headmistress</h6>
                              <p className='date'>12/08/2021</p>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                              <AiFillStar className='testimonial-rating'/>
                            </div>
                        </div>
                        <p>Nulla varius porttitor odio, in finibus est tincidunt quis. Nam rutrum turpis at quam gravida, eget feugiat nisl ultrices. Maecenas tempor vulputate tellus, id accumsan libero ultricies eu. Fusce sapien lorem, auctor ac risus sed, auctor ultricies ipsum.</p>
                    </div>
                </SwiperSlide>
              </Swiper>
          </div>
      </div>
    </div>
  )
}

export default Testimonial