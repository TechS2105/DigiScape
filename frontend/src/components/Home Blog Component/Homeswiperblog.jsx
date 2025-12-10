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

                        {/** Blog Content Title Div */}
                        <div className={HomeBlogStyle.blogContentTitleDiv}>

                            {/** Blog Content SVG Div */}
                            <div className={HomeBlogStyle.blogContentSVGDiv}>

                                <GiSevenPointedStar />

                            </div>

                            {/** Blog Title */}
                            <div className={HomeBlogStyle.blogContentTitle}>

                                <h4> How Local Businesses Grow Faster with Practical Digital Marketing </h4>

                            </div>

                        </div>
                        <p>Local businesses often struggle to reach consistent customers. This blog explains how simple digital marketing steps help small brands improve visibility, build trust, and convert more people without huge budgets.</p>
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

                        {/** Blog Content Title Div */}
                        <div className={HomeBlogStyle.blogContentTitleDiv}>

                            {/** Blog Content SVG Div */}
                            <div className={HomeBlogStyle.blogContentSVGDiv}>

                                <GiSevenPointedStar />

                            </div>

                            {/** Blog Title */}
                            <div className={HomeBlogStyle.blogContentTitle}>

                                <h4> What Makes a Website Convert Visitors Into Customers </h4>

                            </div>

                        </div>
                        <p>A conversion-focused website helps customers understand your service quickly and trust your brand enough to take action. This blog explains how small design improvements create big business results.</p>
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

                        {/** Blog Content Title Div */}
                        <div className={HomeBlogStyle.blogContentTitleDiv}>

                            {/** Blog Content SVG Div */}
                            <div className={HomeBlogStyle.blogContentSVGDiv}>

                                <GiSevenPointedStar />

                            </div>

                            {/** Blog Title */}
                            <div className={HomeBlogStyle.blogContentTitle}>

                                <h4> Why SEO Still Drives the Most Reliable Long-Term Growth </h4>

                            </div>

                        </div>
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

                        {/** Blog Content Title Div */}
                        <div className={HomeBlogStyle.blogContentTitleDiv}>

                            {/** Blog Content SVG Div */}
                            <div className={HomeBlogStyle.blogContentSVGDiv}>

                                <GiSevenPointedStar />

                            </div>

                            {/** Blog Title */}
                            <div className={HomeBlogStyle.blogContentTitle}>

                                <h4> Social Media Strategies That Build Real Engagement </h4>

                            </div>

                        </div>
                        <p>Social media works best when brands communicate authentically. This blog shares practical ways to grow with real content, meaningful interactions, and consistent posting.</p>
                        <a href="#">Read More</a>

                    </div>

                </SwiperSlide>

                <SwiperSlide className={HomeBlogStyle.blogDiv}>

                    {/** Blog Image Div */}
                    <div className={HomeBlogStyle.blogImageDiv}>

                        <img src="/images/Blog Images/fifth_blog_image.png" alt="" />

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

                                <h4> How Paid Ads Help You Get Customers Without Wasting Budget </h4>

                            </div>

                        </div>
                        <p>Paid ads can deliver quick results when used correctly. This blog explains how to plan campaigns that generate leads and avoid unnecessary spending.</p>
                        <a href="#">Read More</a>

                    </div>

                </SwiperSlide>

            </Swiper>
            
        </>

    );

}

export default Homeswiperblog;