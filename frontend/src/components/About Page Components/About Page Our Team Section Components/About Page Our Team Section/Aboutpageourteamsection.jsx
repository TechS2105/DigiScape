import React from 'react';
import AboutPageOurTeamTitleSection from '../About Page Our Team Title Section/Aboutpageourteamtitlesection';

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
                <div className={AboutSectionStyle.ourTeamProfileSection}>

                    {/** Inner Profile Section */}
                    <div className={AboutSectionStyle.ourTeamInnerProfileSection}>

                        {/** First Profile */}
                        <div className={AboutSectionStyle.ourTeamFirstProfileDiv}>

                            <img src="/images/About Page Our Team Images/team_member_1.png" alt="" />

                        </div>

                        {/** Second Profile */}
                        <div className={AboutSectionStyle.ourTeamFirstProfileDiv}>

                            <img src="/images/About Page Our Team Images/team_member_2.png" alt="" />

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Aboutpageourteamsection;