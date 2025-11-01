import React, {useState, useEffect} from 'react';
import HomeBannerStyle from '../../../public/styles/home banner files/Homebanner.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import HomeBannerImage from '../Home Banner Component/Homebannerimages';
import HomeBannerContent from '../Home Banner Component/Homebannercontents';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Homebanner() {

    const [getBannerContent, setGetBannerContent] = useState([]);

    useEffect(() => {

        const bannerContent = async () => {

            try { 

                const res = await fetch('http://localhost:3000/api/home/banner');

                if(!res.ok){

                    throw new Error(`HTTP! Server response status is ${res.status}`);

                }

                let data = await res.json();
                setGetBannerContent(data);

            } catch (error) {
                
                console.log(error);

            }

        }

        bannerContent();

     }, []);
    
    return (

        <>
        
            {/** Home Banner Main Section */}
            <div className={HomeBannerStyle.bannerMainSection}>

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

                {/** Home Banner Navigation Section */}
                <div className={HomeBannerStyle.bannerNavigationSection}>

                    {/** Previous Arrow Main Div */}
                    <div className={HomeBannerStyle.prevBannerNavigation}>

                        {/** Previous Arrow */}
                        <div className={HomeBannerStyle.previousArrow} id="prev">

                            <IoIosArrowBack/>
                            
                        </div>

                    </div>

                    {/** Next Arrow Main Div */}                    
                    <div className={HomeBannerStyle.nxtBannerNavigation}>

                        {/** Next Arrow */}
                        <div className={HomeBannerStyle.nextArrow} id="next">

                            <IoIosArrowForward />

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Homebanner;