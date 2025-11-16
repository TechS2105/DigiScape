import React from 'react';
import TestimonialStyle from '../../../public/styles/testimonial files/testimonial.module.css';
import TestimonialTitle from '../Testimonial Component/Testimonialtitles';
import TestimonialPersonImageSection from '../Testimonial Component/Testimonialpersonimagecontainer';

let pImage = '../../../public/images/Testimonial Images/robot.png';
let patternImg = '../../../public/images/Testimonial Images/pattern2.png';

function Testimonial() {
    
    return (

        <>
        
            {/** Testimonial Container */}
            <div className={TestimonialStyle.testimonialMainContainer}>

                {/** Testimonial Title Section */}
                <div className={TestimonialStyle.testimonialTitleContainer}>

                    <TestimonialTitle
                    
                        spanTitle="Trusted Client Testimonials"
                        mainTitle="Real stories that highlight our digital marketing impact"
                        
                    />

                </div>

                {/** Testimonial Review Section */}
                <div className={TestimonialStyle.testimonialReviewSection}>

                    {/** Testimonial Review Box  */}
                    <div className={TestimonialStyle.testimonialReviewBox}>

                        {/** Review Swiper Container */}
                        <div className={TestimonialStyle.reviewSwiperContainer}>

                            {/**  */}

                        </div>

                    </div>

                    {/** Testimonial Person Image */}
                    <TestimonialPersonImageSection
                    
                        TestimonialStyle={TestimonialStyle}
                        image={pImage}
                        altText="Testimonial Person Image"
                        patternImg={patternImg}
                        pAltText="Pattern Image"
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Testimonial;