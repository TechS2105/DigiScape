import React from 'react';
import { FaRegHandshake } from "react-icons/fa6";
import ServicePageFinalCTAInnerFormSectionTitleBox from '../Service Page Final CTA Section/Finalctainnerformsectiontitlebox';
import FinalCTAInnerFormSectionMainFormBox from '../Service Page Final CTA Section/Finalctainnerformsectionmainformbox';

function Finalctainnerformsection({ServicePageStyle, configureFinalCtaMainFormSectionStyle, configureFinalCtaInnerFormTitleSection, configureFinalCtaFormSpanTitleStyle, configureFinalCtaFormMainTitleStyle, configureServicePageInnerFinalCtaFormSection, configureFinalCTAFormStyle}) {
    
    return (

        <>
        
            {/** Final CTA Inner Form Section */}
            <div className={ServicePageStyle.servicePageMainInnerFinalCtaFormBox} style={configureFinalCtaMainFormSectionStyle}>
            
                {/** Final CTA Inner Form Title Section */}
                <ServicePageFinalCTAInnerFormSectionTitleBox
                
                    ServicePageStyle={ServicePageStyle}
                    configureFinalCtaFormMainTitleStyle={configureFinalCtaFormMainTitleStyle}
                    configureFinalCtaFormSpanTitleStyle={configureFinalCtaFormSpanTitleStyle}
                    configureFinalCtaInnerFormTitleSection={configureFinalCtaInnerFormTitleSection}
                    finalCtaInnerFormSectionSpanSVGIcon={<FaRegHandshake/>}
                    
                />
            
                {/** Final CTA Inner Form Section Form */}
                <FinalCTAInnerFormSectionMainFormBox
                
                    ServicePageStyle={ServicePageStyle}
                    configureFinalCTAFormStyle={configureFinalCTAFormStyle}
                    configureServicePageInnerFinalCtaFormSection={configureServicePageInnerFinalCtaFormSection}
                    
                />
            
            </div>
           

        </>

    );

}

export default Finalctainnerformsection;