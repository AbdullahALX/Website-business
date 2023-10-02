import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../imageSwiper/swiperImage.css';

import image_0 from '../../assets/image0.jpeg';
import image_1 from '../../assets/image1.jpeg';
import image_2 from '../../assets/image2.jpeg';
import image_3 from '../../assets/image3.jpeg';

const SwiperImg = () => {
  return (
    <section id="Home" className="homeContent">
      <Swiper
        style={{
          '--swiper-pagination-color': '#72655c',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
          '--swiper-pagination-bullet-size': '14px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, loop: true }}
        //scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="imgContainer">
            <img src={image_3} alt="" />
            <div className="textCover">
              <h1 className="text">
                Your Vision Into A Design <br></br>
              </h1>
              <h1 className="textName">by embroideries by ari</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgContainer">
            <img src={image_1} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgContainer">
            <img src={image_2} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgContainer">
            <img src={image_0} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperImg;
