import React from 'react';
import ThreePillarServiceScrollerContentSectionContent from '../Service Page Three Pillar Service Scroller Section/Threepillarservicescrollercontentsectioncontent';

function Threepillarservicesscrollercontentsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Pillar Services Scroller Content Section */}
            <div className={ServicePageStyle.threeServicePillarDiv}>

                {/** First Scroller */}
                <ThreePillarServiceScrollerContentSectionContent
                
                    firstService="Digital Marketing Services"
                    secondService="Specialised Digital Growth Services"
                    thirdService="Web Development & Technology Services"
                    
                    
                />
                
                {/** Second Scroller */}
                <ThreePillarServiceScrollerContentSectionContent
                
                    firstService="Digital Marketing Services"
                    secondService="Specialised Digital Growth Services"
                    thirdService="Web Development & Technology Services"
                    
                />

                 {/** Third Scroller */}
                <ThreePillarServiceScrollerContentSectionContent
                
                    firstService="Digital Marketing Services"
                    secondService="Specialised Digital Growth Services"
                    thirdService="Web Development & Technology Services"
                    
                />

                 {/** Fourth Scroller */}
                <ThreePillarServiceScrollerContentSectionContent
                
                    firstService="Digital Marketing Services"
                    secondService="Specialised Digital Growth Services"
                    thirdService="Web Development & Technology Services"
                    
                />


            </div>

            
        </>

    );

}

export default Threepillarservicesscrollercontentsection;