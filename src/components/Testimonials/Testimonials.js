import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/img/avatar-01.jpg';
import AVATAR2 from '../../assets/img/avatar-02.jpg';
import AVATAR3 from '../../assets/img/avatar-03.jpg';

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: 'Luis Leal',
    review: 'The first one I call for anything web related. Amazing to work with.'
  },
  {
    avatar: AVATAR2,
    name: 'Monica Chacin',
    review: 'He is a crack! Got my website up and ready to post and sale in two weeks!'
  },
  {
    avatar: AVATAR3,
    name: 'Dunja Koller',
    review: 'Our Beach Clubs and Hotel site gave a 180 turn when he came in. Absolutely the best!'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        
        {data.map(({avatar, name, review})=>{
          return(
            <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
        

      </Swiper>
    </section>
  )
}

export default Testimonials