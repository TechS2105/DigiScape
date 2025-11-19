import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import TestimonialReviewSwiperContent from '../Testimonial Component/Testimonialreviewswipercontents';
import TestimonialReviewSwiperPersonImage from './Testimonialreviewswiperpersonimagecontainer';

function Testimonialreviewswiperbox({TestimonialStyle, handleImageOnMouseEnter, handleImageOnMouseOut, getTestimonialData, zoomingImage, testimonialQuote, checkMarkAsAdmin}) {
    
    return (
    
        <>
        
            {/** Testimonial Review Swiper Section */}
            <Swiper
                                        
                slidesPerView={1}
                loop={true}
                spaceBetween={20}
                speed={2300}
                navigation={{
            
                    nextEl: "#nxtEl",
                    prevEl: "#prevEl"
            
                }}
            
                modules={[Navigation]}
                className={TestimonialStyle.testimonialReviewSwiperBox}
                                    
            >
            
                {/** Testimonial Review Swiper Slider Section */}
                {getTestimonialData.map((content) => {
            
                    return (
            
                        <SwiperSlide className={TestimonialStyle.testimonialSwiperSliderReviewBox}>
            
                            {/** Testimonial Swiper Slider Inner section */}
                            <div className={TestimonialStyle.testimonialSwiperSliderInnerReviewBox} onMouseOver={handleImageOnMouseEnter} onMouseOut={handleImageOnMouseOut}>
            
                                {/** Review Content Container */}
                                <TestimonialReviewSwiperContent
                                
                                    TestimonialStyle={TestimonialStyle}
                                    content={content}
                                    checkMarkAsAdmin={checkMarkAsAdmin}
                                    testimonialQuote={testimonialQuote}
                                    
                                />
            
                                {/** Review Owner Image Container */}
                                <TestimonialReviewSwiperPersonImage
                                
                                    TestimonialStyle={TestimonialStyle}
                                    zoomingImage={zoomingImage}
                                    content={content}
                                    
                                />
                                
            
                            </div>
            
                        </SwiperSlide>
            
                    );
            
                })}                        
            
            </Swiper>
            
        </>

    );

}

export default Testimonialreviewswiperbox;