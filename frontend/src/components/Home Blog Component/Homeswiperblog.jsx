import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { GiSevenPointedStar } from "react-icons/gi";

function Homeswiperblog({HomeBlogStyle}) {
    
    return (

        <>
        
            {/** Swiper Blog Section */}
            <div className={HomeBlogStyle.swiperBlogSection}>

                {/** Swiper Slider */}
                <div className={HomeBlogStyle.blogDiv}>

                    {/** Blog Image Div */}
                    <div className={HomeBlogStyle.blogImageDiv}>

                        <img src="../../../public/images/Blog Images/first_blog_image(1).png" alt="" />

                    </div>

                    {/** Blog Content Div */}
                    <div className={HomeBlogStyle.blogContentDiv}>

                        <h4> <GiSevenPointedStar /> Why SEO Still Drives the Most Reliable Long-Term Growth </h4>
                        <p>SEO brings steady customers without depending on ads. This blog covers simple SEO techniques that help any business appear higher on Google searches in their local market.</p>
                        <a href="#">Read More</a>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Homeswiperblog;