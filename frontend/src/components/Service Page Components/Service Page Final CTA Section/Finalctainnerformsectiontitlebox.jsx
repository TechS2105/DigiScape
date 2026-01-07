import React from 'react';
import FinalCtaInnerFormTitleSectionTitles from '../Service Page Final CTA Section/Finalctainnerformtitlesectiontitle';

function Finalctainnerformsectiontitlebox({ServicePageStyle, configureFinalCtaFormMainTitleStyle, configureFinalCtaFormSpanTitleStyle, configureFinalCtaInnerFormTitleSection, finalCtaInnerFormSectionSpanSVGIcon}) {
    
    return (

        <>
        
            {/** Final CTA Inner Form Section Title Box */}
            <div className={ServicePageStyle.servicePageFinalCtaInnerFormTitleSection} style={configureFinalCtaInnerFormTitleSection}>
                        
                {/** Form Title Section Inner Title Div */}
                <div className={ServicePageStyle.servicePageInnerFormTitleSectionTitleDiv}>

                    <FinalCtaInnerFormTitleSectionTitles
                    
                      configureFinalCtaFormMainTitleStyle={configureFinalCtaFormMainTitleStyle}
                      finalCtaInnerFormSectionSpanSVGIcon={finalCtaInnerFormSectionSpanSVGIcon}
                      configureFinalCtaFormSpanTitleStyle={configureFinalCtaFormSpanTitleStyle}
                      finalCTAInnerFormSpanTitle="Strategic Engagement"
                      finalCTAInnerFormMainTitle="Begin a Strategic Digital Conversation"
                    
                    />
                        
                </div>
                        
            </div>

            
        </>

    );

}

export default Finalctainnerformsectiontitlebox;