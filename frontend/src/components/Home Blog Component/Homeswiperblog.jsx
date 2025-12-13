import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { GiSevenPointedStar } from "react-icons/gi";

function Homeswiperblog({HomeBlogStyle, blogs}) {
    
    return (

        <>
        
            {/** Swiper Blog Section */}
            <Swiper
                
                slidesPerView={2}
                spaceBetween={60}
                loop={true} 
                speed={3000}
                autoplay={{

                    delay: 2000

                }}

                modules={[Autoplay]}
                className={HomeBlogStyle.swiperBlogSection}>

                {/** Swiper Slider */}
                {blogs.map((blogItem, id) => {

                    return (

                        <SwiperSlide className={HomeBlogStyle.blogDiv} key={id}>

                            {/** Blog Image Div */}
                            <div className={HomeBlogStyle.blogImageDiv}>

                                <img src={blogItem.frontBlogDetails.image} alt={blogItem.frontBlogDetails.altText} />

                            </div>

                            {/** Blog Content Div */}
                            <div className={HomeBlogStyle.blogContentDiv}>

                                {/** Blog Content Title Div */}
                                <div className={HomeBlogStyle.blogContentTitleDiv}>

                                    {/** Blog Content SVG Div */}
                                    <div className={HomeBlogStyle.blogContentSVGDiv}>

                                        <GiSevenPointedStar />

                                    </div>

                                    {/** Blog Title */}
                                    <div className={HomeBlogStyle.blogContentTitle}>

                                        <h4> {blogItem.frontBlogDetails.title} </h4>

                                    </div>

                                </div>
                                <p> {blogItem.frontBlogDetails.description} </p>
                                <a href="#">{blogItem.frontBlogDetails.buttonText}</a>

                            </div>

                        </SwiperSlide>

                    );

                })}

            </Swiper>
            
        </>

    );

}

export default Homeswiperblog;