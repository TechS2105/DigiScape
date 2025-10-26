import React, {useState, useEffect} from 'react';
import HomeBannerContent from '../Home Banner Component/Homebannercontents';
import HomeBannerImage from '../Home Banner Component/Homebannerimages';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import Container from '../Container Component/Container';
import HomeBannerNavigation from '../Home Banner Component/Homebannernavigation';

function Homebanner({ HomeStyle }) {
    
    const [bannerItems, setBannerItems] = useState([]);

    useEffect(() => {

        const fetchBannerItems = async () => {
            
            try {
                
                const response = await fetch(`http://localhost:3000/api/home/banner`);

                if (!response) {
                    
                    throw new Error(`HTTP! Status is ${response.status}`);

                }

                let data = await response.json();
                setBannerItems(data);

            } catch (error) {
                
                console.error(error);

            }

        }

        fetchBannerItems();

    }, []);
    
    return (

        <>
        
            <Container>

                <Swiper
                    
                    slidesPerView={1}
                    loop={true} 
                    speed={2000}
                    autoplay={{

                        delay: 2000,
                        pauseOnMouseEnter: true,

                    }}

                    navigation={{

                        nextEl: "#next",
                        prevEl: "#prev"

                    }}

                    modules={[Autoplay, Navigation]}
                    className={HomeStyle.homeBanner}
                >

                    {bannerItems.map((item) => {

                        return (

                            <SwiperSlide className={HomeStyle.bannerSlider}>

                                {/** Banner Content Section */}
                                <div className={HomeStyle.bannerContent}>

                                    {/** Banner Content Inner div */}
                                    <div className={HomeStyle.contentDiv}>

                                        <HomeBannerContent
                                        
                                            bannerContent={item}
                                            
                                        />

                                    </div>

                                </div>

                                {/** Banner Image Section */}
                                <div className={HomeStyle.bannerImage}>

                                    <HomeBannerImage
                                    
                                        bannerImage={item}
                                        
                                    />

                                </div>

                            </SwiperSlide> 

                        );

                    })}
                

                </Swiper>

                <HomeBannerNavigation
                
                    HomeStyle={HomeStyle}
                    next="next"
                    previous="prev"
                    
                />
            
            </Container>
        
        </>

    );

}

export default Homebanner;