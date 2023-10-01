import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../imageSwiper/swiperImage.css';

import image_0 from '../../assets/image0.jpeg';
import image_1 from '../../assets/image1.jpeg';
import image_2 from '../../assets/image2.jpeg';
import image_3 from '../../assets/image3.jpeg';

const SwiperImg = () => {
  return (
    <section id="Home" className="homeContent">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="imgContainer">
            <img src={image_0} alt="" />
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
            <img src={image_3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperImg;
