import React, {useState, useEffect} from 'react';
import HomePortfolioStyle from '../../../public/styles/home portfolio section files/homeportfoliosectionstyle.module.css';
import HomePortfolioHeader from '../../components/Home Portfolio Component/Homeportfolioheader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import HomePortfolioImage from '../Home Portfolio Component/Homeportfolioimage';
import HomePortfolioContent from '../Home Portfolio Component/Homeportfoliocontent';

function Homeportfolio() {

    const [getPortfolioContent, setGetPortfolioContent] = useState([]);

    useEffect(() => { 

        //Create a function 
        const portfolioContent = async () => {

            try { 

                const response = await fetch('https://digiscape.onrender.com/api/home/portfolio'); // fetch portfolio contents

                if (!response.ok) {
                    
                    throw new Error(`HTTP! Server response status is ${response.status}`);

                }

                let data = await response.json(); // store data into json format
                setGetPortfolioContent(data); // store data values into this state

            } catch (error) {
                
                console.log(error); //Error message

            }

        } 

        portfolioContent(); // Call the function 

    }, []);

    return (

        <>
        
            {/** Home Portoflio Div Main Container */}
            <div className={HomePortfolioStyle.homePortfolioMainContainer}>

                {/** Home Portfolio Div Header Container */}
                <div className={HomePortfolioStyle.homePortofolioHeaderContainer}>

                    <HomePortfolioHeader
                    
                        spanText="Our Creative Portfolio"
                        title="Showcasing Innovation, Design, and Digital Excellence"
                        para="Explore DigiScape’s portfolio featuring impactful web designs, branding, and digital marketing projects that drive engagement, enhance visibility, and deliver measurable results for businesses across industries."
                        
                    />

                </div>

                {/** Home Portfolio Work Carousel Section */}
                <div className={HomePortfolioStyle.portfolioCarousel}>

                    {/** Home Portfolio Carousel Swiper Div */}
                    <Swiper
                        
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={20}
                        speed={2000}
                        autoplay={{

                            delay: 2000,
                            pauseOnMouseEnter: true

                        }}

                        navigation={{

                            prevEl: "#prev",
                            nextEl: "#next"

                        }}

                        modules={[Autoplay, Navigation]}
                        className={HomePortfolioStyle.portfolioSwiperDiv}
                    
                    >

                        {/** Home Portfolio Carousel Swiper Slide Div */}
                        {getPortfolioContent.map((content) => {

                            return (

                                <SwiperSlide className={HomePortfolioStyle.portfolioSwiperSlideDiv}>

                                    {/** Home Portfolio Image Component  */}
                                    <HomePortfolioImage
                                    
                                        content={content}
                                        
                                    />
                                    {/** Home Portfolio Content Component */}
                                    <HomePortfolioContent
                                    
                                        content={content}
                                        
                                    />

                                </SwiperSlide>

                            );

                        })}

                    </Swiper>

                    {/** Swiper Navigator */}
                    <div className={HomePortfolioStyle.swiperNavigator}>

                        {/** Swiper Navigation Inner Div */}
                        <div className={HomePortfolioStyle.swiperInnderNavigationDiv}>

                            <span id="prev"> Previous </span>
                            <span id="next"> Next </span>

                        </div>

                    </div>


                </div>

            </div>
            
        </>

    );

}

export default Homeportfolio;