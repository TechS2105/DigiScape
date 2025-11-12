import React from 'react';
import { GiBullseye } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import MissionVisionSingleSubSectionComponent from '../Home Mission and Vission Component/Missionvisionsubsectionsinglecomponent';

function Missionvissionsubsectioncontent({MissionVissionStyle}) {
    
    return (

        <>
        
            {/** First Div */}
            <div className={MissionVissionStyle.missionVissionInnerFirstDiv}>

               {/** First Div Inner Box */}
                <div className={MissionVissionStyle.missionVissionFirstDivInnerBox}>
                    
                    <MissionVisionSingleSubSectionComponent
                    
                        heading="ur Mission"
                        svg={<GiBullseye />}
                        para="At DigiScape, our mission is to empower businesses with innovative, data-driven digital marketing solutions that fuel measurable growth. We aim to bridge creativity and technology to help brands build a strong online presence, connect with the right audience, and achieve sustainable success in the digital world."
                        subHeading="Key Commitments:"
                        list1="Deliver tailor-made digital marketing strategies aligned with business goals."
                        list2="Drive measurable growth through SEO, content marketing, PPC, and social media."
                        list3="Create data-driven campaigns that generate real and lasting results."
                        list4="Blend creative storytelling with analytics for maximum impact."
                        list5="Build strong client relationships based on trust, performance, and value."
                        
                    />

               </div>

            </div>

            {/** Second Div */}
            <div className={MissionVissionStyle.missionVissionInnerSecondDiv}>

                <model-viewer src="/images/Home Mission Vission 3D Model Image/Robo_Buddy_1010053817_texture.glb" shadow-intensity="1" camera-controls touch-action="pan-y" ar ar-modes="webxr scene-viewer" disable-zoom auto-rotate camera-orbit="auto 90deg 90deg"></model-viewer>

            </div>

            {/** Third Div */}
            <div className={MissionVissionStyle.missionVissionInnerThirdDiv}>

                {/** Third Div Inner Box */}
                <div className={MissionVissionStyle.missionVissionThirdDivInnerBox}>

                    <h3> Ou<GiStairsGoal /> Vision </h3>
                    <p>Our vision is to establish DigiScape as a globally trusted digital marketing agency known for transforming businesses through innovation, creativity, and strategic excellence. We aim to redefine how brands grow online by setting new standards for digital transformation and brand performance.</p>

                    <h4> What We Aim To Achieve? </h4>

                    <ul>

                        <li>Lead as a top-performing digital transformation partner for global brands.</li>
                        <li>Set industry benchmarks in innovation, performance, and client satisfaction.</li>
                        <li>Inspire businesses to adopt technology-driven marketing for growth.</li>
                        <li>Deliver sustainable and measurable results through strategic innovation.</li>
                        <li>Build a global presence rooted in integrity, excellence, and creativity.</li>

                    </ul>

                </div>
                
            </div>
            
        </> 

    );

}

export default Missionvissionsubsectioncontent;