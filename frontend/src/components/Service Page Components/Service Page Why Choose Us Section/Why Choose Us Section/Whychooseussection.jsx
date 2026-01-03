import React from 'react';
import { PiStarFour } from "react-icons/pi";

function Whychooseussection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Why Choose Us Section */}
            <div className={ServicePageStyle.servicePageWhyChooseUsSection}>

                {/** Why Choose Us Title Section */}                
                <div className={ServicePageStyle.servicePageWhyChooseUsTitleSection}>

                    {/** Why Choose Us Inner Title Section */}
                    <div className={ServicePageStyle.servicePageWhyChooseUsInnerTitleSection}>

                        <span>Why DigiScape</span>
                        <h2>A Strategic Digital Partner Focused on Long Term Business Value</h2>
                        <p>DigiScape works as a strategic partner to organizations seeking clarity, performance, and sustainable digital growth. Our approach is grounded in business alignment, transparent collaboration, and disciplined execution, ensuring every digital initiative delivers measurable and scalable value.</p>

                    </div>

                </div>

                {/** Why Choose Us Key Strengths Section */}
                <div className={ServicePageStyle.whyChooseUsKeyStrengthSection}>

                    {/** Inner Key Strengths Section */}
                    <div className={ServicePageStyle.whyChooseUsInnerKeyStrengthSection}>

                        {/** Key Strength Title Section */}
                        <div className={ServicePageStyle.keyStrengthTitleSection}>

                            <h3> Our Core Strengths: </h3>

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Whychooseussection;