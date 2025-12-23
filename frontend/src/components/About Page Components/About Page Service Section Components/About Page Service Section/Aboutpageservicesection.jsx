import React, {useState} from 'react';
import AboutPageServiceTitleSection from '../About Page Service Title Section/Aboutpageservicetitlesection';
import { CgArrowsExpandUpRight } from "react-icons/cg";
import AboutPageServiceSectionListItem from '../About Page Service Section List Items/Aboutpageservicesectionlistitems';

const service_image_1 = '/images/About Page Service Section Images/about_page_services_image3.png';
const service_image_altText_1 = "Digital Marketing Services";

const service_image_2 = '/images/About Page Service Section Images/about_page_services_image4.png';
const service_image_altText_2 = "Specialised Digital Growth Services";

const service_image_3 = '/images/About Page Service Section Images/about_page_services_image5.png';
const service_image_altText_3 = "Web Development & Technology Services";

function Aboutpageservicesection({ AboutSectionStyle }) {

    /** First Mouse Over & Out anime */
    const [spanAnime, setSpanAnime] = useState(null); // first span text anime
    const [imageAnime, setImageAnime] = useState(null); // first image anime
    const [serviceNameAnime, setServiceNameAnime] = useState({

        color: "var(--third-color)"

    }); // first service name anime
    const [buttonAnime, setButtonAnime] = useState(null); // first service button anime
    const [svgAnime, setSvgAnime] = useState({

        fontSize: "100px"

    }); // first service button svg anime

    const [serviceTitleDivAnime, setServiceTitleDivAnime] = useState({

        width: "100%",

    }); // first service title anime
    
    /** First Mouse Over Anime Function */
    const handleStyleOnMouseOver = () => {

        // Animate Span Text
        setSpanAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            opacity: "1",
            color: "#ffffffff",
            fontSize: "100px",

        });

        // Image Anime
        setImageAnime({

            width: "30%",
            marginRight: "10px",
            transition: "all 0.8s ease",
            opacity: "1",
            objectFit: "cover",
            transform: "rotate(-10deg)",
            border: "3px solid #fff",

        });

        // Service Title Anime
        setServiceTitleDivAnime({

            width: "70%",
            transition: "all 0.8s ease"

        });

        // Service Name Anime
        setServiceNameAnime({

            fontSize: "60px",
            lineHeight: "60px",
            transition: "all 0.8s ease",
            marginLeft: "20px",
            color: "var(--secondary-color)",

        });

        // Button Anime
        setButtonAnime({

            transform: "rotate(45deg)",
            transition: "all 0.8s ease",
            boxShadow: "5px -15px 20px #ffffff inset",

        });

        // SVG Anime
        setSvgAnime({

            fontSize: "70px",
            transition: "all 0.8s ease"

        }); 

    }

    /** First Mouse Out Anime Function */
    const handleStyleOnMouseOut = () => {

        // Animate Span Text
        setSpanAnime({

            transform: "rotate(-90deg)",
            transition: 'all 0.8s ease',
            opacity: "0.5"

        });

        // Image Anime
        setImageAnime({

            width: "0%",
            border: "none",
            marginRight: "0px",
            opacity: "0",
            transition: "all 0.8s ease",
            transform: "rotate(0deg)",

        });
        
        // Service Title Anime
        setServiceTitleDivAnime({

            width: "100%",
            transition: "all 0.8s ease"

        })

        // Service Name Anime
        setServiceNameAnime({

            fontSize: "40px",
            lineHeight: "90px",
            transition: "all 0.8s ease",
            color: "var(--third-color)",

        });

        // Button Anime
        setButtonAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",

        });

        // SVG Anime
        setSvgAnime({

            fontSize: "100px",
            transition: "all 0.8s ease"

        });

        /** Second Mouse Out Anime */

        // Animate Span Text
        setSecondSpanAnime({

            transform: "rotate(-90deg)",
            opacity: "0.5",
            transition: "all 0.8s ease",
            color: "#292929",
            fontSize: "160px"

        });

    }

    /** --------------------------------------------------------- */

    /** Second Mouse Over & Out anime */
    const [secondSpanAnime, setSecondSpanAnime] = useState(null); // second span anime
    const [secondImageAnime, setSecondImageAnime] = useState(null); // second image anime
    const [secondServiceTitleDivAnime, setScondServiceTitleDivAnime] = useState(null); // second service div anime
    const [secondServiceNameAnime, setSecondServiceNameAnime] = useState(null); // second service name anime
    const [secondButtonAnime, setSecondButtonAnime] = useState(null); // second service button anime
    const [secondSvgAnime, setSecondSvgAnime] = useState({

        fontSize: "100px"

    }); // second service button SVG anime
    
    // Second Mouse Over Anime Function 
    function handleSecondStyleOnMouseOver() {
        
        // add anime on second span title
        setSecondSpanAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            fontSize: "100px",
            color: "#ffffffff",
            opacity: "1"

        });

        // add anime on second image
        setSecondImageAnime({

            width: "350px",
            marginRight: "10px",
            transition: "all 0.8s ease",
            opacity: "1",
            objectFit: "cover",
            transform: "rotate(-10deg)",
            border: "3px solid #fff",

        });

        // add anime on second service div
        setScondServiceTitleDivAnime({

            width: "70%",
            transition: "all 0.8s ease"

        });

        // add anime on second service title
        setSecondServiceNameAnime({

            fontSize: "60px",
            marginLeft: "20px",
            lineHeight: "60px",
            color: "var(--secondary-color)",
            transition: "all 0.8s ease"

        }); 

        // add anime on second sevice button
        setSecondButtonAnime({

            transform: "rotate(45deg)",
            transition: "all 0.8s ease",
            boxShadow: "5px -15px 20px #ffffffff inset"

        });

        // add anime on second service button SVG
        setSecondSvgAnime({

            fontSize: "70px",
            transition: "all 0.8s ease"

        });

    }

    // Second Mouse Out Anime Function
    function handleSecondStyleOnMouseOut() {
        
        // remove anime from second span text 
        setSecondSpanAnime({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",
            fontSize: "160px",
            color: "#292929",
            opacity: "0.5"

        });

        // remove anime from second image
        setSecondImageAnime({

            transform: "rotate(0deg)",
            width: "0px",
            transition: "all 0.8s ease",
            opacity: "0",
            marginRight: "0px"

        });

        // remove anime from second service div
        setScondServiceTitleDivAnime({

            width: "100%",
            transition: "all 0.8s ease"

        });

        // remove anime from second service title 
        setSecondServiceNameAnime({

            fontSize: "40px",
            lineHeight: "100px",
            marginLeft: "0px",
            transition: "all 0.8s ease",
            color: "var(--third-color)"

        });

        // remove anime from second service button
        setSecondButtonAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            boxShadow: "none",

        });

        // remove anime from second service button SVG
        setSecondSvgAnime({

            fontSize: "100px",
            transition: "all 0.8s ease"

        });

    }

    /** -------------------------------------------------------- */

    /** Third Mouse Over & Out anime */
    const [thirdSpanAnime, setThirdspanAnime] = useState(null); // third service span text 
    const [thirdImageAnime, setThirdImageAnime] = useState(null); // third service image 
    const [thirdServiceTitleDivAnime, setThirdServiceTitleDivAnime] = useState({
        
        width: "100%"

    }); // third service title div

    const [thirdServiceNameAnime, setThirdServiceNameAnime] = useState({
        
        fontSize: "40px"

    }); // third service title

    const [thirdButtonAnime, setThirdButtonAnime] = useState(null); // third service button 
    const [thirdSvgAnime, setThirdSvgAnime] = useState({

        fontSize: "100px"

    }); // third service button SVG 

    // Third Mouse Over Anime Function
    const handleThirdStyleOnMouseOver = () => {
        
        // add anime on the third service span text
        setThirdspanAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            opacity: "1",
            color: "#ffffffff",
            fontSize: "100px"

        });

        // add anime on the thrid service image
        setThirdImageAnime({

            transform: "rotate(-10deg)",
            transition: "all 0.8s ease",
            opacity: "1",
            width: "30%",
            marginRight: "10px",
            border: "3px solid #ffffffff"

        });

        // add anime on the thrid service title div
        setThirdServiceTitleDivAnime({

            width: "70%",
            transition: "all 0.8s ease"

        });

        // add anime on the thrid service title
        setThirdServiceNameAnime({

            color: "var(--secondary-color)",
            fontSize: "60px",
            lineHeight: "60px",
            transition: "all 0.8s ease",
            marginLeft: "20px"

        });

        // add anime on the third service button
        setThirdButtonAnime({

            transform: "rotate(45deg)",
            transition: "all 0.8s ease",
            boxShadow: "5px -15px 20px var(--secondary-color) inset"

        });

        // add anime on the third service button SVG
        setThirdSvgAnime({

            fontSize: "70px",
            transition: "all 0.8s ease",

        });

    }

    // Third Mouse Out Anime Function 
    const handleThirdStyleOnMouseOut = () => {

        // remove anime from third service span text
        setThirdspanAnime({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",
            opacity: "0.5",
            color: "#292929",
            fontSize: "160px"

        });

        // remove anime from third service image 
        setThirdImageAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            opacity: "0",
            width: "0%",
            marginRight: "0px"

        });

        // remove anime from the third service title div
        setThirdServiceTitleDivAnime({

            width: "100%",
            transition: "all 0.8s ease",

        });

        // remove anime from the third service title 
        setThirdServiceNameAnime({

            fontSize: "40px",
            color: "#292929",
            transition: "all 0.8s ease",
            marginLeft: "0px"

        });

        // remove anime from the third service button
        setThirdButtonAnime({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            boxShadow: "none"

        });

        // remove anime from the third service button SVG
        setThirdSvgAnime({

            fontSize: "100px",
            transition: "all 0.8s ease"

        });

    }

    
    return (

        <>
        
            {/** About Page Services Section */}
            <div className={AboutSectionStyle.aboutPageServiceSection}>

                {/** About Page Service Title Section */}
                <AboutPageServiceTitleSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** About Page Services Section */}
                <div className={AboutSectionStyle.aboutPageServices}>

                    {/** About Page Services Div */}
                    <div className={AboutSectionStyle.aboutPageServicesDiv}>

                        <ul>

                            {/** About Page Service Section First List Item */}
                            <AboutPageServiceSectionListItem
                            
                                handleStyleOnMouseOver={handleStyleOnMouseOver}
                                handleStyleOnMouseOut={handleStyleOnMouseOut}
                                spanAnime={spanAnime}
                                AboutSectionStyle={AboutSectionStyle}
                                imageAnime={imageAnime}
                                serviceNameAnime={serviceNameAnime}
                                svgAnime={svgAnime}
                                serviceSVGIcon={<CgArrowsExpandUpRight />}
                                serviceSpanNo="{01}"
                                serviceTitle="Digital Marketing Services"
                                serviceImage={service_image_1}
                                serviceImageAltText={service_image_altText_1}
                                buttonAnime={buttonAnime}
                                serviceTitleDivAnime={serviceTitleDivAnime}
                                
                            />

                            {/** About Page Service Section Second List Item */}
                            <AboutPageServiceSectionListItem
                            
                                AboutSectionStyle={AboutSectionStyle}
                                serviceSpanNo="{02}"
                                serviceTitle="Specialised Digital Growth Services"
                                serviceImage={service_image_2}
                                handleStyleOnMouseOver={handleSecondStyleOnMouseOver}
                                handleStyleOnMouseOut={handleSecondStyleOnMouseOut}
                                spanAnime={secondSpanAnime}
                                imageAnime={secondImageAnime}
                                serviceSVGIcon={<CgArrowsExpandUpRight />}
                                buttonAnime={secondButtonAnime}
                                svgAnime={secondSvgAnime}
                                serviceNameAnime={secondServiceNameAnime}
                                serviceImageAltText={service_image_altText_2}
                                serviceTitleDivAnime={secondServiceTitleDivAnime}
                                
                            />
                            
                            {/** About Page Service Section Third List Item */}
                            <AboutPageServiceSectionListItem
                            
                                AboutSectionStyle={AboutSectionStyle}
                                serviceSpanNo="{03}"
                                serviceTitle="Web Development & Technology Services"
                                serviceImage={service_image_3}
                                handleStyleOnMouseOver={handleThirdStyleOnMouseOver}
                                handleStyleOnMouseOut={handleThirdStyleOnMouseOut}
                                spanAnime={thirdSpanAnime}
                                imageAnime={thirdImageAnime}
                                serviceImageAltText={service_image_altText_3}
                                serviceSVGIcon={<CgArrowsExpandUpRight />}
                                buttonAnime={thirdButtonAnime}
                                svgAnime={thirdSvgAnime}
                                serviceNameAnime={thirdServiceNameAnime}
                                serviceTitleDivAnime={thirdServiceTitleDivAnime}
                                
                            />

                        </ul>

                    </div>

                </div>
                
            </div>
            
        </>

    );

}

export default Aboutpageservicesection;