import React from 'react';
import { SiSitecore } from "react-icons/si";

function Aboutpagecorevaluesection({AboutSectionStyle}) {
    
    return (

        <>

            {/** About Page Core Value Section */}
            <div className={AboutSectionStyle.aboutPageCoreValueSection}>

                {/** About Page Core Value Section SVG Icon Div */}
                <div className={AboutSectionStyle.aboutPageCoreValueSVGIconDiv}>

                    <SiSitecore />

                </div>

                {/** About Page Core Value Section Content Div */}
                <div className={AboutSectionStyle.aboutPageCoreValueContentSection}>

                    {/** About Page Core Value Section Inner Content Div */}
                    <div className={AboutSectionStyle.aboutPageCoreValueInnerContentDiv}>

                        <h4> Our Core Values </h4>
                        <p>Our core values guide every decision we make and every solution we deliver. They shape how we work with clients, partners, and each other.</p>

                    </div>

                </div>

            </div>
        
        </>

    );

}

export default Aboutpagecorevaluesection;