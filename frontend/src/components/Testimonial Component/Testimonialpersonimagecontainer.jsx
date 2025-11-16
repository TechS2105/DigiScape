import React from 'react';
import TestimonialPersonImage from '../Testimonial Component/Testimonialpersonimage';

function Testimonialpersonimagesection({TestimonialStyle, image, altText, patternImg, pAltText}) {
    
    return (

        <>
        
            <div className={TestimonialStyle.testimonialPersonImage}>
            
                <TestimonialPersonImage
                
                    image={image} // robot image
                    altText={altText} // robot alt text
                    patternImg={patternImg} // background pattern image
                    pAltText={pAltText} // background pattern image alt text
                    
                />
            
            </div>
            
        </>

    );

}

export default Testimonialpersonimagesection;