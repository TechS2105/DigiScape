import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,  Navigation } from 'swiper/modules';
import HomeBannerImage from '../Home Banner Component/Homebannerimages';
import HomeBannerContent from '../Home Banner Component/Homebannercontents';

function Homeswiper({HomeBannerStyle, getBannerContent}) {
    
    return (

        <>
        
              {/** Home Banner Swiper Section*/}
                <Swiper

                    slidesPerView={1}
                    loop={true}
                    spaceBetween={0}
                    speed={2000}
                    autoplay={{

                        delay: 2000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false

                    }}

                    navigation={{

                        prevEl: "#prev",
                        nextEl: "#next"

                    }}

                    modules={[Autoplay, Navigation]}
                    className={HomeBannerStyle.swiperBannerSection}>

                    {/** Home Banner Swiper Slide Section */}
                    
                    {getBannerContent.map((item, idx) => (

                        <SwiperSlide className={HomeBannerStyle.swiperBannerSlideSection} key={idx}>

                            {/** Home Banner Image */}
                            <HomeBannerImage
                            
                                itemImage={item}
                                
                            />

                            {/** Home Banner Swiper Slide Content */}                        
                            <div className={HomeBannerStyle.swiperSlideContent}>

                                {/** Home Banner Contents */}
                                <HomeBannerContent
                                
                                    itemContent={item}
                                    
                                />

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>
            
        </>

    );

}

export default Homeswiper;