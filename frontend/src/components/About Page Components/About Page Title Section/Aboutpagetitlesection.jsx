import React from 'react';
import AboutPageTitle from '../About Page Title Section/Aboutpagetitle';

function Aboutpagetitlesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Title Section */}
            <div className={AboutSectionStyle.aboutTitleSection}>

                {/** Title Div */}
                <div className={AboutSectionStyle.aboutTitle}>

                    <AboutPageTitle

                        aboutSpanTitle="Our Identity"
                        aboutMainTitle="Building Meaningful Digital Growth"
                    
                    />

                </div>

            </div>
            
        </>

    );

}

export default Aboutpagetitlesection;