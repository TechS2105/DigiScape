import React, {useState, useEffect} from 'react';
import TestimonialStyle from '../../../public/styles/testimonial files/testimonial.module.css';
import TestimonialTitle from '../Testimonial Component/Testimonialtitles';
import TestimonialPersonImageSection from '../Testimonial Component/Testimonialpersonimagecontainer';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { LuCircleArrowOutDownRight } from "react-icons/lu";
import { LuCircleArrowOutUpLeft } from "react-icons/lu";

let pImage = '/images/Testimonial Images/robot.png';
let patternImg = '/images/Testimonial Images/pattern2.png';

function Testimonial() {

    const [getTestimonialData, setGetTestimonialData] = useState([]);
    const [changeIconStatus, setChangeIconStatus] = useState(); // next arrow background color state
    const [nxtSVG, setNxtSVG] = useState(); // next arrow svg
    const [changePrevIconStatus, setChangePrevIconStatus] = useState(); // prev arrow background color state
    const [prevSVG, setPrevSVG] = useState(); // prev arrow svg

    /** Next Arrow Mouse Over Fun */
    const controllColourOnMouseOver = () => {

        setChangeIconStatus({

            backgroundColor: 'royalblue',
            transition: "all 0.8s ease"
            
        });

        setNxtSVG({

            fontSize: "50px",
            transition: "all 0.8s ease",
            transform: "rotate(-45deg)"

        });

        // Changing Prev Arrow Background Color
        setChangePrevIconStatus({

            backgroundColor: "#292929",
            transition: "all 0.8s ease"

        });

    }

    /** Next Arrow Mouse Out Fun */
    const controllColourOnMouseOut = () => {

        setChangeIconStatus({

            backgroundColor: "#292929",
            transition: "all 0.8s ease"

        });

        setNxtSVG({

            fontSize: "40px",
            transition: "all 0.8s ease",
            transform: "rotate(0deg)"
            
        });

        // Changing Prev Arrow Background Color
        setChangePrevIconStatus({

            backgroundColor: "royalblue",
            transition: "all 0.8s ease"

        });

    }

    /** Previous Arrow Mouse Over Fun */
    const controllPrevColourOnMouseOver = () => {

        setChangePrevIconStatus({

            backgroundColor: "#292929",
            transition: "all 0.8s ease"

        });

        setPrevSVG({

            fontSize: "50px",
            transform: "rotate(-45deg)",
            transition: "all 0.8s ease"

        });

        // Changing Next Arrow Background Color
        setChangeIconStatus({

            backgroundColor: "royalblue",
            transition: "all 0.8s ease",

        });

    }

    /** Previous Arrow Mouse Out Fun */
    const controllPrevColourOnMouseOut = () => {

        setChangePrevIconStatus({

            backgroundColor: "royalblue",
            transition: "all 0.8s ease"

        });

        setPrevSVG({

            fontSize: "40px",
            transition: "all 0.8s ease",
            transform: "rotate(0deg)"

        });

        // Changing Next Arrow Background Color
        setChangeIconStatus({

            backgroundColor: "#292929",
            transition: "all 0.8s ease"

        });

    }

    useEffect(() => {

        /** Create a testimonial content function */
        const testimonialFun = async () => {

            try {
                
                // fetch testimonial content
                const response = await fetch('https://digiscape-backend.onrender.com/api/testimonial/contents');
                // const response = await fetch('http://localhost:3000/api/testimonial/contents');

                console.log(response);
                
                if (!response.ok) {
                    
                    throw new Error(`HTTP! Server status is ${response.status}`);

                }

                let data = await response.json();
                setGetTestimonialData(data);


            } catch (error) {
                
                console.log(error);

            }

        }

        testimonialFun();

    }, []);

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

                        {/** Testimonial Review Swiper Section */}
                        <Swiper
                            
                            slidesPerView={1}
                            loop={true}
                            spaceBetween={20}
                            speed={2300}
                            navigation={{

                                nextEl: "#nxtEl",
                                prevEl: "#prevEl"

                            }}

                            modules={[Navigation]}
                            className={TestimonialStyle.testimonialReviewSwiperBox}
                        
                        >

                            {/** Testimonial Review Swiper Slider Section */}    
                            {getTestimonialData.map((content) => {

                                return (

                                    <SwiperSlide className={TestimonialStyle.testimonialSwiperSliderReviewBox}>

                                        {/** Testimonial Swiper Slider Inner section */}
                                        <div className={TestimonialStyle.testimonialSwiperSliderInnerReviewBox}>

                                            {/** Review Content Container */}
                                            <div className={TestimonialStyle.reviewContentContainer}>

                                                <p><BiSolidQuoteLeft />{content.reviewText}</p>

                                                {/** Owner Name Section */}
                                                <div className={TestimonialStyle.ownerNameDiv}>

                                                    <span>{content.reviewOwnerName}</span> - <span>{content.reviewOwnerDesignation}</span>
                                                    
                                                </div>

                                            </div>

                                            {/** Review Owner Image Container */}
                                            <div className={TestimonialStyle.reviewOwnerImageContainer}>

                                                {/** Owner Image Div */}
                                                <div className={TestimonialStyle.ownerImageDiv}>

                                                    <img src={content.image} alt={content.altText} />

                                                </div>

                                            </div>

                                        </div>

                                    </SwiperSlide>

                                );

                            })}
                           

                        </Swiper>

                        {/** Testimonial Review Swiper Navigation Section */}
                        <div className={TestimonialStyle.testimonialSwiperNavigation}>

                            {/** Testimonial Review Navigation Inner Div */}
                            <div className={TestimonialStyle.testimonialSwiperInnerNavigation}>

                                {/** Previous Arrow */}
                                <div className={TestimonialStyle.testimonialPreviousArrow} id="prevEl" onMouseOver={controllPrevColourOnMouseOver} onMouseOut={controllPrevColourOnMouseOut} style={changePrevIconStatus}>

                                    <LuCircleArrowOutUpLeft style={prevSVG} />

                                </div>

                                {/** Next Arrow */}
                                <div className={TestimonialStyle.testimonialNextArrow} id="nxtEl" onMouseOver={controllColourOnMouseOver} onMouseOut={controllColourOnMouseOut} style={changeIconStatus}>

                                    <LuCircleArrowOutDownRight style={nxtSVG} />
                                    
                                </div>

                            </div>

                        </div>

                    </div>

                    {/** Testimonial Robot Image */}
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