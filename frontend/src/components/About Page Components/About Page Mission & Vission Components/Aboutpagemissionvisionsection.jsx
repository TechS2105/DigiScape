import React from 'react';
import AboutPageMissionVisionTitleSection from '../About Page Mission & Vission Components/Aboutpagemissionvisiontitlesection';
import AboutPageMissionSection from '../About Page Mission & Vission Components/Aboutpagemissionsection';
import AboutPageVisionSection from '../About Page Mission & Vission Components/Aboutpagevisionsection';
import AboutPageCoreValueSection from '../About Page Mission & Vission Components/Aboutpagecorevaluesection';

function Aboutpagemissionvisionsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** Mission & Vision Section */}
            <div className={AboutSectionStyle.missionVisionSection}>

                {/** Mission & Vision Title Div */}
                <div className={AboutSectionStyle.missionVisionTitleDiv}>

                    {/** Mission & Vision Title Section */}
                    <AboutPageMissionVisionTitleSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        
                    />

                </div>
                
                {/** Mission & Vision Main Div */}
                <div className={AboutSectionStyle.missionVisionMainDiv}>

                    {/** Our Mission Section */}
                    <AboutPageMissionSection
                                    
                        AboutSectionStyle={AboutSectionStyle}
                                        
                    />

                    {/** Our Vision Section */}
                    <AboutPageVisionSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        
                    />

                    {/** Our Core Values Section */}
                    <AboutPageCoreValueSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        
                    />
                    
                </div>

            </div>
            
        </>

    );

}

export default Aboutpagemissionvisionsection;