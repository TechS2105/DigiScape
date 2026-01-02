import React from 'react';
import SecondPillarServiceSectionImage from '../Service Page Second Pillar Service Section/Secondpillarservicesectionimage';
import SecondPillarServiceContentSection from '../Service Page Second Pillar Service Section/Secondpillarservicecontentsection';

const second_pillar_service_image = "/images/Service Page Images/pillar_service_image2.png";
const second_pillar_sevice_image_altText = "Specialised Digital Growth Services";

function Secondpillarservicesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Second Pillar Service Section */}
            <div className={ServicePageStyle.secondServicePillarSection}>

                {/** Second Pillar Service Image Section */}
                <div className={ServicePageStyle.secondServicePillarImageSection}>

                    <SecondPillarServiceSectionImage
                    
                        second_pillar_service_image={second_pillar_service_image}
                        second_pillar_sevice_image_altText={second_pillar_sevice_image_altText}
                        
                    />

                </div>

                {/** Second Pillar Service Content Section */}
                <div className={ServicePageStyle.secondServicePillarContentSection}>

                    {/** Second Pillar Service Inner Content Section */}
                    <SecondPillarServiceContentSection
                    
                        ServicePageStyle={ServicePageStyle}
                        
                    />

                </div>

            </div>

        </>

    );

}

export default Secondpillarservicesection;