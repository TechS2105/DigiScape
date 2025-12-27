import React from 'react';
import AboutPageGetInTouchImageSection from '../About Page Get In Touch Image Section/Aboutpagegetintouchimagesection';
import AboutPageGetInTouchMainFormSection from '../About Page Get In Touch Form Section/Aboutpagegetintouchmainformsection';

const getInTouchImage = '/images/About Page Get In Touch Images/about_get_in_touch_image2.png';
const getInTouchImageAltText = "About page get in touch image";

function Aboutpagegetintouchmainsection({ AboutSectionStyle }) {
    
    return (

        <>
        
            {/** About Page Get In Touch Main Section */}
            <div className={AboutSectionStyle.aboutPageGetInTouchMainSection}>

                {/** About Page Get In Touch Image Section */}
                <AboutPageGetInTouchImageSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    getInTouchImage={getInTouchImage}
                    getInTouchImageAltText={getInTouchImageAltText}
                    
                />

                {/** About Page Get In Touch Form Section */}
                <AboutPageGetInTouchMainFormSection 
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpagegetintouchmainsection;