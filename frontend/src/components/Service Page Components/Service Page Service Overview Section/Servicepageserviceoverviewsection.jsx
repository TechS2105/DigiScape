import React from 'react';
import { GiPolarStar } from "react-icons/gi";
import ServicePageServiceOverviewContents from '../Service Page Service Overview Section/Servicepageserviceoverviewcontents';

function Servicepageserviceoverviewsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Service Overview Section */}
            <div className={ServicePageStyle.serviceOverviewSection}>

                {/** Service Overview Inner Section */}
                <div className={ServicePageStyle.serviceOverviewInnerSection}>

                    <ServicePageServiceOverviewContents
                    
                        sOverviewSpanTitle="What We Do"
                        sOverviewSVG={<GiPolarStar />}
                        sOverviewHeading="Three Core Service Pillars Supporting End to End Digital Growth"
                        sOverviewPara="Our service offerings are structured around three essential pillars that address visibility, growth acceleration, and digital infrastructure. This ensures every initiative contributes directly to business objectives, not isolated metrics."
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Servicepageserviceoverviewsection;