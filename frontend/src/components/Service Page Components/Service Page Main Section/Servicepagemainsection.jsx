import React from 'react'; 
import ServicePageTitleSection from '../Service Page Title Section/Servicepagetitlesection';
import ServicePageServiceOverviewSection from '../Service Page Service Overview Section/Servicepageserviceoverviewsection';
import ServicePageThreePillarServiceScrollerSection from '../Service Page Three Pillar Service Scroller Section/Threepillarservicescrollersection';
import ServicePageFirstPillarServiceSection from '../Service Page First Pillar Service Section/Firstpillarservicesection';
import ServicePageSecondPillaerServiceSection from '../Service Page Second Pillar Service Section/Secondpillarservicesection';
import ServicePageThirdPillarServiceSection from '../Service Page Third Pillar Service Section/Thirdpillarservicesection';
import OurApproachSection from '../Service Page Our Approach Section/Ourapproachsection';

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

            {/** Third Pillar Service Section */}
            <ServicePageThirdPillarServiceSection
            
                ServicePageStyle={ServicePageStyle}
                
            />

            {/** Our Approach Section */}
            <OurApproachSection
            
                ServicePageStyle={ServicePageStyle}
                
            />
            
        </>

    );

}

export default Servicepagemainsection;