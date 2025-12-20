import React, {useState} from 'react';
import AboutPageServiceTitleSection from '../About Page Service Title Section/Aboutpageservicetitlesection';
import { CgArrowsExpandUpRight } from "react-icons/cg";
import AboutPageServiceSectionListItem from '../About Page Service Section List Items/Aboutpageservicesectionlistitems';

const service_image_1 = '../../../../../public/images/About Page Service Section Images/about_page_services_image3.png';
const service_image_altText_1 = "Digital Marketing Services";

const service_image_2 = '../../../../../public/images/About Page Service Section Images/about_page_services_image4.png';
const service_image_altText_2 = "Specialised Digital Growth Services";

const service_image_3 = '../../../../../public/images/About Page Service Section Images/about_page_services_image5.png';
const service_image_altText_3 = "Web Development & Technology Services";

function Aboutpageservicesection({ AboutSectionStyle }) {

    const [spanAnime, setSpanAnime] = useState(null); // span text anime
    const [imageAnime, setImageAnime] = useState(null); // image anime
    const [serviceNameAnime, setServiceNameAnime] = useState({

        color: "var(--third-color)"

    }); // service name anime
    const [buttonAnime, setButtonAnime] = useState(null); // button anime
    const [svgAnime, setSvgAnime] = useState({

        fontSize: "100px"

    }); // svg anime

    const [serviceTitleDivAnime, setServiceTitleDivAnime] = useState({

        width: "100%",
        backgroundColor: "red"

    })
    
    /** Mouse Over Anime */
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

            width: "350px",
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

        })

        // Service Name Anime
        setServiceNameAnime({

            fontSize: "70px",
            lineHeight: "70px",
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

        })

    }

    /** Mouse Out Anime */
    const handleStyleOnMouseOut = () => {

        // Animate Span Text
        setSpanAnime({

            transform: "rotate(-90deg)",
            transition: 'all 0.8s ease',
            opacity: "0.5"

        });

        // Image Anime
        setImageAnime({

            width: "0px",
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

            fontSize: "100px",
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
                                handleStyleOnMouseOver={handleStyleOnMouseOver}
                                handleStyleOnMouseOut={handleStyleOnMouseOut}
                                spanAnime={spanAnime}
                                imageAnime={imageAnime}
                                serviceSVGIcon={<CgArrowsExpandUpRight />}
                                buttonAnime={buttonAnime}
                                svgAnime={svgAnime}
                                serviceNameAnime={serviceNameAnime}
                                serviceImageAltText={service_image_altText_2}
                                serviceTitleDivAnime={serviceTitleDivAnime}
                                
                            />
                            
                            {/** About Page Service Section Third List Item */}
                            <AboutPageServiceSectionListItem
                            
                                AboutSectionStyle={AboutSectionStyle}
                                serviceSpanNo="{03}"
                                serviceTitle="Web Development & Technology Services"
                                serviceImage={service_image_3}
                                handleStyleOnMouseOver={handleStyleOnMouseOver}
                                handleStyleOnMouseOut={handleStyleOnMouseOut}
                                spanAnime={spanAnime}
                                imageAnime={imageAnime}
                                serviceSVGIcon={<CgArrowsExpandUpRight />}
                                buttonAnime={buttonAnime}
                                svgAnime={svgAnime}
                                serviceNameAnime={serviceNameAnime}
                                serviceImageAltText={service_image_altText_3}
                                serviceTitleDivAnime={serviceTitleDivAnime}
                                
                            />

                        </ul>

                    </div>

                </div>
                
            </div>
            
        </>

    );

}

export default Aboutpageservicesection;