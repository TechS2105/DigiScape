import React from 'react';
import ThreePillarServiceScrollerTitleSection from '../Service Page Three Pillar Service Scroller Section/Threepillarservicescrollertitlesection';
import ThreePillaerServiceScrollerContentSection from '../Service Page Three Pillar Service Scroller Section/Threepillarservicescrollercontentsection';

function Threepillarservicescrollersection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Three Service Pillar Scroller Section */}
            <div className={ServicePageStyle.threeServicePillarSection}>

                {/** Title Div */}
                <ThreePillarServiceScrollerTitleSection
                
                    ServicePageStyle={ServicePageStyle}
                    
                />

                {/** Pillars Div  */}
                <ThreePillaerServiceScrollerContentSection
                
                    ServicePageStyle={ServicePageStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Threepillarservicescrollersection;