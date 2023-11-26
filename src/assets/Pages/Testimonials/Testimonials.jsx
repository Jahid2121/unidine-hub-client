import testimonialImg from "../../../../public/black-guy-posing-with-healthy-salad-gesturing-okay-resize-1.png";
import QuoteImg from "../../../../public/icons8-quote-96.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import useReviews from "../../../hooks/useReviews";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const [reviews] = useReviews()
  return (
    <div>
        <SectionTitle heading="reviews" subHeading="What Our Members Say" />
    <section className="py-16  md:flex  items-center gap-16 bg-gray-100">
      <img className="w-96" src={testimonialImg} alt="" />
      <div className=" mx-auto  text-center">
      
        
      
          <div className="bg-white  w-[500px] h-[400px]   p-6 rounded-lg shadow">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {

        }
       
            {
                reviews?.map(review =>  <SwiperSlide key={review}>
                    <div>
                        <img className="w-20 flex mx-auto" src={QuoteImg} alt="" />
                        <h2 className="text-2xl  font-bold">{review.quote}</h2>
                        <p className="text-xl mt-9">{review.author}</p>
                        <Rating  style={{ maxWidth: 100 }} value={4} readOnly></Rating>
                    </div>
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
