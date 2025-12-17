import React from 'react';
import AboutPageTitleSection from '../About Page Title Section/Aboutpagetitlesection';
import AboutBannerSection from '../About Page Banner Section/Aboutpagebannersection';
import AboutMarqueeSection from '../About Page Marquee Text Section/Aboutpagemarqueesection';
import AboutPageAboutSection from '../About Page About Content Section/Aboutpageaboutsection';

function Aboutsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Section */}
            <div className={AboutSectionStyle.aboutSection}>

                {/** Title Section */}
                <AboutPageTitleSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** Banner Section */}
                <AboutBannerSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** Marquee Section */}
                <AboutMarqueeSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** About Text */}
                <AboutPageAboutSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />


            </div>
            
        </>

    );

}

export default Aboutsection;