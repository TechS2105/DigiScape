import React from 'react';

function Firstpillarserviceimage({first_pillar_service_image, first_pillar_service_image_altText}) {
    
    return (

        <>
        
            {/** First Pillar Service Image */}
            <img src={first_pillar_service_image} alt={first_pillar_service_image_altText} />
            
        </>

    );

}

export default Firstpillarserviceimage;