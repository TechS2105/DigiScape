import React from 'react';
import OurApproachTitleSectionTitle from '../Service Page Our Approach Section/Ourpagetitlesectiontitle';

function Ourapproachtitlesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Our Approach Title Section */}
            <div className={ServicePageStyle.servicePageOurApproachTitleSection}>

                <OurApproachTitleSectionTitle
                
                    ourApproachSpanText="Our Approach"
                    ourApproachHeading="An Integrated Strategy Across Marketing, Growth, and Technology"
                    ourApproachPara="We take a coordinated approach to digital execution, bringing marketing, growth, and technology together under a single strategic framework. By eliminating silos, our teams work collaboratively to ensure every initiative is aligned, efficient, and focused on measurable business outcomes."
                    
                />

            </div>
            
        </>

    );

}

export default Ourapproachtitlesection;