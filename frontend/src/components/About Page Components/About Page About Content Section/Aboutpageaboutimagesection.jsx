import React from 'react';
import AboutPageAboutImage from '../About Page About Content Section/Aboutpageaboutimage';

const aboutPageAboutImage = '../../../../public/images/About Page Images/about_page_image_1.png';
const altText = "About page image";

function Aboutpageaboutimagesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page About Image Section */}
            <div className={AboutSectionStyle.aboutPageAboutImageSection}>

                <AboutPageAboutImage
                
                    aboutPageAboutImage={aboutPageAboutImage}
                    altText={altText}
                    
                />
                
            </div>
            
        </>

    );

}

export default Aboutpageaboutimagesection;