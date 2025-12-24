import React from 'react';
import AboutPageTitleSection from '../About Page Title Section/Aboutpagetitlesection';
import AboutBannerSection from '../About Page Banner Section/Aboutpagebannersection';
import AboutMarqueeSection from '../About Page Marquee Text Section/Aboutpagemarqueesection';
import AboutPageAboutSection from '../About Page About Content Section/Aboutpageaboutsection';
import AboutPageMissionVisionSection from '../About Page Mission & Vission Components/Aboutpagemissionvisionsection';
import AboutPageServiceSection from '../About Page Service Section Components/About Page Service Section/Aboutpageservicesection';
import AboutPageOurTeamSection from '../About Page Our Team Section Components/About Page Our Team Section/Aboutpageourteamsection';
import AboutPageFAQSection from '../About Page Our FAQ Section Component/About Page Our FAQ Section/Aboutpageourfaqcontentsection';

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

                {/** About Mission Vision */}
                <AboutPageMissionVisionSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** About Service Section */}
                <AboutPageServiceSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** About Our Team Section */}
                <AboutPageOurTeamSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** About FAQ Section */}
                <AboutPageFAQSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />


            </div>
            
        </>

    );

}

export default Aboutsection;