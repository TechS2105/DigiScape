import React from 'react';
import OurApproachTitleSection from '../Service Page Our Approach Section/Ourapproachtitlesection';
import OurApproachCardBoxeSection from '../Service Page Our Approach Section/Ourapproachcardboxesection';

function Ourapproachsection({ServicePageStyle}) {

    return (

        <>
        
            {/** Our Approach Section */}
            <div className={ServicePageStyle.servicePageOurApproachSection}>

                {/** Our Approach Title Section */}
                <OurApproachTitleSection
                
                    ServicePageStyle={ServicePageStyle}
                    
                />

                {/** Our Approach Card Boxes Section */}
                <OurApproachCardBoxeSection
                
                    ServicePageStyle={ServicePageStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Ourapproachsection;