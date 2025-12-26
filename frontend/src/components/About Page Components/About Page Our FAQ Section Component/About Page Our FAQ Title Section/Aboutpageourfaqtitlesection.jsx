import React from 'react';
import AboutPageOurFAQTitle from '../About Page Our FAQ Title Section/Aboutpageourfaqtitle';

function Aboutpageourfaqtitlesection({AboutSectionStyle, faqSpanTitle, faqMainTitle}) {
    
    return (

        <>
        
            {/** FAQ Title Section */}
             <div className={AboutSectionStyle.aboutPageFAQTitleSection}>

                {/** FAQ Inner Title Div */}
                <div className={AboutSectionStyle.aboutPageFAQInnerTitle}>

                    <AboutPageOurFAQTitle
                    
                        faqSpanTitle={faqSpanTitle}
                        faqMainTitle={faqMainTitle}
                        
                    />

                </div>

            </div>

            
        </>

    );

}

export default Aboutpageourfaqtitlesection;