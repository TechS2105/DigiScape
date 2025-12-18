import React from 'react';
import AboutPageMissionVisionTitle from '../About Page Mission & Vission Components/Aboutpagemissionvisiontitle';

function Aboutpagemissionvisiontitlesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** Mission & Vision Title Section */}
            <div className={AboutSectionStyle.missionVisionTitleSection}>

            
                {/** Mission & Vision Title */}
                <AboutPageMissionVisionTitle
                
                    missionVisionSpanTitle="Our Foundation"
                    missionVisionMainTitle="Mission, Vision & Values That Shape DigiScape"
                    
                />

            </div>

            
        </>

    );

}

export default Aboutpagemissionvisiontitlesection;