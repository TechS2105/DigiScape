import React from 'react';

function Testimonialreviewswiperpersonimage({content, zoomingImage, TestimonialStyle}) {
    
    return (

        <>
        
            {/** Owner Image Div */}
            <div className={TestimonialStyle.ownerImageDiv}>
            
                <img src={content.image} alt={content.altText} style={zoomingImage} />
            
            </div>
            
        </>

    );

}

export default Testimonialreviewswiperpersonimage;