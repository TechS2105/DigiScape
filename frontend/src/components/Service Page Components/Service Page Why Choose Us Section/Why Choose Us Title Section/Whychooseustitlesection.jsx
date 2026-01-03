import React from 'react';
import ServicePageWhyChooseUsTitle from '../Why Choose Us Title Section/Whychooseustitlesectiontitle';

function Whychooseustitlesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Why Choose Us Title Section */}
            <div className={ServicePageStyle.servicePageWhyChooseUsTitleSection}>

                {/** Why Choose Us Inner Title Section */}
                <div className={ServicePageStyle.servicePageWhyChooseUsInnerTitleSection}>

                    <ServicePageWhyChooseUsTitle
                    
                        whyChooseUsSpanTitle="Why DigiScape"
                        whyChooseUsTitle="A Strategic Digital Partner Focused on Long Term Business Value"
                        whyChooseUsPara="DigiScape works as a strategic partner to organizations seeking clarity, performance, and sustainable digital growth. Our approach is grounded in business alignment, transparent collaboration, and disciplined execution, ensuring every digital initiative delivers measurable and scalable value."
                        
                    />
                   
                </div>

            </div>
            
        </>

    );

}

export default Whychooseustitlesection;