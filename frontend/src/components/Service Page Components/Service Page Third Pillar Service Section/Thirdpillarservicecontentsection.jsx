import React from 'react';
import { LuArrowBigRight } from "react-icons/lu";
import ThirdPillarServiceContentSectionContent from '../Service Page Third Pillar Service Section/Thirdpillarservicecontentsectioncontent';

function Thirdpillarservicecontentsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Third Pillar Service Content Section */}
            <div className={ServicePageStyle.thirdPillarServiceInnerContentSection}>
            
                <ThirdPillarServiceContentSectionContent
                
                    thirdPillarServiceContentSpanText="{ SERVICE PILLAR 3 }"
                    thirdPillarServiceContentSubHeading="< Web Development & Technology Services >"
                    thirdPillarServiceContentMainHeading="Powering Enterprise Growth Through Scalable Web Solutions"
                    thirdPillarServiceContentPara="We design and build digital platforms that support performance marketing and long-term scalability. Our technology solutions prioritize usability, security, and conversion efficiency."
                    thirdPillarServiceContentListItemHeading="Included Services:"
                    thirdPillarServiceContentListItem_1="Performance & Security Optimization"
                    thirdPillarServiceContentListItem_2="CMS & Third-Party Integrations"
                    thirdPillarServiceContentListItem_3="Website Design & Development"
                    thirdPillarServiceContentListItem_4="Web Application Development"
                    thirdPillarServiceContentListItem_5="E-commerce Development"
                    thirdPillarServiceContentButtonText="View Web & Technology Services"
                    thirdPillarServiceContentButtonIcon={<LuArrowBigRight />}
                    
                />

            </div>
            
        </>

    );

}

export default Thirdpillarservicecontentsection;