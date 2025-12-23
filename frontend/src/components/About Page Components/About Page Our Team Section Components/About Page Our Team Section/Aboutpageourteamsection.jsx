import React, {useState} from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import AboutPageOurTeamTitleSection from '../About Page Our Team Title Section/Aboutpageourteamtitlesection';

function Aboutpageourteamsection({AboutSectionStyle}) {

    /** First Profile Mouse Over & Out Anime */
    const [firstProfileDetails, setFirstProfileDetails] = useState({

        height: "0%",
        opacity: "0",
        filter: "blur(50px)",

    });  // first profile details div

    const [firstProfileDetailsName, setFirstProfileDetailsName] = useState({

        transform: "translateX(-500px)",
        opacity: "0",

    }); // first profile details name

    const [firstProfileDetailsDesignation, setFirstProfileDetailsDesignation] = useState({

        transform: "translateX(-1000px)",
        opacity: "0",

    }); // first profile details designation

    const [firstProfileDetailsRole, setFirstProfileDetailsRole] = useState({

        transform: "translateX(-2000px)",
        opacity: "0",

    }); // first profile details role

    const [profileSocialIcons, setProfileSocialIcons] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(50px)"

    }); // first profile details social icons

    // First Profile Mouse Over Anime
    const handleFirstProfileAnimeOnMouseOver = () => {

        setFirstProfileDetails({

            height: "30%",
            transition: "all 2s ease",
            opacity: "1",
            filter: "blur(0px)"

        });

        setFirstProfileDetailsName({

            transform: "translateX(0px)",
            opacity: "1",
            transition: "all 0.8s ease 0.5s"

        });

        setFirstProfileDetailsDesignation({

            transform: "translateX(0px)",
            opacity: "1",
            transition: "all 0.8s ease 0.6s"

        });

        setFirstProfileDetailsRole({

            transform: "translateX(0px)",
            opacity: "1",
            transition: "all 0.8s ease 0.5s"

        });

        setProfileSocialIcons({

            transform: "translateX(0px)",
            transition: "all 1s ease",
            opacity: "1",
            filter: "blur(0px)",

        });

    }

    // First Profile Mouse Out Anime
    const handleFirstProfileAnimeOnMouseOut = () => {

        setFirstProfileDetails({

            height: "0%",
            transition: "all 2s ease 1s",
            opacity: "0",
            filter: "blur(50px)"

        });

        setFirstProfileDetailsName({

            transform: "translateX(-500px)",
            opacity: "0",
            transition: "all 0.8s ease 0.3s"

        });

        setFirstProfileDetailsDesignation({

            transform: "translateX(-1000px)",
            opacity: "0",
            transition: "all 0.8s ease 0.2s"

        });

        setFirstProfileDetailsRole({

            transform: "translateX(-2000px)",
            opacity: "0",
            transition: "all 0.8s ease 0.1s"

        });

        setProfileSocialIcons({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 1s ease"

        });

    }
    
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
                        <div className={AboutSectionStyle.ourTeamFirstProfileDiv} onMouseOver={handleFirstProfileAnimeOnMouseOver} onMouseOut={handleFirstProfileAnimeOnMouseOut}>

                            {/** Profile Image Div */}
                            <div className={AboutSectionStyle.profileImageDiv}>

                                <img src="/images/About Page Our Team Images/team_member_1.png" alt="" />

                            </div>

                            {/** Profile Details Div */}
                            <div className={AboutSectionStyle.profileDetailsDiv} style={firstProfileDetails}>

                                {/** Profile Inner Details Div */}
                                <div className={AboutSectionStyle.profileInnerDetailsDiv}>

                                    <h3 style={firstProfileDetailsName}> Riya Sen </h3>
                                    <span style={firstProfileDetailsDesignation}> Creative & Client Experience Manager </span>
                                    <p style={firstProfileDetailsRole}>Riya leads brand communication and creative execution at DigiScape, ensuring every project aligns with business goals and maintains high visual standards. She plays a key role in delivering consistent brand messaging and a seamless client experience across all digital channels.</p>

                                </div>

                            </div>

                            {/** Social Icon Div */}
                            <div className={AboutSectionStyle.profileSocialAttachementDiv} style={profileSocialIcons}>

                                <a href="#"><LuInstagram /></a>
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaXTwitter /></a>
                                <a href="#"><BiLogoGmail /></a>

                            </div>

                        </div>


                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Aboutpageourteamsection;