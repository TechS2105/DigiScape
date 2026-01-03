import React from 'react';
import ServicePageWhyChooseUsSectionTitle from '../Why Choose Us Content Section/Whychooseuscontentsectiontitle';

function Whychooseuscontenttitlesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Why Choose Us Contnet Section Title */}
            <div className={ServicePageStyle.keyStrengthTitleSection}>

                <ServicePageWhyChooseUsSectionTitle
                
                    whyChooseUsSectionTitle="Our Core Strengths:"
                    
                />

            </div>
            
        </>

    );

}

export default Whychooseuscontenttitlesection;