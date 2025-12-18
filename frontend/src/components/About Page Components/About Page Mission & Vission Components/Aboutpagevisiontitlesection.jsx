import React from 'react';
import AboutPageVisionTitle from '../About Page Mission & Vission Components/Aboutpagevisiontitles';

function Aboutpagevisiontitlesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Vision Title Section */}
            <div className={AboutSectionStyle.aboutVisionInnerContentDiv}>

                {/** Titles */}
                <AboutPageVisionTitle
                
                    visionTitle="Our Vision"
                    visionPara="Our vision is to become a trusted digital growth partner for brands that value quality, integrity, and sustainable success. We aim to set a benchmark for how digital agencies operate by focusing on thoughtful strategy, consistent execution, and long-term impact rather than short term gains."
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpagevisiontitlesection;