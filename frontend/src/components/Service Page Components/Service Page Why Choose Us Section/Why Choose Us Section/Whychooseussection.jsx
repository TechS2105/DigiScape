import React from 'react';
import ServicePageWhyChooseUsTitleSection from '../Why Choose Us Title Section/Whychooseustitlesection';
import ServicePageWhyChooseUsKeyStrengthContentSection from '../Why Choose Us Content Section/Whychooseuscontentsection';

function Whychooseussection({ServicePageStyle}) {

    return (

        <>
        
            {/** Why Choose Us Section */}
            <div className={ServicePageStyle.servicePageWhyChooseUsSection}>

                {/** Why Choose Us Title Section */}                
                <ServicePageWhyChooseUsTitleSection
                
                    ServicePageStyle={ServicePageStyle}
                    
                />

                {/** Why Choose Us Key Strengths Section */}
                <ServicePageWhyChooseUsKeyStrengthContentSection
                
                    ServicePageStyle={ServicePageStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Whychooseussection;