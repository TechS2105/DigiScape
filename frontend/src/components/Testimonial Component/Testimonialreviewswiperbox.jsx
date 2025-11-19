import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

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
                                <div className={TestimonialStyle.reviewContentContainer}>
            
                                    <p>{ testimonialQuote} {content.reviewText}</p>
            
                                    {/** Owner Name Section */}
                                    <div className={TestimonialStyle.ownerNameDiv}>
            
                                        <span>{checkMarkAsAdmin} {content.reviewOwnerName}</span> * <span>{content.reviewOwnerDesignation}</span>
                                                                
                                    </div>
            
                                </div>
            
                                {/** Review Owner Image Container */}
                                <div className={TestimonialStyle.reviewOwnerImageContainer}>
            
                                    {/** Owner Image Div */}
                                    <div className={TestimonialStyle.ownerImageDiv}>
            
                                        <img src={content.image} alt={content.altText} style={zoomingImage} />
            
                                    </div>
            
                                </div>
            
                            </div>
            
                        </SwiperSlide>
            
                    );
            
                })}                        
            
            </Swiper>
            
        </>

    );

}

export default Testimonialreviewswiperbox;