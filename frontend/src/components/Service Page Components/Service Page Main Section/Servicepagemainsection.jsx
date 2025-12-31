import React from 'react'; 
import ServicePageTitleSection from '../Service Page Title Section/Servicepagetitlesection';
import ServicePageServiceOverviewSection from '../Service Page Service Overview Section/Servicepageserviceoverviewsection';

function Servicepagemainsection({ ServicePageStyle }) {
    
    return (

        <>
        
            {/** Title Section */}
            <ServicePageTitleSection
            
                ServicePageStyle={ServicePageStyle}
                
            />

            {/** Service Overview Section */}
            <ServicePageServiceOverviewSection
            
                ServicePageStyle={ServicePageStyle}
                
            />

            
        </>

    );

}

export default Servicepagemainsection;