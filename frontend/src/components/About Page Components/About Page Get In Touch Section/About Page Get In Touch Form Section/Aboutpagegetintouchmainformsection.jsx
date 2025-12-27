import React, { useState } from 'react';
import AboutPageGetInTouchOuterTitleSection from '../About Page Get In Touch Form Section/Aboutpagegetintouchoutertitlesection';
import AboutPageGetInTouchInnerFormSection from '../About Page Get In Touch Form Section/Aboutpagegetintouchinnerformsection';

function Aboutpagegetintouchmainformsection({ AboutSectionStyle }) {
    
    /** Inner Form Section */
    const [innerFormSection, setInnerFormSection] = useState({
    
        transform: "translateX(-700px) skewX(90deg)",
        opacity: "0",
        filter: "blur(20px)",
    
    });
    
    /** Outer Form Title Section */
    const [animateGetInTouchMainTitleSection, setAnimateGetInTouchMainTitleSection] = useState({
    
        transform: "translateX(0px) skewX(0deg)",
        opacity: "1",
        filter: "blur(0px)"
    
    });
        
    /** Handle All Form Anime */
    function handleFormSection() {
    
        // Inner Form Section
        setInnerFormSection({
    
            transform: "translateX(0px) skewX(0deg)",
            transition: "all 0.8s ease",
            opacity: "1",
            filter: "blur(0px)"
    
        });
    
        // Outer Form Title Section
        setAnimateGetInTouchMainTitleSection({
    
            transform: "translateX(1000px) skewX(50deg)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease"
    
        });
    
    }
    
    return (

        <>
        
            {/** Get In Touch Main Form Section */}
            <div className={AboutSectionStyle.aboutPageGetInTouchFormSection}>

                {/** About Page Get In Touch Inner Form Section */}
                <div className={AboutSectionStyle.aboutPageGetIntouchInnerFormSection}>

                    {/** About Page Get In Touch Title Section */}
                    <AboutPageGetInTouchOuterTitleSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        animateGetInTouchMainTitleSection={animateGetInTouchMainTitleSection}
                        handleFormSection={handleFormSection}
                        
                    />

                    {/** About Page Get In Touch Form Section */}
                    <AboutPageGetInTouchInnerFormSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        innerFormSection={innerFormSection}
                        
                    />

                </div>

            </div>
             
        </>

    );

}

export default Aboutpagegetintouchmainformsection;