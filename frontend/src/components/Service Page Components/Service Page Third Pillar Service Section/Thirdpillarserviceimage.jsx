import React from 'react';

function Thirdpillarserviceimage({third_pillar_service_altText, third_pillar_service_image}) {
    
    return (

        <>
        
            {/** Pillar Service Image */}
            <img src={third_pillar_service_image} alt={third_pillar_service_altText} />
            
        </>

    );

}

export default Thirdpillarserviceimage;