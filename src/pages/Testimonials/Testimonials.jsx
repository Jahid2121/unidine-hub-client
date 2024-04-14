import testimonialImg from "../../assets/black-guy-posing-with-healthy-salad-gesturing-okay-resize-1.png";
import QuoteImg from "../../assets/icons8-quote-96.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation, A11y } from 'swiper/modules';
import useReviews from "../../hooks/useReviews";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Testimonials = () => {
    const [reviews] = useReviews()
  return (
    <div className="bg-custom-background-image bg-fixed">
        <SectionTitle heading="reviews" subHeading="What Our Members Say" />
    <section className="py-16 dark:bg-black dark:text-white  md:flex  items-center gap-16 bg-gray-100">
      <img className="w-96" src={testimonialImg} alt="" />
      
      <div className=" mx-auto  text-center">
        
      
          <div className="bg-white dark:bg-black dark:text-white  w-[500px] h-[400px]   p-6 rounded-lg shadow">
          <Swiper
          
          pagination={true} modules={[Navigation, A11y, Autoplay]}
          spaceBetween={40
          
          
          }
          Autoplay={{delay: 3000}} className="mySwiper">
        {

        }
       
            {
                reviews?.map((review,idx) =>  <SwiperSlide key={idx}>
                    <div className="dark:border dark:border-white">
                        <img className="w-20 dark:bg-white  flex mx-auto" src={QuoteImg} alt="" />
                        <h2 className="text-2xl  font-bold">{review.quote}</h2>
                        <p className="text-xl mt-9">{review.author}</p>
                        <Rating className="flex mx-auto"  style={{ maxWidth: 100 }} value={4} readOnly></Rating>
                    </div>
                    <p>...</p>
                </SwiperSlide>
                )
            }
      </Swiper>
          </div>
          {/* Repeat similar cards for other testimonials */}
        </div>
    </section>
    </div>
  );
};

export default Testimonials;
