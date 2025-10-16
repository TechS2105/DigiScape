import React from 'react';
import MissionVissionStyle from '../../../public/styles/home mission and vission files/mission_vission.module.css';
import Container from '../Container Component/Container';
import MissionVissionHeaderContent from '../Home Mission and Vission Component/Missionvissionheadercontent';
import MissionVissionSubSectionContent from '../Home Mission and Vission Component/Missionvissionsubsectioncontent';
import BackgroundText from '../Home Mission and Vission Component/Missionvissionbackgroundtext';
import MissionVisionSecondSubContainer from '../Home Mission and Vission Component/Missionvisionsecondsubcontainer';

function Missionvission() {

    return (

        <>
        
            {/** Container */}
            <Container>

                <div className={MissionVissionStyle.missionVissionContainer}>

                    {/** Mission Vission Header Section */}
                    <div className={MissionVissionStyle.missionVissionHeaderContent}>

                        <MissionVissionHeaderContent
                        
                            MissionVissionStyle={MissionVissionStyle}
                            spanText="Mission & Vission"
                            title="We Handle Complexities, So You Can Drive Growth"
                            paraText="At DigiScape, we simplify the technical and strategic challenges of digital growth. We combine creative design, data-driven marketing, and technical execution to boost visibility, engagement and revenue. So, your team can focus on customers and scaling the business."
                            
                        />

                    </div>

                    {/** Mission Vission Sub Content Section */}
                    <div className={MissionVissionStyle.missionVissionSubContent}>

                        {/** Mission Vission Background Text */}
                        <div className={MissionVissionStyle.missionVissionInnerContentBackgroundText}>

                            {/** Background Text Inner Box */}
                            <div className={MissionVissionStyle.missionVissionInnerBackgroundTextBox}>

                                <BackgroundText
                                
                                    innerText="Misison & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                            </div>

                            <div className={MissionVissionStyle.missionVissionInnerBackgroundTextBox}>

                                <BackgroundText
                                
                                    innerText="Misison & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                            </div>

                            <div className={MissionVissionStyle.missionVissionInnerBackgroundTextBox}>

                                <BackgroundText
                                
                                    innerText="Misison & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                            </div>

                            <div className={MissionVissionStyle.missionVissionInnerBackgroundTextBox}>

                                <BackgroundText
                                
                                    innerText="Misison & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                                <BackgroundText
                                
                                    innerText="Mission & Vission"
                                    
                                />

                            </div>

                        </div>

                        {/** Mission Vission Sub Content Inner Section */}
                        <MissionVissionSubSectionContent
                        
                            MissionVissionStyle={MissionVissionStyle}
                            
                        />

                    </div>

                    {/** Mission Vission Second Sub Content Section */}
                    <div className={MissionVissionStyle.missionVisionSecondSubContent}>

                        <MissionVisionSecondSubContainer
                        
                            MissionVissionStyle={MissionVissionStyle}
                            
                        />

                    </div>

                </div>

            </Container>
            
        </>

    );

}

export default Missionvission;