import React from 'react';
import { GoGoal } from "react-icons/go";
import { RiCircleLine } from "react-icons/ri";
import AboutPageMissionTitles from '../About Page Mission & Vission Components/Aboutpagemissiontitles';
import AboutPageMissionLists from '../About Page Mission & Vission Components/Aboutpagemissionlists';

function Aboutpagemissionsection({ AboutSectionStyle }) {
    
    return (

        <>
        
            {/** About Section Mission */}
            <div className={AboutSectionStyle.aboutSectionMission}>

                {/** SVG Icon Div */}
                <div className={AboutSectionStyle.svgIconDiv}>

                    <GoGoal />

                </div>

                {/** Mission Content */}
                <div className={AboutSectionStyle.missionContent}>

                    {/** Content Div */}
                    <AboutPageMissionTitles
                    
                        AboutSectionStyle={AboutSectionStyle}
                        missionTitle="Our Mission"
                        missionPara="At DigiScape, our mission is to help businesses grow with clarity and confidence in the digital world. We deliver strategic digital marketing and web development solutions that are practical, measurable, and aligned with real business objectives. By combining insight, creativity, and technology, we turn digital efforts into meaningful growth."
                        
                    />

                    {/** Mission List Item Div */}
                    <div className={AboutSectionStyle.listItemDiv}>

                        {/** First Mission List Item */}
                        <AboutPageMissionLists
                    
                            AboutSectionStyle={AboutSectionStyle}
                            listSVGIcon={<RiCircleLine />}
                            listItem1="Create result-driven digital marketing strategies"
                            listItem2="Design and develop user-focused, high-performing websites"
                            listItem3="Use data, research, and testing to guide decisions"
                            listItem4="Maintain transparency, accountability, and clear communication"
                            listItem5="Build long-term partnerships based on trust and value"
                        
                        />

                        {/** Second Mission List Item */}
                        <AboutPageMissionLists
                    
                            AboutSectionStyle={AboutSectionStyle}
                            listSVGIcon={<RiCircleLine />}
                            listItem1="Create result-driven digital marketing strategies"
                            listItem2="Design and develop user-focused, high-performing websites"
                            listItem3="Use data, research, and testing to guide decisions"
                            listItem4="Maintain transparency, accountability, and clear communication"
                            listItem5="Build long-term partnerships based on trust and value"
                        
                        />
                   
                        {/** Third Mission List Item */}
                        <AboutPageMissionLists
                    
                            AboutSectionStyle={AboutSectionStyle}
                            listSVGIcon={<RiCircleLine />}
                            listItem1="Create result-driven digital marketing strategies"
                            listItem2="Design and develop user-focused, high-performing websites"
                            listItem3="Use data, research, and testing to guide decisions"
                            listItem4="Maintain transparency, accountability, and clear communication"
                            listItem5="Build long-term partnerships based on trust and value"
                        
                        />

                        {/** Fourth Mission List Item */}
                        <AboutPageMissionLists
                    
                            AboutSectionStyle={AboutSectionStyle}
                            listSVGIcon={<RiCircleLine />}
                            listItem1="Create result-driven digital marketing strategies"
                            listItem2="Design and develop user-focused, high-performing websites"
                            listItem3="Use data, research, and testing to guide decisions"
                            listItem4="Maintain transparency, accountability, and clear communication"
                            listItem5="Build long-term partnerships based on trust and value"
                        
                        />
                        
                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Aboutpagemissionsection;