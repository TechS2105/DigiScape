import React, { useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import AboutPageOurTeamProfile from '../About Page Our Team Section/Aboutpageourteamprofile';

const profile_image_1 = '/images/About Page Our Team Images/team_member_1.png';
const profile_image_2 = '/images/About Page Our Team Images/team_member_2.png';

function Aboutpageourteamprofilesection({ AboutSectionStyle }) {
    
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
        opacity: "0"
    
    }); // first profile details designation
    
    const [firstProfileDetailsRole, setFirstProfileDetailsRole] = useState({
    
        transform: "translateX(-2000px)",
        opacity: "0",
    
    }); // first profile details role
    
    const [firstProfileSocialIcon, setFirstProfileSocialIcon] = useState({
    
        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(50px)",
        position: "absolute",
        top: "0",
        left: "0"
    
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

        setFirstProfileSocialIcon({
    
            transform: "translateX(0px)",
            transition: "all 1s ease",
            opacity: "1",
            filter: "blur(0px)",
            position: "absolute",
            top: "0",
            left: "0"
    
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
    
        setFirstProfileSocialIcon({
    
            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 1s ease",
            position: "absolute",
            top: "0",
            left: "0"
    
        });
    
    }

    /** Second Profile Mouse Out & Over Anime */
    const [secondProfileDetails, setSecondProfileDetails] = useState({

        height: "0%",
        opacity: "0",
        filter: "blur(50px)"

    }); // second profile details div

    const [secondProfileDetailsName, setSecondProfileDetailsName] = useState({

        transform: "transateX(-100px)",
        opacity: "0",
        filter: "blur(50px)"

    }); // second profile details name

    const [secondProfileDetailsDesignation, setSecondProfileDetailsDesignation] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(50px)"

    }); // second profile details designation

    const [secondProfileDetailsRole, setSecondProfileDetailsRole] = useState({

        transform: "translateX(-1000px)",
        opacity: "0",
        filter: "blur(50px)"

    }); // second profile details role

    const [secondProfileSocialIcon, setSecondProfileSocialIcon] = useState({

        transform: "translateX(-100px)",
        opacity: "0",
        filter: "blur(50px)",
        position: "absolue",
        top: "0",
        left: "0"

    });


    // Second Profile Mouse Over Anime
    function handleSecondProfileAnimeOnMouseOver() {

        setSecondProfileDetails({

            height: "30%",
            opacity: "1",
            filter: "blur(0px)",
            transition: "all 1s ease"

        });

        setSecondProfileDetailsName({

            transform: "translateX(0px)",
            opacity: "1",
            filter: "blur(0px)",
            transition: "all 0.8s ease 1s"

        });

        setSecondProfileDetailsDesignation({

            transform: "translateX(0px)",
            opacity: "1",
            filter: "blur(0px)",
            transition: "all 0.8s ease 1.2s"

        });

        setSecondProfileDetailsRole({

            transform: "translateX(0px)",
            opacity: "1",
            filter: "blur(0px)",
            transition: "all 0.8s ease 1.3s"

        });

        setSecondProfileSocialIcon({

            transform: "translateX(0px)",
            transition: "all 0.8s ease",
            opacity: "1",
            filter: "blur(0px)",
            position: "absolute",
            top: "-15px",
            left: "0"

        });

    }

    // Second Profile Mouse Out Anime
    function handleSecondProfileAnimeOnMouseOut() {
        
        setSecondProfileDetails({

            height: "0%",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 1s ease 0.8s"

        });

        setSecondProfileDetailsName({

            transform: "translateX(-100px)",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 0.8s ease 0.3s"

        });

        setSecondProfileDetailsDesignation({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 0.8s ease 0.2s"

        });

        setSecondProfileDetailsRole({

            transform: "translateX(-1000px)",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 0.8s ease 0.1s"

        });

        setSecondProfileSocialIcon({

            transform: "translateX(-100px)",
            opacity: "0",
            filter: "blur(50px)",
            position: "absolute",
            top: "0",
            left: "0",
            transition: "all 0.8s ease"

        });

    }
    
    return (

        <>
        
            {/** Our Team Profile Section */}
            <div className={AboutSectionStyle.ourTeamProfileSection}>
            
                {/** Inner Profile Section */}
                <div className={AboutSectionStyle.ourTeamInnerProfileSection}>
            
                    {/** First Profile */}
                    <AboutPageOurTeamProfile
                    
                        AboutSectionStyle={AboutSectionStyle}
                        handleProfileAnimeOnMouseOver={handleFirstProfileAnimeOnMouseOver}
                        handleProfileAnimeOnMouseOut={handleFirstProfileAnimeOnMouseOut}
                        profileDetailsDiv={firstProfileDetails}
                        profileDetailsName={firstProfileDetailsName}
                        profileDetailsDesignation={firstProfileDetailsDesignation}
                        profileDetailsRole={firstProfileDetailsRole}
                        profileSocialIcons={firstProfileSocialIcon}
                        profileImage={profile_image_1}
                        profileAltText="Riya Sen"
                        profileName="Riya Sen"
                        profileDesignation="Creative & Client Experience Manager"
                        profileRole="Riya leads brand communication and creative execution at DigiScape, ensuevery project aligns with business goals and maintains high visual standards. She plays a key role in deliveconsistent brand messaging and a seamless client experience across all digital channels."
                        firstSVGIcon={<LuInstagram />}
                        secondSVGIcon={<FaLinkedinIn />}
                        thirdSVGIcon={<FaXTwitter />}
                        fourthSVGIcon={<BiLogoGmail />}
                        
                    />

                    {/** Second Profile */}
                    <AboutPageOurTeamProfile
                    
                        AboutSectionStyle={AboutSectionStyle}
                        profileImage={profile_image_2}
                        profileAltText="Amit roy"
                        profileName="Amit Roy"
                        profileDesignation="Co-Founder & Strategy Director"
                        profileRole="Amit leads DigiScape’s strategy and business direction, partnering with clients to turn objectives into practical digital marketing and web solutions. He focuses on performance, planning, and sustainable growth to ensure every initiative delivers measurable business impact."
                        firstSVGIcon={<LuInstagram />}
                        secondSVGIcon={<FaLinkedinIn />}
                        thirdSVGIcon={<FaXTwitter />}
                        fourthSVGIcon={<BiLogoGmail />}
                        handleProfileAnimeOnMouseOver={handleSecondProfileAnimeOnMouseOver}
                        handleProfileAnimeOnMouseOut={handleSecondProfileAnimeOnMouseOut}
                        profileDetailsDiv={secondProfileDetails}
                        profileDetailsName={secondProfileDetailsName}
                        profileDetailsDesignation={secondProfileDetailsDesignation}
                        profileDetailsRole={secondProfileDetailsRole}
                        profileSocialIcons={secondProfileSocialIcon}
                        
                    />
            
                </div>
            
            </div>
            
        </>

    );

}

export default Aboutpageourteamprofilesection;