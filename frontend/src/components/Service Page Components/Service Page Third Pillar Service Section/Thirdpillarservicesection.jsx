import React from 'react';
import ThirdPillarServiceImage from '../Service Page Third Pillar Service Section/Thirdpillarserviceimage';
import ThirdPillarServiceContentSection from '../Service Page Third Pillar Service Section/Thirdpillarservicecontentsection';

const third_pillar_service_image = '/images/Service Page Images/pillar_service_image3 (2).png';
const third_pillar_service_altText = "Web Development & Technology Services";

function Thirdpillarservicesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Third Pillar Service Section */}
            <div className={ServicePageStyle.thirdPillarServiceSection}>

                {/** Content Section */}
                <div className={ServicePageStyle.thirdPillarServiceContentSection}>

                    {/** Inner Content Section */}
                    <ThirdPillarServiceContentSection
                    
                        ServicePageStyle={ServicePageStyle}
                        
                    />

                </div>

                {/** Image Section */}
                <div className={ServicePageStyle.thirdPillarServiceImageSection}>

                    <ThirdPillarServiceImage
                    
                        third_pillar_service_image={third_pillar_service_image}
                        third_pillar_service_altText={third_pillar_service_altText}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Thirdpillarservicesection;