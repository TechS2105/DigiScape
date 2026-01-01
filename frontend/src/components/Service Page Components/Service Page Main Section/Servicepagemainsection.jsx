import React from 'react'; 
import ServicePageTitleSection from '../Service Page Title Section/Servicepagetitlesection';
import ServicePageServiceOverviewSection from '../Service Page Service Overview Section/Servicepageserviceoverviewsection';
import ServicePageThreePillarServiceScrollerSection from '../Service Page Three Pillar Service Scroller Section/Threepillarservicescrollersection';
import ServicePageFirstPillarServiceSection from '../Service Page First Pillar Service Section/Firstpillarservicesection';
import ServicePageSecondPillaerServiceSection from '../Service Page Second Pillar Service Section/Secondpillarservicesection';

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

            {/** Three Pillar Services Scroller */}
            <ServicePageThreePillarServiceScrollerSection
            
                ServicePageStyle={ServicePageStyle}
                
            />

            {/** First Pillar Service Section */}
            <ServicePageFirstPillarServiceSection 
            
                ServicePageStyle={ServicePageStyle}

            />

            {/** Second Pillar Service Section */}
            <ServicePageSecondPillaerServiceSection
            
                ServicePageStyle={ServicePageStyle}
            
            />
            
        </>

    );

}

export default Servicepagemainsection;