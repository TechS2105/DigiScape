import React from 'react';
import TestimonialReviewSwiperPersonImage from '../Testimonial Component/Testimonialreviewswiperpersonimage';

function Testimonialreviewswiperpersonimage({TestimonialStyle, content, zoomingImage}) {
    
    return (

        <>
        
            {/** Review Owner Image Container */}
            <div className={TestimonialStyle.reviewOwnerImageContainer}>
            
                {/** Owner Image Div */}
                <TestimonialReviewSwiperPersonImage
                
                    TestimonialStyle={TestimonialStyle}
                    content={content}
                    zoomingImage={zoomingImage}
                    
                />
            
            </div>
            
        </>

    );

}

export default Testimonialreviewswiperpersonimage;