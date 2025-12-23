import React from 'react';

function Aboutpageourteamprofile({AboutSectionStyle, handleProfileAnimeOnMouseOver, handleProfileAnimeOnMouseOut, profileDetailsDiv, profileDetailsDesignation, profileDetailsName, profileDetailsRole, profileSocialIcons, profileAltText, profileImage, profileName, profileDesignation, profileRole, firstSVGIcon, secondSVGIcon, thirdSVGIcon, fourthSVGIcon}) {
    
    return (

        <>
        
            {/** Team Profile */}
            <div className={AboutSectionStyle.ourTeamFirstProfileDiv} onMouseOver={handleProfileAnimeOnMouseOver} onMouseOut={handleProfileAnimeOnMouseOut}>
                        
                {/** Profile Image Div */}
                <div className={AboutSectionStyle.profileImageDiv}>
                        
                    <img src={profileImage} alt={profileAltText} />
                        
                </div>
                        
                {/** Profile Details Div */}
                <div className={AboutSectionStyle.profileDetailsDiv} style={profileDetailsDiv}>
                        
                    {/** Profile Inner Details Div */}
                    <div className={AboutSectionStyle.profileInnerDetailsDiv}>
                        
                        <h3 style={profileDetailsName}> {profileName} </h3>
                        <span style={profileDetailsDesignation}> {profileDesignation} </span>
                        <p style={profileDetailsRole}>{profileRole}</p>
                        
                    </div>
                        
                </div>
                        
                {/** Social Icon Div */}
                <div className={AboutSectionStyle.profileSocialAttachementDiv} style={profileSocialIcons}>
                        
                    <a href="#">{firstSVGIcon}</a>
                    <a href="#">{secondSVGIcon}</a>
                    <a href="#">{thirdSVGIcon}</a>
                    <a href="#">{fourthSVGIcon}</a>
                        
                </div>
                        
            </div>
            
        </>

    );

}

export default Aboutpageourteamprofile;