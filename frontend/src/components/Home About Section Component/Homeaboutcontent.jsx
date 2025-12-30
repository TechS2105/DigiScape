import React from 'react';
import HomeAboutWhatWeOffers from '../Home About Section Component/Homeaboutwhatweoffers';
import { TbBulb } from "react-icons/tb";
import { BiRupee } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Homebannercontent({HomeAboutStyle}) {
    
    const navigate = useNavigate();

    const goToAbout = () => {

        navigate('/about');

    }

    return (

        <>
        
            {/** Home about inner content box */}
            <div className={HomeAboutStyle.aboutInnerContentDiv}>

                <span> About Our Company </span>
                <h2> The world Best Digital Solutions We Provide To You </h2>
                <p>DigiScape delivers the world’s best digital solutions, combining creativity, technology, and strategy to help businesses grow online. From digital marketing to web and AI solutions, we provide innovative, result-driven services that ensure lasting success and brand visibility.</p>

                {/** What we offers */}
                <div className={HomeAboutStyle.whatWeOfferSection}>

                    <HomeAboutWhatWeOffers
                    
                        HomeAboutStyle={HomeAboutStyle}
                        svgIcon={<TbBulb />}
                        title="Quality Work"
                        description="DigiScape ensures quality work through innovative digital marketing, creative design, and tailored strategies that drive measurable growth and success."
                        
                    />

                    <HomeAboutWhatWeOffers
                    
                        HomeAboutStyle={HomeAboutStyle}
                        svgIcon={<BiRupee />}
                        title="Affordable Price"
                        description="DigiScape offers premium digital marketing solutions at an affordable price, delivering creativity, innovation, and measurable results for every business."
                        
                    />

                </div>

                {/** About us button */}
                <div className={HomeAboutStyle.buttonBox}>

                    <button onClick={goToAbout}> <MdOutlineKeyboardArrowRight />Explore Our Company Overview </button>

                </div>

            </div>
            
        </>

    );

}

export default Homebannercontent;