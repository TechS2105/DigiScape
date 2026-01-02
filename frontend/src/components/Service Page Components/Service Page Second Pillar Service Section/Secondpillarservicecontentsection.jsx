import React from 'react';
import SecondPillarServiceContentSectionContent from '../Service Page Second Pillar Service Section/Secondpillarservicecontentsectioncontent';
import { LuArrowBigRight } from "react-icons/lu";

function Secondpillarservicecontentsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Second Pillar Service Content Section */}
            <div className={ServicePageStyle.secondPillarServiceInnerContentSection}>

                <SecondPillarServiceContentSectionContent
                
                    secondServicePillarSpanText="{ SERVICE PILLAR 2 }"
                    secondServicePillarSubHeading="< Specialised Digital Growth Services >"
                    secondServicePillarMainHeading="Advanced Growth Solutions Designed to Scale Performance"
                    secondServicePillarParaContent="These services support businesses looking to refine performance, improve efficiency, and gain deeper insight    into digital outcomes. We focus on optimization, automation, and strategic clarity."
                    secondServicePillarListitemHeading="Included Services"
                    secondServicePillarListitem_1="Conversion Rate Optimization (CRO)"
                    secondServicePillarListitem_2="Analytics & Performance Tracking"
                    secondServicePillarListitem_3="Marketing Automation & CRM Integration"
                    secondServicePillarListitem_4="Brand Strategy & Digital Positioning"
                    secondServicePillarListitem_5="Market & Competitor Research"
                    secondServicePillarButtonText="Explore Growth Services" 
                    secondServicePillarButtonIcon={<LuArrowBigRight />}
                    
                />

            </div>
            
        </>

    );

}

export default Secondpillarservicecontentsection;