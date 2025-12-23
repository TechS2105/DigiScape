import React from 'react';
import AboutPageOurTeamTitleSection from '../About Page Our Team Title Section/Aboutpageourteamtitlesection';
import AboutPageOurTeamProfileSection from '../About Page Our Team Section/Aboutpageourteamprofilesection';

function Aboutpageourteamsection({AboutSectionStyle}) {

    
    return (

        <>
        
            {/** About Page Our Team Main Section */}
            <div className={AboutSectionStyle.aboutPageOurTeamMainSection}>

                {/** Our Team Title Section */}
                <AboutPageOurTeamTitleSection
                
                    AboutSectionStyle={AboutSectionStyle}
                
                />

                {/** Our Team Profile Section */}
                <AboutPageOurTeamProfileSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpageourteamsection;