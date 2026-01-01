import React from 'react';
import { LuArrowBigRight } from "react-icons/lu";
import FirstPillarServiceContentSectionContent from '../Service Page First Pillar Service Section/Firstpillarservicecontentsectioncontent';

function Firstpillarservicecontentsection({ServicePageStyle}){

    return (

        <>
        
            {/** First Pillar Service Content Section */}
            <div className={ServicePageStyle.pillarServiceInnerContentDiv}>
            
                <FirstPillarServiceContentSectionContent
                
                    spanTitle="{ SERVICE PILLAR 1 }"
                    mainHeadingTitle="< Digital Marketing Services >"
                    subHeadingTitle="Performance Driven Digital Marketing That Attracts and Converts"
                    para="Our digital marketing services help brands build visibility, generate qualified demand, and convert audiences into customers. Every campaign is guided by data, aligned with revenue goals, and optimized for long term impact."
                    listItemHeading="Included Services:"
                    includedService1="earch Engine Optimization (SEO)"
                    includedService2="Performance Marketing & PPC"
                    includedService3="Social Media Marketing"
                    includedService4="Content Marketing"
                    includedService5="Email Marketing & Automation"
                    buttonText="View Digital Marketing Services"
                    buttonSVG={<LuArrowBigRight />}
                    
                />
            
            </div>
            
        </>

    );

}

export default Firstpillarservicecontentsection;