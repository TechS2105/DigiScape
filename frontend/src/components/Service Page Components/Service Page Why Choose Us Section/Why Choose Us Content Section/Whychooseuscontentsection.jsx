import React from 'react';
import ServicePageWhyChooseUsKeyStrengthContent from '../Why Choose Us Content Section/Whychooseuscontent';
import ServicePageWhyChooseUsKeyStrengthContentTitleSection from '../Why Choose Us Content Section/Whychooseuscontenttitlesection';

function Whychooseuscontentsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Why Choose Us Contnet Section */}
            <div className={ServicePageStyle.whyChooseUsKeyStrengthSection}>

                {/** Inner Key Strengths Section */}
                <div className={ServicePageStyle.whyChooseUsInnerKeyStrengthSection}>

                    {/** Key Strength Title Section */}
                    <ServicePageWhyChooseUsKeyStrengthContentTitleSection
                    
                        ServicePageStyle={ServicePageStyle}
                        
                    />

                    {/** Key Strength Core Content Div */}
                    <ServicePageWhyChooseUsKeyStrengthContent
                    
                        ServicePageStyle={ServicePageStyle}
                    
                    />

                </div>

            </div>

            
        </>

    );

}

export default Whychooseuscontentsection;