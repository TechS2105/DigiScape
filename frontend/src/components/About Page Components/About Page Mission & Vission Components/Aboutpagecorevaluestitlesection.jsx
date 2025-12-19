import React from 'react';
import AboutPageCoreValueTitle from '../About Page Mission & Vission Components/Aboutpagecorevaluetitle';

function Aboutpagecorevaluestitlesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Core Value Title Section */}  
            <div className={AboutSectionStyle.aboutPageCoreValueInnerContentDiv}>
                
                {/** Core Value Titles */}
                <AboutPageCoreValueTitle
                
                    coreValueMainTitle="Our Core Values"
                    coreValuePara="Our core values guide every decision we make and every solution we deliver. They shape how we work with clients, partners, and each other."
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpagecorevaluestitlesection;