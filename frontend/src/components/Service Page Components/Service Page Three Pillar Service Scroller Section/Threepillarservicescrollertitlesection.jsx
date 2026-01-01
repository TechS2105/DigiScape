import React from 'react';
import ThreePillarServiceScrollerTitleSectionTitle from '../Service Page Three Pillar Service Scroller Section/Threepillarservicescrollertitlesectiontitle';

function Threepillarservicescrollertitlesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Three Pillar Services Scroller Title Section */}
            <div className={ServicePageStyle.threeServicePillarTitleDiv}>

                <ThreePillarServiceScrollerTitleSectionTitle
                
                    pillarServiceTitle="Three Pillar Services"
                
                />

            </div>

            
        </>

    );

}

export default Threepillarservicescrollertitlesection;