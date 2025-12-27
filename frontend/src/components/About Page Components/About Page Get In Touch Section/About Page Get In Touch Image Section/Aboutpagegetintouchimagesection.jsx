import React from 'react';
import AboutPageGetInTouchImage from '../About Page Get In Touch Image Section/Aboutpagegetintouchimage';

function Aboutpagegetintouchimagesection({AboutSectionStyle, getInTouchImage, getInTouchImageAltText}) {
    
    return (

        <>
        
            {/** Image Section */}
            <div className={AboutSectionStyle.aboutPageGetInTouchImageSection}>

                <AboutPageGetInTouchImage
                
                    getInTouchImage={getInTouchImage}
                    getInTouchImageAltText={getInTouchImageAltText}
                    
                />

            </div>

            
        </>

    );

}

export default Aboutpagegetintouchimagesection;