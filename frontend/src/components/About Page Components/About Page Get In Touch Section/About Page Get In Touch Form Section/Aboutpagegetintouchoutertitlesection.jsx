import React from 'react';
import AboutPageGetInTouchOuterTitleSectionTitles from '../About Page Get In Touch Form Section/Aboutpagegetintouchoutertitle';

function Aboutpagegetintouchoutertitlesection({AboutSectionStyle, animateGetInTouchMainTitleSection, handleFormSection}) {
    
    return (

        <>
        
            {/** Outer Title Section */}
             <div className={AboutSectionStyle.aboutPageGetInTouchTitle} style={animateGetInTouchMainTitleSection}>

                <AboutPageGetInTouchOuterTitleSectionTitles
                
                    outerSpanTitle="Speak To Our Team"
                    outerMainTitle="Honest Conversations That Lead to Better Results"
                    outerButtonText="Let's Connect"
                    outerButtonOnClickFun={handleFormSection}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpagegetintouchoutertitlesection;