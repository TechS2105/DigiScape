import React, {useState, useEffect} from 'react';
import HomePortfolioStyle from '../../../public/styles/home portfolio section files/homeportfoliosectionstyle.module.css';
import HomePortfolioHeader from '../../components/Home Portfolio Component/Homeportfolioheader';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

function Homeportfolio() {

    const [getPortfolioContent, setGetPortfolioContent] = useState([]);

    useEffect(() => { 

        //Create a function 
        const portfolioContent = async () => {

            try { 

                const response = await fetch('http://localhost:3000/api/home/portfolio'); // fetch portfolio contents

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

                        modules={[Autoplay]}
                        className={HomePortfolioStyle.portfolioSwiperDiv}
                    
                    >

                        {/** Home Portfolio Carousel Swiper Slide Div */}
                        {getPortfolioContent.map((content) => {

                            return (

                                <SwiperSlide className={HomePortfolioStyle.portfolioSwiperSlideDiv}>

                                    <h3> {content.title} </h3>
                                    <img src={content.image} alt={content.altText} />
                                    <a href={content.url} target='_blank'> Live Demo </a>

                                </SwiperSlide>

                            );

                        })}

                    </Swiper>

                </div>

            </div>
            
        </>

    );

}

export default Homeportfolio;