import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { GiSevenPointedStar } from "react-icons/gi";

function Homeswiperblog({HomeBlogStyle}) {
    
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
                <SwiperSlide className={HomeBlogStyle.blogDiv}>

                    {/** Blog Image Div */}
                    <div className={HomeBlogStyle.blogImageDiv}>

                        <img src="/images/Blog Images/first_blog_image.png" alt="" />

                    </div>

                    {/** Blog Content Div */}
                    <div className={HomeBlogStyle.blogContentDiv}>

                        <h4> <GiSevenPointedStar /> Why SEO Still Drives the Most Reliable Long-Term Growth </h4>
                        <p>SEO brings steady customers without depending on ads. This blog covers simple SEO techniques that help any business appear higher on Google searches in their local market.</p>
                        <a href="#">Read More</a>

                    </div>

                </SwiperSlide>

                 <SwiperSlide className={HomeBlogStyle.blogDiv}>

                    {/** Blog Image Div */}
                    <div className={HomeBlogStyle.blogImageDiv}>

                        <img src="/images/Blog Images/second_blog_image(1).png" alt="" />

                    </div>

                    {/** Blog Content Div */}
                    <div className={HomeBlogStyle.blogContentDiv}>

                        <h4> <GiSevenPointedStar /> Why SEO Still Drives the Most Reliable Long-Term Growth </h4>
                        <p>SEO brings steady customers without depending on ads. This blog covers simple SEO techniques that help any business appear higher on Google searches in their local market.</p>
                        <a href="#">Read More</a>

                    </div>

                </SwiperSlide>

                 <SwiperSlide className={HomeBlogStyle.blogDiv}>

                    {/** Blog Image Div */}
                    <div className={HomeBlogStyle.blogImageDiv}>

                        <img src="/images/Blog Images/third_blog_image.png" alt="" />

                    </div>

                    {/** Blog Content Div */}
                    <div className={HomeBlogStyle.blogContentDiv}>

                        <h4> <GiSevenPointedStar /> Why SEO Still Drives the Most Reliable Long-Term Growth </h4>
                        <p>SEO brings steady customers without depending on ads. This blog covers simple SEO techniques that help any business appear higher on Google searches in their local market.</p>
                        <a href="#">Read More</a>

                    </div>

                </SwiperSlide>

                <SwiperSlide className={HomeBlogStyle.blogDiv}>

                    {/** Blog Image Div */}
                    <div className={HomeBlogStyle.blogImageDiv}>

                        <img src="/images/Blog Images/fourth_blog_image.png" alt="" />

                    </div>

                    {/** Blog Content Div */}
                    <div className={HomeBlogStyle.blogContentDiv}>

                        <h4> <GiSevenPointedStar /> Why SEO Still Drives the Most Reliable Long-Term Growth </h4>
                        <p>SEO brings steady customers without depending on ads. This blog covers simple SEO techniques that help any business appear higher on Google searches in their local market.</p>
                        <a href="#">Read More</a>

                    </div>

                </SwiperSlide>

            </Swiper>
            
        </>

    );

}

export default Homeswiperblog;