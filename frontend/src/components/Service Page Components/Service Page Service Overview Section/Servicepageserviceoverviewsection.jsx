import React from 'react';
import { GiPolarStar } from "react-icons/gi";

function Servicepageserviceoverviewsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Service Overview Section */}
            <div className={ServicePageStyle.serviceOverviewSection}>

                {/** Service Overview Inner Section */}
                <div className={ServicePageStyle.serviceOverviewInnerSection}>

                    <span>What We Do<GiPolarStar /></span>
                    <h2>Three Core Service Pillars Supporting End to End Digital Growth</h2>
                    <p>Our service offerings are structured around three essential pillars that address visibility, growth acceleration, and digital infrastructure. This ensures every initiative contributes directly to business objectives, not isolated metrics.</p>

                </div>

            </div>
            
        </>

    );

}

export default Servicepageserviceoverviewsection;