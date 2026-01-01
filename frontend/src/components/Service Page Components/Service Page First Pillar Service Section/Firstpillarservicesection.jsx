import React from 'react';
import FirstPillarServiceContentSection from '../Service Page First Pillar Service Section/Firstpillarservicecontentsection';
import FirstPillarServiceImage from '../Service Page First Pillar Service Section/Firstpillarserviceimage';

const first_pillar_service_image = "/images/Service Page Images/pillar_service_image1.png";
const first_pillar_service_image_altText = "Digital Marketing Services"

function Firstpillarservicesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** First Pillar Service Section */}
            <div className={ServicePageStyle.firstPillarServiceSection}>

                {/** Pillar Service Content Div */}
                <div className={ServicePageStyle.pillarServiceContentDiv}>

                    {/** Pillar Service Inner Content Div */}
                    <FirstPillarServiceContentSection
                    
                        ServicePageStyle={ServicePageStyle}
                        
                    />

                </div>

                {/** Pillar Service Image Div */}
                <div className={ServicePageStyle.pillarServiceImageDiv}>

                    <FirstPillarServiceImage
                    
                        first_pillar_service_image={first_pillar_service_image}
                        first_pillar_service_image_altText={first_pillar_service_image_altText}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Firstpillarservicesection;