import React from 'react';
import AboutPageMarqueeTextSection from '../About Page Marquee Text Section/Aboutpagemarqueetextsection';

function Aboutpagemarqueesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** Marquee Section */}
            <div className={AboutSectionStyle.aboutMarqueeSection}>

                {/** Marquee Text */}
                <AboutPageMarqueeTextSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpagemarqueesection;