import React from 'react';
import AboutPageOurTeamtitle from '../About Page Our Team Title Section/Aboutpageourteamtitle';

function Aboutpageourteamtitlesection({AboutSectionStyle}) {
    
    return (

        <>
            
            {/** About Page Our Team Title Section */}
            <div className={AboutSectionStyle.aboutPageOurTitleSection}>

                {/** Inner Title Div */}
                <div className={AboutSectionStyle.aboutPageOurTeamInnerTitleDiv}>

                    <AboutPageOurTeamtitle
                    
                        ourTeamSpanTitle="Team DigiScape"
                        ourTeamMainTitle="Our Team's Who Care About Your Success"
                    
                    />

                </div>
                    
            </div>

            
        </>

    );

}

export default Aboutpageourteamtitlesection;