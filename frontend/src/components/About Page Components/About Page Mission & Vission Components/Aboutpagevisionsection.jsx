import React from 'react';
import { GiStairsGoal } from "react-icons/gi";
import AboutPageVisionTitleSection from '../About Page Mission & Vission Components/Aboutpagevisiontitlesection';
import AboutPageVisionListItemSection from '../About Page Mission & Vission Components/Aboutpagevisionlistitemssection';

function Aboutpagevisionsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Vision Section */}
            <div className={AboutSectionStyle.aboutVisionSection}>

                {/** About Page Vision Content Section */}
                <div className={AboutSectionStyle.aboutVisionContentSection}>

                    {/** Content Section */}
                    <AboutPageVisionTitleSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        
                    />

                    {/** Vision List Items */}
                    <AboutPageVisionListItemSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        
                    />

                </div>
                
                {/** About Page SVG Section */}
                <div className={AboutSectionStyle.aboutSectionSVGSection}>

                    <GiStairsGoal />

                </div>

            </div>
            
        </>

    );

}

export default Aboutpagevisionsection;